import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AIModels: React.FC = () => {
  const [activeModel, setActiveModel] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const aiModels = [
    {
      id: 1,
      name: 'ChatGPT Infrastructure',
      type: 'Large Language Model',
      description: 'Advanced conversational AI with 175B+ parameters, powered by transformer architecture for natural language understanding and generation.',
      parameters: '175B+',
      architecture: 'Transformer',
      color: '#0066ff',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: ['Conversational AI', 'Content Generation', 'Code Assistance', 'Language Translation'],
      infrastructure: ['GPU Clusters', 'Distributed Computing', 'Real-time Inference', 'API Gateway'],
    },
    {
      id: 2,
      name: 'Deepfake Detection',
      type: 'Computer Vision Model',
      description: 'Advanced neural networks combining CNN and RNN architectures to detect manipulated media with 99%+ accuracy in real-time processing.',
      parameters: '50M+',
      architecture: 'CNN + RNN Hybrid',
      color: '#00d4ff',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: ['Media Verification', 'Content Moderation', 'Security Systems', 'Fraud Prevention'],
      infrastructure: ['Edge Computing', 'Real-time Processing', 'Cloud Deployment', 'API Integration'],
    },
    {
      id: 3,
      name: 'Game AI Engine',
      type: 'Reinforcement Learning',
      description: 'Intelligent game AI using reinforcement learning and behavior trees for creating realistic NPCs and procedural content generation.',
      parameters: '25M+',
      architecture: 'Deep RL + Behavior Trees',
      color: '#6f42c1',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: ['Game NPCs', 'Procedural Generation', 'Player Behavior Analysis', 'Dynamic Difficulty'],
      infrastructure: ['Game Engines', 'Real-time Decision Making', 'Memory Optimization', 'Cross-platform'],
    },
    {
      id: 4,
      name: 'Animation Generator',
      type: 'Generative AI Model',
      description: 'AI-powered animation system using motion capture data and style transfer for automated character animation and facial rigging.',
      parameters: '100M+',
      architecture: 'GANs + Motion Transfer',
      color: '#ff6b35',
      image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: ['Character Animation', 'Facial Rigging', 'Motion Capture', 'Style Transfer'],
      infrastructure: ['3D Rendering', 'Motion Libraries', 'Real-time Animation', 'Asset Pipeline'],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            🧩 AI Model Architecture
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Advanced
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Models
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge AI model infrastructure, featuring state-of-the-art architectures 
            powering next-generation applications across multiple domains.
          </p>
        </motion.div>

        {/* AI Model Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Model Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 rounded-2xl border border-cyan-500/20 overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="h-full flex items-center justify-center relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br opacity-20 blur-xl"
                  style={{ backgroundColor: aiModels[activeModel].color }}
                />
                
                {/* Model Visualization */}
                <div className="relative z-10 text-center">
                  <div className="w-64 h-48 mx-auto mb-6 relative">
                    <img
                      src={aiModels[activeModel].image}
                      alt={aiModels[activeModel].name}
                      className="w-full h-full rounded-xl object-cover border-2 border-cyan-500/50 shadow-2xl"
                    />
                    {/* Animated Network Overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-semibold">{aiModels[activeModel].architecture}</div>
                      <div className="text-xs opacity-80">{aiModels[activeModel].parameters} Parameters</div>
                    </div>
                    
                    {/* Processing Indicator */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm animate-pulse"
                         style={{ backgroundColor: aiModels[activeModel].color }}>
                      🧠
                    </div>
                  </div>
                  
                  {/* Floating Network Nodes */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 right-8 w-3 h-3 rounded-full animate-ping opacity-60" style={{ backgroundColor: aiModels[activeModel].color }}></div>
                    <div className="absolute bottom-12 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000 opacity-40"></div>
                    <div className="absolute top-1/3 left-8 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-2000 opacity-50"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Model Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full animate-pulse" 
                    style={{ backgroundColor: aiModels[activeModel].color }}
                  ></div>
                  <span className="text-cyan-400 font-medium">{aiModels[activeModel].type}</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-white/10">
                    {aiModels[activeModel].parameters}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {aiModels[activeModel].name}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {aiModels[activeModel].description}
                </p>
                
                {/* Applications */}
                <div className="space-y-3">
                  <h4 className="text-cyan-400 font-semibold text-lg">Key Applications</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {aiModels[activeModel].applications.map((app, index) => (
                      <motion.div
                        key={app}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-sm p-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10"
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: aiModels[activeModel].color }}></div>
                        <span className="text-gray-300">{app}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Infrastructure Components */}
                <div className="space-y-3">
                  <h4 className="text-cyan-400 font-semibold text-lg">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {aiModels[activeModel].infrastructure.map((infra, index) => (
                      <span
                        key={infra}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white"
                      >
                        {infra}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Model Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {aiModels.map((model, index) => (
            <motion.button
              key={model.id}
              onClick={() => setActiveModel(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeModel === index
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-800/50 border border-cyan-500/20 text-gray-300 hover:border-cyan-500/40'
              }`}
            >
              <span>🧩</span>
              <span>{model.name.split(' ')[0]}</span>
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
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
          >
            <span className="flex items-center space-x-2">
              <span>Learn to Build AI Models</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AIModels;