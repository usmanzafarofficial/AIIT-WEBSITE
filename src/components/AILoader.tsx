import React from 'react';
import { motion } from 'framer-motion';

const AILoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-ai-dark/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Main loader animation */}
        <div className="relative mb-8">
          <motion.div
            className="w-20 h-20 border-4 border-ai-cyan/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-ai-blue/50 rounded-full border-t-ai-cyan"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 w-8 h-8 bg-gradient-to-r from-ai-blue to-ai-cyan rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Text animation */}
        <motion.h2
          className="text-2xl font-bold bg-gradient-to-r from-ai-blue to-ai-cyan bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AIIT
        </motion.h2>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-ai-cyan rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.p
          className="text-gray-400 mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Initializing AI Systems...
        </motion.p>
      </div>
    </div>
  );
};

export default AILoader;