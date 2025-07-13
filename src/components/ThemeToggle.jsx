import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMoon, FiSun } = FiIcons;

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <motion.button
      className="fixed top-8 right-8 z-50 p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
      style={{
        background: theme === 'moonlight' 
          ? 'rgba(200, 211, 232, 0.1)' 
          : 'rgba(255, 255, 255, 0.1)'
      }}
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'moonlight' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'moonlight' ? (
          <SafeIcon icon={FiMoon} className="w-5 h-5 text-moonlight-silver" />
        ) : (
          <SafeIcon icon={FiSun} className="w-5 h-5 text-yellow-300" />
        )}
      </motion.div>
      <span className="sr-only">
        {theme === 'moonlight' ? 'Switch to Starlight' : 'Switch to Moonlight'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;