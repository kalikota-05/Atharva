import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserPreferences from '../components/UserPreferences';
import MoodAnalysis from '../components/MoodAnalysis';
import CommunityForum from '../components/CommunityForum';
import Feedback from '../components/Feedback';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <h1>Welcome, {user.username}</h1>
      <p>Your personalized dashboard.</p>
      <User Preferences userId={user.id} />
      <MoodAnalysis />
      <CommunityForum />
      <Feedback />
      <Footer />
    </div>
  );
};

export default DashboardPage;