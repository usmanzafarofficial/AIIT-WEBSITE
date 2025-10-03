import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  return (
    <motion.div
      className={className}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Parallax text component
export const ParallaxText: React.FC<{ children: React.ReactNode; speed?: number }> = ({ 
  children, 
  speed = 0.5 
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

// Staggered reveal animation
export const StaggeredReveal: React.FC<{ 
  children: React.ReactNode[]; 
  delay?: number;
  duration?: number;
}> = ({ children, delay = 0.1, duration = 0.6 }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration, 
            delay: index * delay,
            ease: "easeOut"
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
};

// Magnetic hover effect
export const MagneticHover: React.FC<{ 
  children: React.ReactNode; 
  strength?: number;
  className?: string;
}> = ({ children, strength = 0.3, className = '' }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={className}
      animate={{
        x: isHovered ? mousePosition.x : 0,
        y: isHovered ? mousePosition.y : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
};

// Floating animation
export const FloatingElement: React.FC<{ 
  children: React.ReactNode; 
  duration?: number;
  intensity?: number;
  delay?: number;
}> = ({ children, duration = 6, intensity = 20, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -intensity, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation
export const TextReveal: React.FC<{ 
  text: string; 
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  
  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default ScrollAnimationWrapper;