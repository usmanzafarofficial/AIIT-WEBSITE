import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, suffix = '', delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const targetValue = parseInt(value.replace(/[^\d]/g, ''));
      let current = 0;
      const increment = targetValue / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setDisplayValue(targetValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  const formatValue = (val: number): string => {
    if (value.includes('K')) return `${Math.floor(val / 1000)}K`;
    if (value.includes('M')) return `${Math.floor(val / 1000000)}M`;
    if (value.includes('%')) return `${val}%`;
    return val.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-ai-gray/50 to-ai-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-ai-cyan/20 hover:border-ai-cyan/40 transition-all duration-300">
        {/* Icon */}
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Value */}
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent mb-2">
          {inView ? formatValue(displayValue) : '0'}{suffix}
        </div>
        
        {/* Label */}
        <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
          {label}
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-ai-blue/20 to-ai-cyan/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
};

const TechStats: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: '🤖',
      value: '1000+',
      label: 'AI Models Deployed',
    },
    {
      icon: '⚡',
      value: '99.9',
      label: 'Uptime Guarantee',
      suffix: '%'
    },
    {
      icon: '🧠',
      value: '50M+',
      label: 'Data Points Processed',
    },
    {
      icon: '🚀',
      value: '100+',
      label: 'Research Projects',
    },
    {
      icon: '👥',
      value: '10K+',
      label: 'Global Users',
    },
    {
      icon: '🏆',
      value: '25+',
      label: 'Industry Awards',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-gray to-ai-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-ai-blue/5 to-ai-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-ai-purple/5 to-ai-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-ai-blue/20 to-ai-cyan/20 border border-ai-cyan/30 rounded-full text-ai-cyan text-sm font-medium mb-6 backdrop-blur-sm"
          >
            📊 Performance Metrics
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leading AI
            <br />
            <span className="bg-gradient-to-r from-ai-blue via-ai-cyan to-ai-purple bg-clip-text text-transparent">
              Technology Stats
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our numbers speak for themselves. Discover the impact and reach of AIIT's 
            artificial intelligence solutions across industries and applications.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-ai-blue/10 to-ai-cyan/10 rounded-2xl p-8 border border-ai-cyan/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the power of next-generation artificial intelligence. 
              Start your journey with AIIT today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-cyan text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-ai-cyan/25 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-ai-cyan text-ai-cyan font-semibold rounded-full text-lg hover:bg-ai-cyan hover:text-ai-dark transition-all duration-300 backdrop-blur-sm"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStats;