import React, { useState, useEffect } from 'react';
import { getUser Preferences, updateUser Preferences } from '../services/preferences';

const UserPreferences = ({ userId }) => {
  const [preferences, setPreferences] = useState({ notificationsEnabled: true, moodTrackingFrequency: 'daily' });

  useEffect(() => {
    const fetchPreferences = async () => {
      const userPreferences = await getUser Preferences(userId);
      setPreferences(userPreferences);
    };
    fetchPreferences();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser  Preferences(userId, preferences);
    // Optionally, show a success message
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Notifications:
          <input
            type="checkbox"
            name="notificationsEnabled"
            checked={preferences.notificationsEnabled}
            onChange={(e) => handleChange({ target: { name: 'notificationsEnabled', value: e.target.checked } })}
          />
        </label>
        <label>
          Mood Tracking Frequency:
          <select
            name="moodTrackingFrequency"
            value={preferences.moodTrackingFrequency}
            onChange={handleChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default UserPreferences;