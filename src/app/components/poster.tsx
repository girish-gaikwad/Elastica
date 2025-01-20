import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const PosterSection = () => {
  // Stagger animation for children elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hover animation for cards
  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full py-12 md:py-16 bg-gray-50"
    >
      <div className="w-[90%] mx-auto">
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Exclusive Collections
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our curated selection of premium products with exceptional offers and exclusive deals.
          </motion.p>
        </motion.div>

        {/* Featured Campaigns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Summer Collection Poster */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="relative overflow-hidden group rounded-lg shadow-lg"
          >
            <div className="absolute inset-0 w-full h-full">
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src="/img4.jpg" 
                alt="Summer Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90" />
            </div>
            <motion.div 
              variants={itemVariants}
              className="relative h-[400px] p-8"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block text-white text-sm font-medium px-4 py-1.5 bg-white/20 rounded-full mb-4 backdrop-blur-sm"
                  >
                    Limited Edition
                  </motion.span>
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    Summer Elegance 2025
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-white/90 text-lg mb-6 max-w-md leading-relaxed"
                  >
                    Elevate your summer wardrobe with our exclusive collection. Enjoy up to 40% off on selected premium items.
                  </motion.p>
                </div>
                <motion.div
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-fit bg-white text-blue-600 hover:bg-white/90 transition-all duration-300 rounded-full px-6"
                  >
                    Explore Collection
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Flash Sale Poster */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="relative overflow-hidden group rounded-lg shadow-lg"
          >
            <div className="absolute inset-0 w-full h-full">
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src="/img2.jpg" 
                alt="Flash Sale"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-pink-500/90" />
            </div>
            <motion.div 
              variants={itemVariants}
              className="relative h-[400px] p-8"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block text-white text-sm font-medium px-4 py-1.5 bg-white/20 rounded-full mb-4 backdrop-blur-sm"
                  >
                    Premium Access
                  </motion.span>
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    Exclusive Flash Sale
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-white/90 text-lg mb-6 max-w-md leading-relaxed"
                  >
                    24 hours of unprecedented savings. Unlock an additional 20% off on luxury brands today only.
                  </motion.p>
                </div>
                <motion.div
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-fit bg-white text-pink-600 hover:bg-white/90 transition-all duration-300 rounded-full px-6"
                  >
                    Shop Deals
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Featured Categories */}
        <motion.div 
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
          >
            Popular Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Premium Electronics', 
                image: '/img1.jpg',
                description: 'Latest tech innovation'
              },
              { 
                name: 'Luxury Fashion', 
                image: '/img2.jpg',
                description: 'Curated designer collection'
              },
              { 
                name: 'Modern Living', 
                image: '/img3.jpg',
                description: 'Contemporary lifestyle'
              }
            ].map((category, index) => (
              <motion.div 
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden group rounded-lg shadow-md cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r 
                    ${index === 0 ? 'from-blue-500/80 to-cyan-500/80' : ''}
                    ${index === 1 ? 'from-violet-500/80 to-purple-500/80' : ''}
                    ${index === 2 ? 'from-rose-500/80 to-orange-500/80' : ''}
                  `} />
                </div>
                <div className="relative h-[220px] p-6">
                  <div className="relative z-10">
                    <motion.h3 
                      variants={itemVariants}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      {category.name}
                    </motion.h3>
                    <motion.p 
                      variants={itemVariants}
                      className="text-white/90 text-base mb-4"
                    >
                      {category.description}
                    </motion.p>
                    <motion.span 
                      whileHover={{ x: 10 }}
                      className="text-white text-sm font-medium group-hover:underline inline-flex items-center"
                    >
                      Discover More 
                      <svg 
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PosterSection;