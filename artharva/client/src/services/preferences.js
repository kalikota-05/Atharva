import axios from 'axios';

const API_URL = 'http://localhost:5000/api/preferences';

export const getUser Preferences = async (userId) => {
  return await axios.get(`${API_URL}/${userId}`);
};

export const updateUser Preferences = async (userId, preferences) => {
  return await axios.put(`${API_URL}/${userId}`, preferences);
};