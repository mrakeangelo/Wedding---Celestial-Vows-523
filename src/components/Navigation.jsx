import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Our Story', href: '#love-story' },
    { name: 'Wedding Details', href: '#wedding-info' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Registry', href: '#registry' },
    { name: 'Guestbook', href: '#guestbook' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-white/10"
        style={{ background: 'rgba(26, 27, 58, 0.8)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="serif-font text-2xl font-bold constellation-text"
              whileHover={{ scale: 1.05 }}
            >
              Celestial Vows ✨
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  className="text-moonlight-silver hover:text-rose-gold transition-colors duration-300"
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-moonlight-silver"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed inset-0 z-30 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <motion.div
          className="absolute top-20 left-4 right-4 bg-primary-navy/95 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              className="block w-full text-left py-3 text-moonlight-silver hover:text-rose-gold transition-colors duration-300"
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;