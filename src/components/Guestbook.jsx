import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit3, FiHeart, FiStar, FiUser } = FiIcons;

const Guestbook = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah & Mike",
      message: "Wishing you both a lifetime of cosmic adventures and infinite love! ✨",
      timestamp: "2 hours ago",
      zodiac: "♌"
    },
    {
      id: 2,
      name: "Emily Rose",
      message: "Your love story is truly written in the stars. Can't wait to celebrate with you under the moonlight! 🌙",
      timestamp: "5 hours ago",
      zodiac: "♓"
    },
    {
      id: 3,
      name: "David & Lisa",
      message: "Two beautiful souls destined to shine together forever. Congratulations on your celestial union! 💫",
      timestamp: "1 day ago",
      zodiac: "♊"
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    zodiac: ''
  });

  const [sparkles, setSparkles] = useState([]);

  const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        timestamp: "Just now"
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '', zodiac: '' });
    }
  };

  const handleChange = (e) => {
    setNewMessage({
      ...newMessage,
      [e.target.name]: e.target.value
    });
  };

  const createSparkle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const sparkle = {
      id: Date.now() + Math.random(),
      x,
      y
    };
    
    setSparkles(prev => [...prev, sparkle]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
    }, 1000);
  };

  return (
    <section id="guestbook" className="section-padding relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="serif-font text-5xl md:text-6xl font-bold constellation-text mb-6">
            Leave a Cosmic Blessing
          </h2>
          <p className="text-xl text-moonlight-silver/80 max-w-2xl mx-auto">
            Share your celestial wishes and become part of our eternal love story
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cosmic-card">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiEdit3} className="w-6 h-6 text-rose-gold mr-3" />
                <h3 className="serif-font text-2xl font-semibold text-moonlight-silver">
                  Write Your Blessing
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-moonlight-silver mb-2 flex items-center">
                    <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newMessage.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver placeholder-moonlight-silver/50 focus:border-rose-gold focus:outline-none transition-colors"
                    placeholder="Enter your celestial name"
                  />
                </div>

                <div>
                  <label className="block text-moonlight-silver mb-2 flex items-center">
                    <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
                    Your Zodiac Sign
                  </label>
                  <select
                    name="zodiac"
                    value={newMessage.zodiac}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver focus:border-rose-gold focus:outline-none transition-colors"
                  >
                    <option value="">Choose your sign</option>
                    {zodiacSigns.map((sign) => (
                      <option key={sign} value={sign}>{sign}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-moonlight-silver mb-2 flex items-center">
                    <SafeIcon icon={FiHeart} className="w-4 h-4 mr-2" />
                    Your Cosmic Message
                  </label>
                  <textarea
                    name="message"
                    value={newMessage.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver placeholder-moonlight-silver/50 focus:border-rose-gold focus:outline-none transition-colors resize-none"
                    placeholder="Share your celestial wishes for Luna & Orion..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="celestial-button w-full py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Cosmic Blessing ✨
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="serif-font text-2xl font-semibold text-moonlight-silver mb-6 text-center">
              Celestial Blessings
            </h3>
            
            <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className="cosmic-card relative overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    whileHover={{ scale: 1.02 }}
                    onMouseMove={createSparkle}
                  >
                    <div className="flex items-start mb-3">
                      <div className="text-2xl mr-3 text-rose-gold">
                        {message.zodiac || '✨'}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-moonlight-silver">
                            {message.name}
                          </h4>
                          <span className="text-xs text-moonlight-silver/60">
                            {message.timestamp}
                          </span>
                        </div>
                        <p className="text-moonlight-silver/80 leading-relaxed">
                          {message.message}
                        </p>
                      </div>
                    </div>
                    
                    {/* Sparkle effects */}
                    <AnimatePresence>
                      {sparkles.map((sparkle) => (
                        <motion.div
                          key={sparkle.id}
                          className="absolute pointer-events-none text-yellow-300"
                          style={{ left: sparkle.x, top: sparkle.y }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          ✨
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <div className="star-divider">
          ✦ ✧ ✦
        </div>
      </div>
    </section>
  );
};

export default Guestbook;