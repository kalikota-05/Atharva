const Feedback = require('../models/Feedback');

exports.submit Feedback = async (req, res) => {
  const { rating, comments } = req.body;
  try {
    const newFeedback = new Feedback({ rating, comments });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error submitting feedback' });
  }
};