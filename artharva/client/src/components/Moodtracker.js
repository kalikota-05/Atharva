import React, { useState } from 'react';
import { logMood } from '../services/api';

const MoodTracker = () => {
  const [mood, setMood] = useState('');

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    await logMood({ mood });
    setMood('');
  };

  return (
    <div>
      <h2>Log Your Mood</h2>
      <form onSubmit={handleMoodSubmit}>
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MoodTracker;