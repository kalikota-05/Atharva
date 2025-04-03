const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
  notificationsEnabled: { type: Boolean, default: true },
  moodTrackingFrequency: { type: String, default: 'daily' },
});

module.exports = mongoose.model('Preferences', preferencesSchema);