const express = require('express');
const { logMood } = require('../controllers/moodController');
const router = express.Router();

router.post('/mood', logMood);

module.exports = router;