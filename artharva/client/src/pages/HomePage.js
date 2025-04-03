import React from 'react';
import Chatbot from '../components/Chatbot';
import MoodTracker from '../components/MoodTracker';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../components/Notification';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Notification message="Welcome to Atharva! How can we assist you today?" />
      <h1>Welcome to Atharva</h1>
      <p>Your mental health companion.</p>
      <MoodTracker />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default HomePage;