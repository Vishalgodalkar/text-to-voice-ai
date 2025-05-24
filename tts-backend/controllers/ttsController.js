// controllers/ttsController.js
const axios = require('axios');

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1';

exports.getVoices = async (req, res) => {
  try {
    const response = await axios.get(`${ELEVENLABS_BASE_URL}/voices`, {
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error('Error fetching voices:', err.message);
    res.status(500).json({ error: 'Failed to fetch voices' });
  }
};

exports.generateAudio = async (req, res) => {
  const { text, voiceId, modelId = 'eleven_multilingual_v2' } = req.body;

  if (!text || !voiceId) {
    return res.status(400).json({ error: 'Text and voiceId are required' });
  }

  try {
    const audioResponse = await axios.post(
      `${ELEVENLABS_BASE_URL}/text-to-speech/${voiceId}`,
      {
        text,
        model_id: modelId,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer', // return raw audio
      }
    );

    res.set('Content-Type', 'audio/mpeg');
    res.send(audioResponse.data);
  } catch (err) {
    console.error('Error generating audio:', err.message);
    res.status(500).json({ error: 'Failed to generate audio' });
  }
};
