import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor - Fast and responsive */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.8 : isHovered ? 1.3 : 1,
        }}
        transition={{ 
          type: "tween", 
          duration: 0.1, 
          ease: "easeOut" 
        }}
      >
        <div className={`w-2 h-2 rounded-full transition-all duration-100 ${
          isHovered ? 'bg-purple-400 shadow-lg shadow-purple-400/50' : 'bg-white'
        }`} />
      </motion.div>

      {/* Cursor ring - Faster trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 180 : 0
        }}
        transition={{ 
          type: "tween", 
          duration: 0.15, 
          ease: "easeOut" 
        }}
      >
        <div className={`w-6 h-6 border border-opacity-60 rounded-full transition-all duration-150 ${
          isHovered ? 'border-purple-400 border-2' : 'border-white border-opacity-30'
        }`} />
      </motion.div>
    </>
  );
};

export default CustomCursor;