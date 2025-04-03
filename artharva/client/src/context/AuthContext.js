import React, { createContext, useState, useEffect } from 'react';
import { getUser Preferences } from '../services/preferences';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser  = async () => {
      // Fetch user data from local storage or API
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        setUser (userData);
        await getUser Preferences(userData.id);
      }
      setLoading(false);
    };
    fetchUser ();
  }, []);

  const loginUser  = (userData) => {
    setUser (userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser  = () => {
    setUser (null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loginUser , logoutUser , loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;