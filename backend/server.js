// ==================== TASTECRAFT BACKEND ====================
// Model: gemini-2.5-flash  |  SDK: @google/genai (new)
// Author: Gaurang Aryan

const express = require('express');
const cors    = require('cors');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ==================== CONFIG ====================
const SYSTEM_PROMPT = `You are an expert AI Chef for TasteCraft — an Indian & Continental recipe app.
Help users with recipe ideas, cooking tips, ingredient substitutions, dietary advice, beverages and desserts.
Keep replies under 200 words unless user asks for full recipe. For Indian dishes always include Hindi name.
Recipe format: Name (Hindi) | Description | Key ingredients | Cook time | Difficulty.
Always be friendly, practical, and never refuse a food question.`;

// Model priority — gemini-2.5-flash first, lite as backup
const MODELS = [
    'gemini-2.5-flash',
    'gemini-2.5-flash-lite',
    'gemini-2.5-flash-preview-05-20'
];

// ==================== HELPERS ====================
function isKeySet() {
    return !!process.env.GEMINI_API_KEY &&
           process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here';
}

// Core function — tries each model until one works
// FIX: response.text is a STRING property in @google/genai, NOT a function
async function callGemini(contents, maxTokens = 1024) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    for (const modelName of MODELS) {
        try {
            const response = await ai.models.generateContent({
                model   : modelName,
                contents: contents,
                config  : {
                    systemInstruction : SYSTEM_PROMPT,
                    maxOutputTokens   : maxTokens,
                    temperature       : 0.7
                }
            });

            // ✅ CORRECT: response.text is a property (string), NOT response.text()
            const text = response.text;

            if (!text) throw new Error('Empty response from model');

            console.log(`✅ [${modelName}] OK — "${text.slice(0, 50)}..."`);
            return { text, model: modelName };

        } catch (err) {
            console.warn(`⚠️  [${modelName}] failed: ${err.message?.slice(0, 80)}`);
        }
    }

    throw new Error('All Gemini models failed. Check your API key at https://aistudio.google.com/app/apikey');
}

// ==================== ROUTES ====================

app.get('/', (req, res) => {
    res.json({
        status : 'online',
        message: 'TasteCraft Gemini 2.5 Backend 🍳',
        routes : {
            test            : 'GET  /api/test',
            chat            : 'POST /api/chat',
            recipeSuggestion: 'POST /api/recipe-suggestion'
        }
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', apiKeySet: isKeySet(), uptime: `${Math.floor(process.uptime())}s` });
});

// ── TEST ENDPOINT ──────────────────────────────────────────────
app.get('/api/test', async (req, res) => {
    if (!isKeySet()) {
        return res.status(500).json({
            success: false,
            problem: 'GEMINI_API_KEY not set in .env',
            steps  : [
                'Open .env in your backend folder',
                'Set GEMINI_API_KEY=AIza...',
                'Get key from https://aistudio.google.com/app/apikey',
                'Restart server'
            ]
        });
    }

    try {
        const { text, model } = await callGemini([
            { role: 'user', parts: [{ text: 'Say hello in 3 words only.' }] }
        ]);
        res.json({
            success    : true,
            message    : '✅ Gemini is working!',
            activeModel: model,
            testReply  : text.trim(),
            keyPrefix  : process.env.GEMINI_API_KEY.substring(0, 8) + '...'
        });
    } catch (err) {
        res.status(500).json({ success: false, problem: err.message });
    }
});

// ── CHAT ───────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationHistory = [] } = req.body;

        if (!message?.trim()) {
            return res.status(400).json({ error: 'message field is required' });
        }
        if (!isKeySet()) {
            return res.status(500).json({ error: 'API Key Missing', details: 'Set GEMINI_API_KEY in .env' });
        }

        console.log(`[CHAT] "${message.slice(0, 60)}"`);

        const contents = [
            ...conversationHistory
                .filter(m => m.role === 'user' || m.role === 'assistant')
                .map(m => ({
                    role : m.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: m.content }]
                })),
            { role: 'user', parts: [{ text: message }] }
        ];

        const { text, model } = await callGemini(contents, 1024);
        res.json({ success: true, reply: text, model });

    } catch (err) {
        console.error('[CHAT ERROR]', err.message);
        if (err.message?.includes('API_KEY_INVALID')) {
            return res.status(401).json({ error: 'Invalid API Key' });
        }
        if (err.status === 429 || err.message?.includes('quota')) {
            return res.status(429).json({ error: 'Rate Limit. Wait and retry.' });
        }
        res.status(500).json({ error: 'Server Error', details: err.message });
    }
});

// ── RECIPE SUGGESTION ──────────────────────────────────────────
app.post('/api/recipe-suggestion', async (req, res) => {
    try {
        const { ingredients = [], dietPreference = 'any', cuisine = 'any' } = req.body;

        if (!ingredients.length) {
            return res.status(400).json({ error: 'ingredients array is required' });
        }
        if (!isKeySet()) {
            return res.status(500).json({ error: 'API Key Missing' });
        }

        const diet   = dietPreference === 'veg' ? 'vegetarian' : dietPreference === 'nonveg' ? 'non-vegetarian' : '';
        const cui    = cuisine !== 'any' ? cuisine : 'Indian or Continental';
        const prompt = `I have: ${ingredients.join(', ')}. Suggest 2-3 ${diet} ${cui} recipes with name, Hindi name, description, cook time, difficulty.`;

        console.log(`[RECIPE] ${ingredients.join(', ')}`);

        const { text, model } = await callGemini(
            [{ role: 'user', parts: [{ text: prompt }] }],
            1500
        );

        res.json({ success: true, suggestions: text, model });

    } catch (err) {
        console.error('[RECIPE ERROR]', err.message);
        res.status(500).json({ error: 'Server Error', details: err.message });
    }
});

// 404
app.use((req, res) => {
    res.status(404).json({
        error    : 'Route Not Found',
        tried    : `${req.method} ${req.path}`,
        available: ['GET /api/test', 'POST /api/chat', 'POST /api/recipe-suggestion']
    });
});

// Global error
app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Unexpected Error', details: err.message });
});

// ==================== START ====================
app.listen(PORT, () => {
    const keyOk = isKeySet();
    console.log('\n🚀 ==========================================');
    console.log('✅  TasteCraft Backend Started!');
    console.log(`📍  http://localhost:${PORT}`);
    console.log(`🤖  Model   : gemini-2.5-flash`);
    console.log(`🔑  API Key : ${keyOk ? 'SET ✓' : 'MISSING ✗'}`);
    console.log(`🧪  Test    : http://localhost:${PORT}/api/test`);
    console.log('==========================================\n');
});

process.on('SIGINT',  () => { console.log('\n👋 Stopped.'); process.exit(0); });
process.on('SIGTERM', () => { console.log('\n👋 Stopped.'); process.exit(0); });