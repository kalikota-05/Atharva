const Mood = require('../models/Mood');

exports.logMood = async (req, res) => {
  const { mood } = req.body;
  try {
    const newMood = new Mood({ mood });
    await newMood.save();
    res.status(201).json({ message: 'Mood logged successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error logging mood' });
  }
};