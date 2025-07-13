import React from 'react';
import { motion } from 'framer-motion';

const LoveStory = () => {
  const storyMilestones = [
    {
      title: "First Constellation",
      date: "Mars in Retrograde",
      description: "We met under a meteor shower, two lost souls finding their way through the cosmic dance of fate.",
      symbol: "♈",
      phase: "🌑"
    },
    {
      title: "Planetary Alignment",
      date: "Venus Rising",
      description: "Our first kiss happened during a rare planetary alignment - the universe conspiring for love.",
      symbol: "♀",
      phase: "🌓"
    },
    {
      title: "Eclipse of Hearts",
      date: "Solar Eclipse",
      description: "The proposal came during a total solar eclipse, when day turned to night and our hearts became one.",
      symbol: "☉",
      phase: "🌕"
    },
    {
      title: "Celestial Union",
      date: "Summer Solstice",
      description: "On the longest day of the year, we'll pledge our eternal love under the infinite starry sky.",
      symbol: "♾",
      phase: "🌟"
    }
  ];

  return (
    <section id="love-story" className="section-padding relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="serif-font text-5xl md:text-6xl font-bold constellation-text mb-6">
            Written in the Stars
          </h2>
          <p className="text-xl text-moonlight-silver/80 max-w-2xl mx-auto">
            Our love story unfolds through cosmic events and celestial alignments, 
            each moment guided by the wisdom of the universe.
          </p>
        </motion.div>

        <div className="relative">
          {/* Cosmic timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amethyst via-rose-gold to-moonlight-silver opacity-30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-1 px-8">
                <div className={`cosmic-card ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="flex items-center mb-4">
                    <span className="zodiac-symbol mr-3">{milestone.symbol}</span>
                    <div>
                      <h3 className="serif-font text-2xl font-semibold text-moonlight-silver mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-rose-gold font-medium">{milestone.date}</p>
                    </div>
                  </div>
                  <p className="text-moonlight-silver/80 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Center cosmic symbol */}
              <motion.div
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-amethyst to-rose-gold rounded-full flex items-center justify-center text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {milestone.phase}
              </motion.div>

              <div className="flex-1 px-8">
                {index % 2 !== 0 && (
                  <div className="cosmic-card ml-8">
                    <div className="flex items-center mb-4">
                      <span className="zodiac-symbol mr-3">{milestone.symbol}</span>
                      <div>
                        <h3 className="serif-font text-2xl font-semibold text-moonlight-silver mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-rose-gold font-medium">{milestone.date}</p>
                      </div>
                    </div>
                    <p className="text-moonlight-silver/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="star-divider">
          ✦ ✧ ✦
        </div>
      </div>
    </section>
  );
};

export default LoveStory;