const express = require('express');
const { analyzeMood } = require('../controllers/moodAnalysisController');
const router = express.Router();

router.post('/', analyzeMood);

module.exports = router;