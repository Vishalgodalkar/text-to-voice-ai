// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// ✅ Initialize express app FIRST
const app = express();

// Use middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// ✅ Import and use routes
const ttsRoutes = require('./routes/ttsRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/tts', ttsRoutes);
app.use('/api/ai', aiRoutes); // ✅ Now safe to use

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
