import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Features', href: '/features' },
    { name: 'AI Models', href: '/robots' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  // Function to handle navigation and scroll to top
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-blue-400/20 shadow-lg shadow-blue-500/10'
            : 'bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" onClick={handleNavClick}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  {/* AI Neural Network Logo */}
                  <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="url(#gradient1)" stroke="url(#gradient2)" strokeWidth="2"/>
                    <circle cx="100" cy="100" r="8" fill="#60a5fa"/>
                    <circle cx="70" cy="80" r="6" fill="#3b82f6"/>
                    <circle cx="130" cy="80" r="6" fill="#3b82f6"/>
                    <circle cx="60" cy="120" r="6" fill="#3b82f6"/>
                    <circle cx="140" cy="120" r="6" fill="#3b82f6"/>
                    <circle cx="85" cy="140" r="6" fill="#60a5fa"/>
                    <circle cx="115" cy="140" r="6" fill="#60a5fa"/>
                    <circle cx="100" cy="60" r="6" fill="#60a5fa"/>
                    <path d="M100 92 L70 86 M100 92 L130 86 M100 92 L60 114 M100 92 L140 114 M100 108 L85 134 M100 108 L115 134 M100 92 L100 66" 
                          stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.7"/>
                    <path d="M40 40 L50 30 M40 30 L50 40" stroke="#3b82f6" strokeWidth="2" opacity="0.6"/>
                    <path d="M150 40 L160 30 M150 30 L160 40" stroke="#60a5fa" strokeWidth="2" opacity="0.6"/>
                    <path d="M40 160 L50 170 M40 170 L50 160" stroke="#3b82f6" strokeWidth="2" opacity="0.6"/>
                    <path d="M150 160 L160 170 M150 170 L160 160" stroke="#60a5fa" strokeWidth="2" opacity="0.6"/>
                    <defs>
                      <radialGradient id="gradient1" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" style={{stopColor:"#1e293b", stopOpacity:0.9}} />
                        <stop offset="100%" style={{stopColor:"#0f172a", stopOpacity:1}} />
                      </radialGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:0.8}} />
                        <stop offset="50%" style={{stopColor:"#60a5fa", stopOpacity:0.8}} />
                        <stop offset="100%" style={{stopColor:"#2563eb", stopOpacity:0.8}} />
                      </linearGradient>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:0.8}} />
                        <stop offset="100%" style={{stopColor:"#60a5fa", stopOpacity:0.8}} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-20 animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                    AIIT
                  </h1>
                  <p className="text-xs text-gray-400">AI Institute of Technology</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={item.href}
                    onClick={handleNavClick}
                    className="relative group px-3 py-2 text-gray-100 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-100 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-blue-400/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleNavClick();
                      }}
                      className="block px-3 py-2 text-gray-100 hover:text-white transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-medium mt-4 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;