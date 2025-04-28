import React from 'react';
import { motion } from 'framer-motion';

const BusinessCenterHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#086375] to-[#1dd3b0]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-white/10"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-white/5"
            animate={{
              x: [100, 0, 100],
              y: [50, 0, 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Business Center Pro
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Complete Solution for Seamless Business Growth and Management
        </motion.p>
        
        <motion.button
          className="bg-white text-[#086375] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Request a Free Demo
        </motion.button>
      </div>
    </section>
  );
};

export default BusinessCenterHero; 