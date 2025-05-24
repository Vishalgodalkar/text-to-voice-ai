// routes/aiRoutes.js
const express = require('express');
const router  = express.Router();

/*  ──────────────────────────────────────────
    OpenAI v4 – single default export
   ────────────────────────────────────────── */
const OpenAI = require('openai');

/*  Initialise the OpenAI client  */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,   // make sure this is set in .env
});

/*  POST  /api/ai/enhance-text
    Body: { text: "..." }
------------------------------------------------*/
router.post('/enhance-text', async (req, res) => {
  const { text } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'No text provided' });
  }

  try {
    /* Create Chat Completion (GPT-3.5-Turbo) */
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that improves and enhances user-written text without changing its original meaning.',
        },
        {
          role: 'user',
          content: `Enhance this text:\n\n${text}`,
        },
      ],
      temperature: 0.7,
    });

    const enhancedText = response.choices[0].message.content.trim();
    res.json({ enhancedText });
  } catch (err) {
    console.error('OpenAI error:', err);
    res.status(500).json({ error: 'Failed to enhance text' });
  }
});

module.exports = router;
