
# 🎙️ Text-to-Voice AI Web App

This is a full-stack MERN application that allows users to convert text into realistic speech using ElevenLabs Text-to-Speech API. It also includes a language detector, dark mode UI, and multiple voice support.

---

## 📦 Features

- 🌍 Multi-language text input
- 🗣️ Realistic voice generation (male & female voices)
- 🔄 Auto language detection
- 🌙 Light/Dark theme toggle
- 🧠 AI tools (in progress): Text Enhancer, Translator, Summarizer, Grammar Checker

---

## 🚀 Tech Stack

- **Frontend**: React, React Router, Axios, React Icons
- **Backend**: Node.js, Express.js
- **APIs**: ElevenLabs, OpenAI (optional)
- **Styling**: CSS with a blue-themed responsive layout

---

## 🧰 Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Git
- OpenAI API Key (optional)
- ElevenLabs API Key (required)

---

## 🛠️ Getting Started

### 🔹 1. Clone the repo

```bash
git clone https://github.com/your-username/text-to-voice-ai.git
cd text-to-voice-ai
```

---

### 🔹 2. Set up the backend

```bash
cd tts-backend
npm install
```

#### Create a `.env` file in `tts-backend/`:

```env
ELEVENLABS_API_KEY=your_elevenlabs_api_key
OPENAI_API_KEY=your_openai_api_key  # optional, for enhancer/translator
```

#### Start the backend server:

```bash
npm run dev
```

This will run the backend on: [http://localhost:5000](http://localhost:5000)

---

### 🔹 3. Set up the frontend

Open a new terminal:

```bash
cd tts-frontend
npm install
npm start
```

This will open the React app at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Environment File Example

In `tts-backend/.env`:

```
ELEVENLABS_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

---

## 🔒 Notes

- `node_modules/` and `.env` are excluded via `.gitignore`
- Voice Cloning requires a paid ElevenLabs plan
- OpenAI API usage is limited by your account quota

---

## 📸 Screenshots (Optional)

_Add UI screenshots or feature previews here_

---

## 🧪 Upcoming Features

- Speech-to-Text
- Document-to-Voice
- Audio History
- Voice Cloning
- Smart Text Tools (Enhancer, Grammar, Translation, Summary)

---

## 📄 License

MIT

---

## ✨ Author

Made with 💙 by [Your Name](https://github.com/your-username)
