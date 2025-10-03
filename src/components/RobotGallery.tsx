import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RobotGallery: React.FC = () => {
  const [activeRobot, setActiveRobot] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const aiExperts = [
    {
      id: 1,
      name: 'Muhammad Jamshaid Ali',
      type: 'Full-Stack AI Researcher',
      description: 'BS/Master level researcher specializing in Python development, Machine Learning, and full-stack web technologies.',
      position: [-3, 0, 0] as [number, number, number],
      color: '#0066ff',
      gender: 'male',
      image: '/images/jamshaid.jpg',
      whatsapp: '+923265641620',
      features: ['Python & ML', 'React Development', 'MongoDB & Node.js', 'Microsoft Word'],
    },
    {
      id: 2,
      name: 'Usman Zafar',
      type: 'AI & Data Structure Expert',
      description: 'Specialist in Artificial Intelligence, Machine Learning, and advanced data structures with expertise in multiple programming languages.',
      position: [0, 0, 0] as [number, number, number],
      color: '#00d4ff',
      gender: 'male',
      image: '/images/usman.jpg',
      whatsapp: '+923205665392',
      features: ['AI & Machine Learning', 'Python & PHP', 'Data Structures', 'Microsoft Excel'],
    },
    {
      id: 3,
      name: 'Hassan Ahmad',
      type: 'Trading & AI Model Specialist',
      description: 'Trading master and researcher with expertise in data science, AI model architecture, and advanced trading strategies.',
      position: [3, 0, 0] as [number, number, number],
      color: '#6f42c1',
      gender: 'male',
      image: '/images/hassan.jpg',
      whatsapp: '+923198081524',
      features: ['Trading Strategies', 'Data Science', 'AI Model Structure', 'Research Analysis'],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-dark to-ai-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-ai-blue/10 to-ai-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-ai-blue/20 to-ai-cyan/20 border border-ai-cyan/30 rounded-full text-ai-cyan text-sm font-medium mb-6 backdrop-blur-sm"
          >
            👨‍💻 AI Experts
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Leading
            <br />
            <span className="bg-gradient-to-r from-ai-blue via-ai-cyan to-ai-purple bg-clip-text text-transparent">
              AI Specialists
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our world-class team of AI experts, each bringing decades of experience 
            in cutting-edge artificial intelligence research and development.
          </p>
        </motion.div>

        {/* 3D Robot Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* AI Expert Profile Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 rounded-2xl border border-ai-cyan/20 overflow-hidden bg-gradient-to-br from-ai-gray/30 to-ai-dark/30 backdrop-blur-sm relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRobot}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="h-full flex items-center justify-center relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br opacity-20 blur-xl"
                  style={{ backgroundColor: aiExperts[activeRobot].color }}
                />
                
                {/* Expert Image */}
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 relative">
                    <img
                      src={aiExperts[activeRobot].image}
                      alt={aiExperts[activeRobot].name}
                      className="w-full h-full rounded-full object-cover border-4 border-ai-cyan/50 shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.svg';
                      }}
                    />
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-ai-cyan/50 to-ai-purple/50 animate-spin-slow" style={{ background: `conic-gradient(from 0deg, transparent, ${aiExperts[activeRobot].color}50, transparent)` }} />
                    
                    {/* Gender Indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm"
                         style={{ backgroundColor: aiExperts[activeRobot].color }}>
                      {aiExperts[activeRobot].gender === 'female' ? '👩' : '👨'}
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 right-8 w-3 h-3 rounded-full animate-ping opacity-60" style={{ backgroundColor: aiExperts[activeRobot].color }}></div>
                    <div className="absolute bottom-12 left-12 w-2 h-2 bg-ai-cyan rounded-full animate-ping delay-1000 opacity-40"></div>
                    <div className="absolute top-1/3 left-8 w-2 h-2 bg-ai-purple rounded-full animate-ping delay-2000 opacity-50"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Expert Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRobot}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full animate-pulse" 
                    style={{ backgroundColor: aiExperts[activeRobot].color }}
                  ></div>
                  <span className="text-ai-cyan font-medium">{aiExperts[activeRobot].type}</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-white/10">
                    {aiExperts[activeRobot].gender === 'female' ? 'Female Expert' : 'Male Expert'}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {aiExperts[activeRobot].name}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {aiExperts[activeRobot].description}
                </p>
                
                {/* Expertise Areas */}
                <div className="space-y-3">
                  <h4 className="text-ai-cyan font-semibold text-lg">Core Expertise</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {aiExperts[activeRobot].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-sm p-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10"
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: aiExperts[activeRobot].color }}></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* WhatsApp Contact Button */}
                <motion.a
                  href={`https://wa.me/${aiExperts[activeRobot].whatsapp.replace('+', '')}?text=Hi%20${aiExperts[activeRobot].name.split(' ')[0]},%20I'm%20interested%20in%20your%20AI%20expertise%20and%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
                >
                  <span className="flex items-center space-x-2">
                    <span>💬</span>
                    <span>WhatsApp {aiExperts[activeRobot].name.split(' ')[0]}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Expert Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {aiExperts.map((expert, index) => (
            <motion.button
              key={expert.id}
              onClick={() => setActiveRobot(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeRobot === index
                  ? 'bg-gradient-to-r from-ai-blue to-ai-cyan text-white shadow-lg'
                  : 'bg-ai-gray/50 border border-ai-cyan/20 text-gray-300 hover:border-ai-cyan/40'
              }`}
            >
              <span>{expert.gender === 'female' ? '👩' : '👨'}</span>
              <span>{expert.name.split(' ')[1]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-cyan text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-ai-cyan/25 transition-all duration-300 group"
          >
            <span className="flex items-center space-x-2">
              <span>Meet All AI Experts</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RobotGallery;