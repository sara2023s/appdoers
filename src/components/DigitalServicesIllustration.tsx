import React from 'react';
import { motion } from 'framer-motion';

const DigitalServicesIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Cloud Computing Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-1/4 w-24 h-24"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#086375] to-[#1dd3b0] rounded-full opacity-20 blur-xl"></div>
          <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-[#3c1642]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Data Analytics Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-1/3 right-1/4 w-32 h-32"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1dd3b0] to-[#affc41] rounded-lg opacity-20 blur-xl"></div>
          <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-16 h-16 text-[#3c1642]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Connected Devices Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-1/3 w-28 h-28"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3c1642] to-[#086375] rounded-lg opacity-20 blur-xl"></div>
          <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-14 h-14 text-[#3c1642]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          d="M25,25 C40,25 40,50 60,50 C75,50 75,75 85,75"
          stroke="#1dd3b0"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
      </svg>
    </div>
  );
};

export default DigitalServicesIllustration; 