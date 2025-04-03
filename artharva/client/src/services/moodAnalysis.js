import axios from 'axios';

const API_URL = 'http://localhost:5000/api/mood-analysis';

export const analyzeMood = async (moodData) => {
  return await axios.post(API_URL, moodData);
};