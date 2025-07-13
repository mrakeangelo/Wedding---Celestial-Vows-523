import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80",
      title: "Stargazing Together",
      description: "Our first night under the stars"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80",
      title: "Moonlit Proposal",
      description: "The moment that changed everything"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      title: "Cosmic Connection",
      description: "Two souls aligned by fate"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80",
      title: "Celestial Dance",
      description: "Dancing among the stars"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80",
      title: "Galaxy of Love",
      description: "Our universe together"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80",
      title: "Infinite Journey",
      description: "Forever written in the stars"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="section-padding relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="serif-font text-5xl md:text-6xl font-bold constellation-text mb-6">
            Cosmic Memories
          </h2>
          <p className="text-xl text-moonlight-silver/80 max-w-2xl mx-auto">
            A constellation of moments that led us to this celestial union
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="serif-font text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-80">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="star-divider">
          ✦ ✧ ✦
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={closeModal}
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={prevImage}
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={nextImage}
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>

              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6 text-center">
                <h3 className="serif-font text-2xl font-semibold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;