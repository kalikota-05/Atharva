const express = require('express');
const { getUser Preferences, updateUser Preferences } = require('../controllers/preferencesController');
const router = express.Router();

router.get('/:userId', getUser Preferences);
router.put('/:userId', updateUser Preferences);

module.exports = router;