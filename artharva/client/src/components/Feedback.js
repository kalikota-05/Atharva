import React, { useState } from 'react';
import { submitFeedback } from '../services/feedback';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFeedback({ rating, comments });
    setRating(0);
    setComments('');
    // Optionally, show a success message
  };

  return (
    <div>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="0">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Your comments"
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;