import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiExternalLink, FiHeart, FiStar } = FiIcons;

const Registry = () => {
  const registryItems = [
    {
      title: "Celestial Telescope",
      description: "For stargazing adventures and cosmic discoveries",
      price: "$299",
      category: "Astronomy",
      icon: "🔭",
      link: "#"
    },
    {
      title: "Planetarium Projector",
      description: "Bring the night sky indoors for romantic evenings",
      price: "$149",
      category: "Home",
      icon: "🌌",
      link: "#"
    },
    {
      title: "Moonlight Dinner Set",
      description: "Elegant dinnerware for celestial dining experiences",
      price: "$199",
      category: "Dining",
      icon: "🌙",
      link: "#"
    },
    {
      title: "Star Map of Our First Kiss",
      description: "Custom star map from our special moment",
      price: "$89",
      category: "Personalized",
      icon: "⭐",
      link: "#"
    },
    {
      title: "Cosmic Honeymoon Fund",
      description: "Help us explore the wonders of the universe together",
      price: "Any amount",
      category: "Experience",
      icon: "✈️",
      link: "#"
    },
    {
      title: "Constellation Jewelry Set",
      description: "Matching necklaces with our zodiac constellations",
      price: "$179",
      category: "Jewelry",
      icon: "💎",
      link: "#"
    }
  ];

  const categories = ["All", "Astronomy", "Home", "Dining", "Personalized", "Experience", "Jewelry"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = selectedCategory === "All" 
    ? registryItems 
    : registryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="registry" className="section-padding relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="serif-font text-5xl md:text-6xl font-bold constellation-text mb-6">
            Galactic Honeymoon Registry
          </h2>
          <p className="text-xl text-moonlight-silver/80 max-w-2xl mx-auto">
            Help us build our cosmic nest and embark on celestial adventures together
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amethyst to-rose-gold text-white'
                  : 'bg-white/10 text-moonlight-silver hover:bg-white/20'
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Registry Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="cosmic-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{item.icon}</div>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-amethyst/20 to-rose-gold/20 rounded-full text-sm text-rose-gold font-medium">
                  {item.category}
                </span>
              </div>
              
              <h3 className="serif-font text-xl font-semibold text-moonlight-silver mb-3 text-center">
                {item.title}
              </h3>
              
              <p className="text-moonlight-silver/80 text-center mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-rose-gold font-semibold text-lg">
                  {item.price}
                </div>
                <motion.a
                  href={item.link}
                  className="flex items-center text-moonlight-silver hover:text-rose-gold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiGift} className="w-4 h-4 mr-2" />
                  <span className="text-sm">Give Gift</span>
                  <SafeIcon icon={FiExternalLink} className="w-3 h-3 ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cosmic-card max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-rose-gold mr-3" />
              <h3 className="serif-font text-2xl font-semibold text-moonlight-silver">
                A Note from the Stars
              </h3>
            </div>
            <p className="text-moonlight-silver/80 leading-relaxed mb-6">
              Your presence at our wedding is the greatest gift of all. If you wish to honor us 
              with a gift, we've curated these items to help us build our cosmic life together. 
              Every contribution helps us create a home filled with love, wonder, and starlight.
            </p>
            <div className="text-rose-gold font-medium">
              With cosmic gratitude, Luna & Orion ✨
            </div>
          </div>
        </motion.div>

        <div className="star-divider">
          ✦ ✧ ✦
        </div>
      </div>
    </section>
  );
};

export default Registry;