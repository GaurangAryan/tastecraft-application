// ==================== TASTECRAFT AI CHEF CHATBOT ====================
// Frontend chatbot — connects to deployed Render backend

const BACKEND_URL = 'https://tastecraft-backend.onrender.com';

let conversationHistory = [];
let chatbotCreated = false;
let isSending = false;

// ==================== OPEN ====================
function openChatbot() {
    if (!chatbotCreated) {
        createChatbotModal();
        chatbotCreated = true;
    }

    document.getElementById('chatbot-modal').style.display = 'flex';
    document.getElementById('chat-input').focus();

    if (conversationHistory.length === 0) {
        addBotMessage(
            '👋 Hey! I\'m your AI Chef, powered by **Gemini 2.5 Flash**.\n\n' +
            'Ask me anything:\n\n' +
            '• 🍛 Recipe ideas from ingredients you have\n' +
            '• ⏱️ Quick meal suggestions\n' +
            '• 🔄 Ingredient substitutions\n' +
            '• 🥗 Healthy options\n\n' +
            'What would you like to cook today?'
        );
    }
}

// ==================== CLOSE ====================
function closeChatbot() {
    const modal = document.getElementById('chatbot-modal');
    if (modal) modal.style.display = 'none';
}

// ==================== CREATE MODAL ====================
function createChatbotModal() {
    const modal = document.createElement('div');
    modal.id = 'chatbot-modal';
    modal.className = 'chatbot-modal';

    modal.innerHTML = `
        <div class="chatbot-container">

            <div class="chatbot-header">
                <div class="chatbot-header-info">
                    <h3>🤖 AI Chef Assistant</h3>
                    <p>Powered by Gemini 2.5 Flash</p>
                </div>
                <div style="display:flex;gap:0.5rem;align-items:center;">
                    <button class="clear-chat-btn" onclick="clearConversation()">🗑️ Clear</button>
                    <button class="chatbot-close" onclick="closeChatbot()">✕</button>
                </div>
            </div>

            <div class="chatbot-messages" id="chatbot-messages"></div>

            <div class="chatbot-input-container">
                <input
                    type="text"
                    id="chat-input"
                    class="chatbot-input"
                    placeholder="Ask me anything about cooking..."
                    onkeypress="handleEnter(event)"
                    maxlength="500"
                >
                <button id="send-btn" class="chatbot-send-btn" onclick="sendChatMessage()">Send →</button>
            </div>

            <div class="chatbot-quick-actions">
                <button class="quick-action-btn" onclick="quickAsk('What can I make with leftover rice, onion, and eggs?')">🍚 Leftover Ideas</button>
                <button class="quick-action-btn" onclick="quickAsk('Suggest a quick 15-minute dinner')">⚡ Quick Meals</button>
                <button class="quick-action-btn" onclick="quickAsk('Give me healthy Indian breakfast options')">🥗 Healthy Options</button>
            </div>

        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeChatbot();
    });
}

// ==================== HANDLE ENTER KEY ====================
function handleEnter(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendChatMessage();
    }
}

// ==================== SEND MESSAGE ====================
async function sendChatMessage() {
    if (isSending) return;

    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const message = input.value.trim();

    if (!message) return;

    isSending = true;
    input.disabled = true;
    sendBtn.disabled = true;
    sendBtn.textContent = '...';

    addUserMessage(message);
    input.value = '';

    showTypingIndicator();

    try {
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message,
                conversationHistory
            })
        });

        removeTypingIndicator();

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.details || data.error || `HTTP ${response.status}`);
        }

        conversationHistory.push({ role: 'user', content: message });
        conversationHistory.push({ role: 'assistant', content: data.reply });

        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }

        addBotMessage(data.reply || 'Sorry, I did not get a proper response.');

    } catch (error) {
        removeTypingIndicator();
        console.error('[Chatbot Error]', error);

        addBotMessage(
            '❌ **Could not connect to TasteCraft backend.**\n\n' +
            'Possible reasons:\n' +
            '1. Render free backend is waking up. Wait 30–60 seconds and try again.\n' +
            '2. Backend URL is incorrect.\n' +
            '3. CORS issue from backend.\n\n' +
            `Error: ${error.message}`
        );
    } finally {
        isSending = false;
        input.disabled = false;
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send →';
        input.focus();
    }
}

// ==================== QUICK ASK ====================
function quickAsk(question) {
    if (isSending) return;

    const input = document.getElementById('chat-input');
    if (input) {
        input.value = question;
        sendChatMessage();
    }
}

// ==================== ADD USER MESSAGE ====================
function addUserMessage(text) {
    const container = document.getElementById('chatbot-messages');
    const div = document.createElement('div');

    div.className = 'chat-message user-message';
    div.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;

    container.appendChild(div);
    scrollToBottom();
}

// ==================== ADD BOT MESSAGE ====================
function addBotMessage(text) {
    const container = document.getElementById('chatbot-messages');
    const div = document.createElement('div');

    div.className = 'chat-message bot-message';
    div.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">${formatMessage(text)}</div>
    `;

    container.appendChild(div);
    scrollToBottom();
}

// ==================== TYPING INDICATOR ====================
function showTypingIndicator() {
    const container = document.getElementById('chatbot-messages');
    const div = document.createElement('div');

    div.id = 'typing-indicator';
    div.className = 'chat-message bot-message';
    div.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content typing-dots">
            <span></span><span></span><span></span>
        </div>
    `;

    container.appendChild(div);
    scrollToBottom();
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

// ==================== CLEAR ====================
function clearConversation() {
    if (confirm('Clear all conversation history?')) {
        conversationHistory = [];

        const container = document.getElementById('chatbot-messages');
        if (container) container.innerHTML = '';

        addBotMessage('🧹 Conversation cleared! What would you like to cook?');
    }
}

// ==================== UTILS ====================
function scrollToBottom() {
    const c = document.getElementById('chatbot-messages');
    if (c) c.scrollTop = c.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatMessage(text) {
    let f = escapeHtml(text || '');

    f = f.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    f = f.replace(/`(.*?)`/g, '<code>$1</code>');
    f = f.replace(/\n/g, '<br>');

    return f;
}