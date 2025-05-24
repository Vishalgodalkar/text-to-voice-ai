// routes/ttsRoutes.js
const express = require('express');
const router = express.Router();
const { generateAudio, getVoices } = require('../controllers/ttsController');

router.post('/generate', generateAudio);
router.get('/voices', getVoices);

module.exports = router;

