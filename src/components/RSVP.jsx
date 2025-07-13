import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiHeart, FiStar } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    zodiacSign: '',
    guestCount: '1',
    dietaryRestrictions: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const zodiacSigns = [
    { sign: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19' },
    { sign: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20' },
    { sign: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20' },
    { sign: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22' },
    { sign: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22' },
    { sign: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22' },
    { sign: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22' },
    { sign: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21' },
    { sign: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21' },
    { sign: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19' },
    { sign: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18' },
    { sign: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="section-padding relative">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="cosmic-card">
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
              <h2 className="serif-font text-4xl font-bold constellation-text mb-4">
                Cosmic Gratitude!
              </h2>
              <p className="text-xl text-moonlight-silver/80 mb-6">
                Your response has been written in the stars. We're thrilled to celebrate 
                this celestial union with you!
              </p>
              <div className="text-rose-gold text-2xl">
                Thank you for being part of our cosmic journey! 🌟
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-padding relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="serif-font text-5xl md:text-6xl font-bold constellation-text mb-6">
            Join Our Cosmic Union
          </h2>
          <p className="text-xl text-moonlight-silver/80 max-w-2xl mx-auto">
            Let the stars align for our celebration. Share your celestial details below.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="cosmic-card">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-moonlight-silver mb-2 flex items-center">
                  <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver placeholder-moonlight-silver/50 focus:border-rose-gold focus:outline-none transition-colors"
                  placeholder="Enter your celestial name"
                />
              </div>

              <div>
                <label className="block text-moonlight-silver mb-2 flex items-center">
                  <SafeIcon icon={FiMail} className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver placeholder-moonlight-silver/50 focus:border-rose-gold focus:outline-none transition-colors"
                  placeholder="your.email@cosmos.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-moonlight-silver mb-2 flex items-center">
                  <SafeIcon icon={FiHeart} className="w-4 h-4 mr-2" />
                  Will you attend? *
                </label>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver focus:border-rose-gold focus:outline-none transition-colors"
                >
                  <option value="">Select your cosmic response</option>
                  <option value="yes">✨ Yes, I'll be there under the stars</option>
                  <option value="no">💫 No, but my heart will be with you</option>
                </select>
              </div>

              <div>
                <label className="block text-moonlight-silver mb-2">
                  Number of Guests
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver focus:border-rose-gold focus:outline-none transition-colors"
                >
                  <option value="1">Just me</option>
                  <option value="2">2 cosmic souls</option>
                  <option value="3">3 stargazers</option>
                  <option value="4">4 celestial beings</option>
                  <option value="5+">5+ constellation members</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-moonlight-silver mb-2 flex items-center">
                <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
                Your Zodiac Sign
              </label>
              <select
                name="zodiacSign"
                value={formData.zodiacSign}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver focus:border-rose-gold focus:outline-none transition-colors"
              >
                <option value="">Choose your celestial sign</option>
                {zodiacSigns.map((zodiac) => (
                  <option key={zodiac.sign} value={zodiac.sign}>
                    {zodiac.symbol} {zodiac.sign} ({zodiac.dates})
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-moonlight-silver mb-2">
                Dietary Restrictions
              </label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver placeholder-moonlight-silver/50 focus:border-rose-gold focus:outline-none transition-colors"
                placeholder="Any cosmic dietary needs?"
              />
            </div>

            <div className="mb-8">
              <label className="block text-moonlight-silver mb-2">
                Celestial Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-moonlight-silver placeholder-moonlight-silver/50 focus:border-rose-gold focus:outline-none transition-colors resize-none"
                placeholder="Share your cosmic wishes for the happy couple..."
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="celestial-button text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send My Cosmic Response ✨
              </motion.button>
            </div>
          </form>
        </motion.div>

        <div className="star-divider">
          ✦ ✧ ✦
        </div>
      </div>
    </section>
  );
};

export default RSVP;