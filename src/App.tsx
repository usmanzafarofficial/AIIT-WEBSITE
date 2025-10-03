import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import PerformanceMonitor from './components/PerformanceMonitor';
import Home from './pages/Home';
import Features from './pages/Features';
import Robots from './pages/Robots';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-theme text-white font-space relative cursor-none">
        {/* Performance Monitor */}
        <PerformanceMonitor />
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Animated Background */}
        <AnimatedBackground />
        
        <Navigation />
        
        <main className="relative z-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                  </motion.div>
                } 
              />
              <Route 
                path="/features" 
                element={
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Features />
                  </motion.div>
                } 
              />
              <Route 
                path="/robots" 
                element={
                  <motion.div
                    key="robots"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Robots />
                  </motion.div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <About />
                  </motion.div>
                } 
              />
              <Route 
                path="/services" 
                element={
                  <motion.div
                    key="services"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Services />
                  </motion.div>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Contact />
                  </motion.div>
                } 
              />
              <Route 
                path="/courses" 
                element={
                  <motion.div
                    key="courses"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Courses />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
