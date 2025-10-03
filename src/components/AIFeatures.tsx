import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  delay: number;
  techStack: string[];
  metrics: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient, delay, techStack, metrics }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.02, y: -15, rotateX: 5 }}
      className={`relative p-8 rounded-3xl bg-gradient-to-br ${gradient} border border-white/20 backdrop-blur-xl group cursor-pointer overflow-hidden shadow-2xl hover:shadow-purple-500/25`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      {/* Enhanced Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
      
      {/* Metrics Badge */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {metrics}
      </div>
      
      <div className="relative z-10">
        {/* Enhanced Icon with 3D Effect */}
        <div className="relative mb-6">
          <div className="text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-2xl">
            {icon}
          </div>
          <div className="absolute inset-0 text-7xl transform scale-110 blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            {icon}
          </div>
        </div>
        
        {/* Enhanced Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 mb-6">
          {description}
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          {techStack.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Enhanced Interactive Arrow */}
        <div className="flex items-center text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-3 transition-all duration-500 font-semibold">
          <span className="text-sm mr-2">Explore Technology</span>
          <span className="transform group-hover:rotate-45 transition-transform duration-300">→</span>
        </div>
      </div>

      {/* Advanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-10 left-8 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-40"></div>
        <div className="absolute top-1/3 left-6 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping delay-2000 opacity-50"></div>
        <div className="absolute bottom-1/3 right-10 w-1 h-1 bg-white/60 rounded-full animate-ping delay-3000"></div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400/80 to-transparent animate-pulse delay-500"></div>
      </div>
    </motion.div>
  );
};

const AIFeatures: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const features = [
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'Advanced ML algorithms with ensemble methods, feature engineering, and hyperparameter optimization for superior model performance.',
      gradient: 'from-purple-900/30 to-blue-900/30',
      techStack: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      metrics: '99.7% Accuracy'
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Real-time object detection, facial recognition, and scene analysis using state-of-the-art CNN architectures.',
      gradient: 'from-blue-900/30 to-cyan-900/30',
      techStack: ['OpenCV', 'YOLO', 'ResNet'],
      metrics: '< 50ms Processing'
    },
    {
      icon: '💬',
      title: 'Natural Language Processing',
      description: 'Transformer-based models for sentiment analysis, text generation, and multilingual understanding.',
      gradient: 'from-cyan-900/30 to-teal-900/30',
      techStack: ['GPT-4', 'BERT', 'Transformers'],
      metrics: '45+ Languages'
    },
    {
      icon: '🧠',
      title: 'Deep Learning',
      description: 'Multi-layer neural networks with attention mechanisms and advanced architectures for complex problem solving.',
      gradient: 'from-indigo-900/30 to-purple-900/30',
      techStack: ['Neural Networks', 'GANs', 'RNNs'],
      metrics: '10M+ Parameters'
    },
    {
      icon: '✨',
      title: 'Generative AI',
      description: 'Creative AI that generates text, images, code, and multimedia content with human-level quality and creativity.',
      gradient: 'from-pink-900/30 to-purple-900/30',
      techStack: ['Diffusion Models', 'VAE', 'GPT'],
      metrics: '4K Resolution'
    },
    {
      icon: '🎯',
      title: 'Reinforcement Learning',
      description: 'AI agents that learn optimal strategies through trial and error, mastering complex decision-making tasks.',
      gradient: 'from-emerald-900/30 to-blue-900/30',
      techStack: ['Q-Learning', 'PPO', 'DQN'],
      metrics: '95% Success Rate'
    },
    {
      icon: '�',
      title: 'Predictive Analytics',
      description: 'Time series forecasting, anomaly detection, and statistical modeling for data-driven business insights.',
      gradient: 'from-orange-900/30 to-red-900/30',
      techStack: ['Prophet', 'ARIMA', 'XGBoost'],
      metrics: '92% Forecast Accuracy'
    },
    {
      icon: '⚡',
      title: 'Edge AI',
      description: 'Optimized AI models for real-time inference on mobile devices and IoT systems with minimal latency.',
      gradient: 'from-violet-900/30 to-indigo-900/30',
      techStack: ['TensorFlow Lite', 'ONNX', 'Core ML'],
      metrics: '< 10ms Latency'
    },
    {
      icon: '🛡️',
      title: 'AI Security & Ethics',
      description: 'Robust AI safety measures, bias detection, explainable AI, and privacy-preserving machine learning.',
      gradient: 'from-red-900/30 to-pink-900/30',
      techStack: ['Differential Privacy', 'LIME', 'SHAP'],
      metrics: '100% Compliant'
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-purple-950/20 to-black relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-purple-500/15 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-radial from-purple-600/15 via-blue-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-transparent via-cyan-500/5 via-purple-500/8 via-pink-500/5 to-transparent rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-40 right-20 w-32 h-32 border border-cyan-500/20 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 60 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24 relative"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={titleInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600/30 via-cyan-500/30 to-blue-600/30 border border-cyan-400/40 rounded-full text-cyan-300 text-sm font-bold mb-8 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 group cursor-pointer"
          >
            <span className="flex items-center space-x-2">
              <span className="animate-pulse">🚀</span>
              <span className="group-hover:text-white transition-colors">Next-Gen AI Capabilities</span>
              <span className="animate-bounce">✨</span>
            </span>
          </motion.div>
          
          {/* Enhanced Title with 3D Effect */}
          <motion.h2 
            initial={{ opacity: 0, rotateX: 15 }}
            animate={titleInView ? { opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="block mb-2">Advanced</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              AI Technologies
            </span>
            {/* 3D Shadow Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 bg-clip-text text-transparent blur-sm -z-10 transform translate-x-2 translate-y-2">
              AI Technologies
            </span>
          </motion.h2>
          
          {/* Enhanced Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Harness the power of <span className="text-cyan-400 font-semibold">cutting-edge artificial intelligence</span> with our 
            comprehensive suite of advanced technologies. From neural networks to quantum computing integration.
          </motion.p>
          
          {/* Tech Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300">Real-time Processing</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300">Enterprise Scale</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
              techStack={feature.techStack}
              metrics={feature.metrics}
            />
          ))}
        </div>

        {/* Advanced Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-32 relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/15 to-pink-500/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative z-10 p-12 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02]">
            {/* CTA Title */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of businesses already leveraging our AI solutions to drive innovation and growth.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 212, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group overflow-hidden"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center space-x-3">
                  <span>Start Your AI Journey</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, borderColor: "rgba(0, 212, 255, 0.8)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-2">
                  <span>View Documentation</span>
                  <span className="text-cyan-400 group-hover:text-white transition-colors">📄</span>
                </span>
              </motion.button>
            </motion.div>
            
            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Enterprise Ready</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFeatures;