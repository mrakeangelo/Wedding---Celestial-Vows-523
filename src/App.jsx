import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import LoveStory from './components/LoveStory';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import StarField from './components/StarField';
import './App.css';

function App() {
  const [theme, setTheme] = useState('moonlight');

  const toggleTheme = () => {
    setTheme(prev => prev === 'moonlight' ? 'starlight' : 'moonlight');
  };

  return (
    <div className={`app ${theme}`}>
      <StarField theme={theme} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <LoveStory />
        <WeddingInfo />
        <Gallery />
        <RSVP />
        <Registry />
        <Guestbook />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;