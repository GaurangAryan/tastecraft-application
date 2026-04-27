# 🚀 TASTECRAFT BACKEND SETUP GUIDE

Complete step-by-step guide to set up and run the TasteCraft backend server.

---

## 📋 PREREQUISITES

Before starting, make sure you have:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Anthropic API Key**
   - Sign up at: https://console.anthropic.com/
   - Get $5 free credit to start

---

## 📁 PROJECT STRUCTURE

```
tastecraft/
├── backend/
│   ├── server.js          # Main backend server
│   ├── package.json       # Dependencies
│   ├── .env              # API keys (create this)
│   └── .gitignore        # Git ignore rules
│
├── frontend/
│   ├── mainapp.html
│   ├── chatbot.js        # Frontend chatbot code
│   ├── chatbot.css       # Chatbot styling
│   └── ... (other frontend files)
```

---

## 🔧 STEP-BY-STEP SETUP

### Step 1: Create Backend Folder

```bash
# In your tastecraft project folder
mkdir backend
cd backend
```

### Step 2: Save Backend Files

Save these files in the `backend` folder:
- `server.js`
- `package.json`
- `.env`
- `.gitignore`

### Step 3: Get Your API Key

1. Go to https://console.anthropic.com/
2. Sign up / Log in
3. Go to **API Keys** section
4. Click **Create Key**
5. Copy your API key (starts with `sk-ant-api03-...`)

### Step 4: Configure .env File

Open `.env` file and replace `your_api_key_here` with your actual key:

```env
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
PORT=3000
```

**⚠️ IMPORTANT:** Never share this file or commit it to GitHub!

### Step 5: Install Dependencies

```bash
# In the backend folder
npm install
```

This will install:
- `express` (web server)
- `@anthropic-ai/sdk` (Claude API)
- `cors` (allow frontend requests)
- `dotenv` (environment variables)
- `nodemon` (auto-reload during development)

### Step 6: Start the Server

```bash
# Start the server
npm start

# OR for development (auto-reload on changes)
npm run dev
```

You should see:

```
🚀 ========================================
✅ TasteCraft Backend Server Started!
📍 Server running on: http://localhost:3000
🤖 AI Chef Bot: READY
🔑 API Key configured: YES ✓
========================================
```

---

## 🌐 CONNECT FRONTEND TO BACKEND

### Step 1: Add Chatbot Files to Frontend

Copy these files to your frontend folder:
- `chatbot.js`
- `chatbot.css`

### Step 2: Update Your HTML

In `mainapp.html` (or wherever you want the chatbot), add:

```html
<!-- Add in <head> -->
<link rel="stylesheet" href="chatbot.css">

<!-- Add before </body> -->
<script src="chatbot.js"></script>
```

### Step 3: Update Chatbot Button

Your existing floating chatbot button should call `openChatbot()`:

```javascript
function openChatbot() {
    // Function is now in chatbot.js
}
```

### Step 4: Test It!

1. Make sure backend is running (`npm start`)
2. Open `mainapp.html` in browser
3. Click the chatbot button (🤖)
4. Try asking: "What can I make with leftover chicken?"

---

## ✅ TESTING THE API

### Test Backend Health

Open browser and go to:
```
http://localhost:3000
```

You should see:
```json
{
  "status": "online",
  "message": "TasteCraft Backend Server is running! 🍳"
}
```

### Test Chat Endpoint (Using Postman or curl)

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Suggest a quick breakfast"}'
```

You should get a response from Claude!

---

## 🐛 TROUBLESHOOTING

### Error: "API key not configured"

**Problem:** `.env` file not found or API key missing

**Solution:**
1. Make sure `.env` file exists in `backend` folder
2. Check that API key is correctly pasted
3. Restart the server

### Error: "Cannot find module 'express'"

**Problem:** Dependencies not installed

**Solution:**
```bash
cd backend
npm install
```

### Error: "Port 3000 already in use"

**Problem:** Another app is using port 3000

**Solution:**
Change port in `.env`:
```env
PORT=3001
```

Also update `BACKEND_URL` in `chatbot.js`:
```javascript
const BACKEND_URL = 'http://localhost:3001';
```

### Error: "CORS policy blocked"

**Problem:** Frontend and backend on different origins

**Solution:** The `cors` package should handle this. Make sure:
1. Backend has `app.use(cors());` (it does in server.js)
2. Frontend is accessing correct `BACKEND_URL`

### Chatbot Opens But No Response

**Problem:** Frontend can't reach backend

**Check:**
1. Backend server is running
2. No errors in browser console (F12)
3. `BACKEND_URL` in `chatbot.js` is correct
4. Try accessing `http://localhost:3000` in browser

---

## 🚀 DEPLOYMENT (OPTIONAL)

### Deploy Backend to Render.com (Free)

1. Push code to GitHub (make sure `.env` is in `.gitignore`)
2. Go to https://render.com/
3. Create New → Web Service
4. Connect your GitHub repo
5. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add Environment Variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your API key
7. Deploy!

### Deploy Frontend to Netlify (Free)

1. Go to https://netlify.com/
2. Drag & drop your frontend folder
3. Update `BACKEND_URL` in `chatbot.js` to your Render URL
4. Done!

---

## 📊 API ENDPOINTS

### 1. Health Check
```
GET /
GET /health
```
Returns server status

### 2. AI Chat
```
POST /api/chat
Body: {
  "message": "your question",
  "conversationHistory": []  // optional
}
```
Returns Claude's response

### 3. Recipe Suggestions
```
POST /api/recipe-suggestion
Body: {
  "ingredients": ["chicken", "rice"],
  "dietPreference": "nonveg",  // optional
  "cuisine": "indian"          // optional
}
```
Returns recipe suggestions

---

## 🎓 WHAT YOU LEARNED

✅ How to build a Node.js backend  
✅ How to integrate external APIs (Anthropic Claude)  
✅ How to handle environment variables securely  
✅ How to connect frontend and backend  
✅ How to handle errors properly  
✅ How to deploy full-stack applications  

---

## 💡 PORTFOLIO TALKING POINTS

**"Tell me about your TasteCraft project"**

> "I built a full-stack recipe discovery platform with an AI-powered chatbot. The frontend is pure HTML/CSS/JavaScript with dynamic rendering. The backend is a Node.js Express server that securely handles Anthropic's Claude API integration. I implemented RESTful endpoints, error handling, CORS configuration, and environment variable management. The chatbot uses conversation history to provide contextual recipe suggestions based on user's ingredients and preferences."

**Interviewer:** 🤯 "When can you start?"

---

## 📞 NEED HELP?

If you get stuck:
1. Check console for errors (Browser: F12, Server: terminal)
2. Verify all files are saved
3. Restart the server
4. Check API key is valid

---

## ⚡ QUICK START COMMANDS

```bash
# Setup (one-time)
cd backend
npm install

# Run server
npm start

# Development mode (auto-reload)
npm run dev

# Test API
curl http://localhost:3000
```

---

**🎉 You're all set! Your AI Chef chatbot should now be working!**

Happy coding! 🚀