import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#086375]/80 to-[#1dd3b0]/80" />
          
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

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Turning Ideas into Beautiful Digital Realities
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Over 20 years of experience helping businesses thrive in a digital-first world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the About page content will go here */}
    </div>
  );
};

export default About; 