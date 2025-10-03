import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
      
      <motion.div
        className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full blur-xl opacity-8"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.05, 0.98, 1],
          x: [0, 15, -8, 0],
          y: [0, -10, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-24 h-24 rounded-full blur-xl opacity-6"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 0.96, 1.03, 1],
          x: [0, -12, 6, 0],
          y: [0, 8, -4, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;