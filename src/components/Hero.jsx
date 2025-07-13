import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Constellation Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {/* Constellation lines */}
          <motion.path
            d="M200,300 L400,200 L600,250 L800,150 L900,300"
            stroke="rgba(200, 211, 232, 0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M100,600 L300,500 L500,600 L700,400 L900,500"
            stroke="rgba(232, 180, 160, 0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
          
          {/* Constellation stars */}
          {[
            { x: 200, y: 300 }, { x: 400, y: 200 }, { x: 600, y: 250 },
            { x: 800, y: 150 }, { x: 900, y: 300 }, { x: 100, y: 600 },
            { x: 300, y: 500 }, { x: 500, y: 600 }, { x: 700, y: 400 },
            { x: 900, y: 500 }
          ].map((star, index) => (
            <motion.circle
              key={index}
              cx={star.x}
              cy={star.y}
              r="3"
              fill="rgba(200, 211, 232, 0.8)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Shooting star animation for names */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full"
              initial={{ x: -100, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: 3 }}
            />
            <motion.h1
              className="serif-font text-6xl md:text-8xl font-bold constellation-text mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              Luna & Orion
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-moonlight-silver mb-12 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
          >
            Two souls aligned by the cosmos
          </motion.p>

          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            <div className="text-center">
              <div className="text-rose-gold text-4xl mb-2">✨</div>
              <div className="serif-font text-3xl md:text-4xl font-semibold text-moonlight-silver">
                June 21, 2024
              </div>
              <div className="text-lg text-moonlight-silver/80">
                Summer Solstice • Under the Stars
              </div>
            </div>

            <motion.button
              className="celestial-button text-lg px-8 py-4 mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#rsvp').scrollIntoView({ behavior: 'smooth' })}
            >
              RSVP to Our Cosmic Union
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating celestial elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-rose-gold/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-3xl text-amethyst/50"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        ◆
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-5 text-2xl text-moonlight-silver/30"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✧
      </motion.div>
    </section>
  );
};

export default Hero;