import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiStar, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue to-primary-navy opacity-90" />
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="serif-font text-4xl font-bold constellation-text mb-4">
            Luna & Orion
          </div>
          <p className="text-moonlight-silver/80 max-w-md mx-auto">
            Two souls united under the cosmic dance of eternal love
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <SafeIcon icon={FiHeart} className="w-8 h-8 text-rose-gold mx-auto mb-3" />
            <h4 className="serif-font text-lg font-semibold text-moonlight-silver mb-2">
              Wedding Date
            </h4>
            <p className="text-moonlight-silver/80">
              June 21, 2024<br />
              Summer Solstice
            </p>
          </div>

          <div className="text-center">
            <SafeIcon icon={FiStar} className="w-8 h-8 text-rose-gold mx-auto mb-3" />
            <h4 className="serif-font text-lg font-semibold text-moonlight-silver mb-2">
              Venue
            </h4>
            <p className="text-moonlight-silver/80">
              Moonrise Observatory<br />
              Cosmic Valley
            </p>
          </div>

          <div className="text-center">
            <SafeIcon icon={FiMail} className="w-8 h-8 text-rose-gold mx-auto mb-3" />
            <h4 className="serif-font text-lg font-semibold text-moonlight-silver mb-2">
              Contact
            </h4>
            <p className="text-moonlight-silver/80">
              luna.orion@cosmos.love<br />
              (555) STAR-LOVE
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-moonlight-silver/60 mb-4">
            "Love is the bridge between two hearts, written in the language of stars"
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-moonlight-silver/80 mb-6">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
            <span>Thank you for being part of our cosmic journey</span>
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
          </div>

          <div className="text-sm text-moonlight-silver/50">
            <p className="mb-2">
              Celestial Vows – A Star-Crafted Wedding Template by Mrake Agency
            </p>
            <p>
              © {currentYear} All rights reserved. Made with cosmic love.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-moonlight-silver/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;