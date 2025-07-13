import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiCalendar, FiStar } = FiIcons;

const WeddingInfo = () => {
  const weddingDetails = [
    {
      title: "Ceremony",
      time: "7:00 PM",
      location: "Moonrise Observatory",
      address: "1234 Stellar Way, Cosmic Valley",
      description: "Exchange vows under the open sky as the stars begin to appear",
      icon: FiStar
    },
    {
      title: "Reception",
      time: "8:30 PM",
      location: "Celestial Garden",
      address: "Adjacent to the Observatory",
      description: "Dance the night away under a canopy of twinkling lights",
      icon: FiMapPin
    }
  ];

  return (
    <section id="wedding-info" className="section-padding relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="serif-font text-5xl md:text-6xl font-bold constellation-text mb-6">
            Celestial Celebration
          </h2>
          <p className="text-xl text-moonlight-silver/80 max-w-2xl mx-auto">
            Join us for an enchanted evening where love meets the cosmos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {weddingDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="cosmic-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <SafeIcon 
                  icon={detail.icon} 
                  className="w-8 h-8 text-rose-gold mr-4 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="serif-font text-2xl font-semibold text-moonlight-silver mb-2">
                    {detail.title}
                  </h3>
                  <div className="flex items-center text-rose-gold mb-2">
                    <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
                    <span>{detail.time}</span>
                  </div>
                  <div className="flex items-start text-moonlight-silver/80 mb-3">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{detail.location}</p>
                      <p className="text-sm">{detail.address}</p>
                    </div>
                  </div>
                  <p className="text-moonlight-silver/70 italic">
                    {detail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cosmic-card text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <SafeIcon icon={FiCalendar} className="w-8 h-8 text-amethyst mr-3" />
            <h3 className="serif-font text-2xl font-semibold text-moonlight-silver">
              Save the Date
            </h3>
          </div>
          
          <div className="text-center mb-6">
            <div className="serif-font text-4xl font-bold constellation-text mb-2">
              June 21, 2024
            </div>
            <div className="text-lg text-moonlight-silver/80">
              Summer Solstice • Longest Day of the Year
            </div>
          </div>

          <div className="bg-gradient-to-r from-amethyst/20 to-rose-gold/20 rounded-lg p-6 mb-6">
            <h4 className="serif-font text-xl font-semibold text-moonlight-silver mb-3">
              Celestial Dress Code
            </h4>
            <p className="text-moonlight-silver/80 mb-4">
              Embrace the cosmic theme with deep blues, silvers, and metallics. 
              Think starry night elegance with touches of celestial glamour.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-moonlight-silver/70">
              <span>• Midnight Blues</span>
              <span>• Metallic Accents</span>
              <span>• Starry Patterns</span>
            </div>
          </div>

          <motion.button
            className="celestial-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            View Celestial Map
          </motion.button>
        </motion.div>

        <div className="star-divider">
          ✦ ✧ ✦
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;