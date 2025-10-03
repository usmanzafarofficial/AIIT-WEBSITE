import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

// Professional 3D Floating AI Sphere
const AIFloatingSphere: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      ringRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group position={[2, 0, -2]}>
      {/* Main AI Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhongMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.7} 
          shininess={100}
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Orbiting Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.1, 8, 32]} />
        <meshPhongMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.8}
          emissive="#0891b2"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Inner Core */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial 
          color="#ffffff" 
          emissive="#60a5fa"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

// Floating Particles Component (keeping the small animated elements)
const FloatingParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particlesGeometry = React.useMemo(() => {
    const positions = new Float32Array(50 * 3); // Reduced for better performance
    for (let i = 0; i < 50; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={particlesGeometry}
          itemSize={3}
          args={[particlesGeometry, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#60a5fa" transparent opacity={0.6} />
    </points>
  );
};

// Loading Fallback
const Loader: React.FC = () => (
  <Html center>
    <div className="flex items-center space-x-2">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-400"></div>
      <span className="text-slate-400">Loading...</span>
    </div>
  </Html>
);

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleGetStarted = () => {
    const message = "Hi Usman! I'm interested in getting started with AI courses at AIIT. Could you please help me get enrolled?";
    const whatsappUrl = `https://wa.me/923205665392?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWatchDemo = () => {
    setShowVideoModal(true);
  };

  const handleExploreAI = () => {
    navigate('/courses');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
      {/* Professional Blue Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
            <pointLight position={[-5, 5, 5]} intensity={0.8} color="#3b82f6" />
            <pointLight position={[5, -5, -5]} intensity={0.6} color="#06b6d4" />
            {/* Professional 3D AI Elements */}
            <AIFloatingSphere />
            <FloatingParticles />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="text-white drop-shadow-2xl">
              ARTIFICIAL
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">
              INTELLIGENCE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Welcome to <span className="text-white font-semibold">AIIT</span> - 
            AI Institute of Technology. Where artificial intelligence meets infinite possibilities.
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {['Machine Learning', 'Computer Vision', 'NLP', 'Robotics', 'Deep Learning'].map((feature, index) => (
              <motion.div
                key={feature}
                whileHover={{ scale: 1.02, y: -1 }}
                className="px-3 py-2 sm:px-4 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center px-4 mt-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-blue-700 font-semibold rounded-full text-sm md:text-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Get Started</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </motion.button>

            <motion.button
              onClick={handleWatchDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-full text-sm md:text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>📹</span>
                <span>Watch Demo</span>
              </span>
            </motion.button>
            
            <motion.button
              onClick={handleExploreAI}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full text-sm md:text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Explore AI World</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/20 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { value: '1000+', label: 'AI Models' },
              { value: '50+', label: 'Research Projects' },
              { value: '24/7', label: 'AI Systems' },
              { value: '100%', label: 'Innovation' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.02 }}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Professional Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/80 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/80 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-ai-cyan/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-ai-cyan rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Demo Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-ai-gray/90 to-ai-dark/90 backdrop-blur-md border border-ai-cyan/20 rounded-2xl p-8 max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">How to Enroll in AIIT Courses</h3>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="bg-ai-dark/50 rounded-xl p-6 mb-6 border border-ai-cyan/10">
                <h4 className="text-lg font-semibold text-ai-cyan mb-4">📋 Enrollment Process</h4>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <span className="bg-ai-cyan text-ai-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                    <div>
                      <p className="font-medium text-white">Contact Our Expert</p>
                      <p className="text-sm">Click 'Get Started' to chat with Usman on WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-ai-cyan text-ai-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                    <div>
                      <p className="font-medium text-white">Choose Your Course</p>
                      <p className="text-sm">Browse our courses page and select your preferred program</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-ai-cyan text-ai-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                    <div>
                      <p className="font-medium text-white">Complete Registration</p>
                      <p className="text-sm">Fill out the enrollment form and make payment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-ai-cyan text-ai-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                    <div>
                      <p className="font-medium text-white">Start Learning</p>
                      <p className="text-sm">Access course materials and begin your AI journey</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold"
                >
                  💬 Chat with Usman
                </motion.button>
                <motion.button
                  onClick={() => {
                    setShowVideoModal(false);
                    handleExploreAI();
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 bg-gradient-to-r from-ai-blue to-ai-cyan text-white py-3 rounded-lg font-semibold"
                >
                  🎓 View Courses
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;