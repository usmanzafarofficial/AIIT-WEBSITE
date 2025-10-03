import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, title, description, features, price, popular, delay 
}) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className={`relative group ${popular ? 'lg:scale-105' : ''}`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}

      <div className={`relative p-8 h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
        popular 
          ? 'border-blue-400/60 shadow-lg shadow-blue-400/25' 
          : 'border-blue-400/20 hover:border-blue-400/40'
      }`}>
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
          popular ? 'opacity-50' : ''
        }`}></div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Title & Price */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {price}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-center mb-8 flex-grow">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: delay + 0.1 + index * 0.05 }}
                className="flex items-center space-x-3"
              >
                <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
              popular
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
            }`}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      icon: '🤖',
      title: 'AI Consulting',
      description: 'Strategic AI consultation to help your business identify opportunities and implement AI solutions.',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'Risk Analysis',
        '24/7 Support'
      ],
      price: 'Custom',
    },
    {
      icon: '🧠',
      title: 'Machine Learning',
      description: 'End-to-end ML solutions from data preprocessing to model deployment and monitoring.',
      features: [
        'Custom ML Models',
        'Data Pipeline Setup',
        'Model Training & Tuning',
        'Performance Monitoring',
        'Cloud Integration'
      ],
      price: '$2,999/mo',
      popular: true,
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for object detection, recognition, and automation.',
      features: [
        'Object Detection',
        'Image Classification',
        'Video Analytics',
        'Real-time Processing',
        'Custom Annotations'
      ],
      price: '$1,999/mo',
    },
    {
      icon: '💬',
      title: 'NLP Solutions',
      description: 'Natural language processing services for text analysis, chatbots, and language understanding.',
      features: [
        'Text Analysis',
        'Sentiment Analysis',
        'Chatbot Development',
        'Language Translation',
        'Document Processing'
      ],
      price: '$1,499/mo',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and visualization services to unlock insights from your data.',
      features: [
        'Data Visualization',
        'Predictive Analytics',
        'Statistical Analysis',
        'Dashboard Creation',
        'Report Generation'
      ],
      price: '$999/mo',
    },
    {
      icon: '🔧',
      title: 'AI Integration',
      description: 'Seamless integration of AI capabilities into your existing systems and workflows.',
      features: [
        'API Development',
        'System Integration',
        'Workflow Automation',
        'Legacy System Support',
        'Training & Documentation'
      ],
      price: '$3,999/mo',
    },
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'AI-powered diagnostics and patient care' },
    { name: 'Finance', icon: '💰', description: 'Risk assessment and fraud detection' },
    { name: 'Manufacturing', icon: '🏭', description: 'Quality control and predictive maintenance' },
    { name: 'Retail', icon: '🛒', description: 'Personalization and inventory optimization' },
    { name: 'Education', icon: '🎓', description: 'Personalized learning and assessment' },
    { name: 'Transportation', icon: '🚗', description: 'Autonomous systems and route optimization' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-dark via-ai-gray to-ai-dark"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-ai-blue/10 to-ai-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              AI
              <br />
              <span className="bg-gradient-to-r from-ai-blue via-ai-cyan to-ai-purple bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive AI solutions tailored to your business needs. 
              From consultation to implementation, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-gray to-ai-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-ai-blue/20 to-ai-cyan/20 border border-ai-cyan/30 rounded-full text-ai-cyan text-sm font-medium mb-6 backdrop-blur-sm">
              💼 Our Services
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">
                AI Solution
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Select from our comprehensive range of AI services designed to transform 
              your business operations and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
                popular={service.popular}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-dark to-ai-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-ai-blue/20 to-ai-cyan/20 border border-ai-cyan/30 rounded-full text-ai-cyan text-sm font-medium mb-6 backdrop-blur-sm">
              🏢 Industries We Serve
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions Across
              <br />
              <span className="bg-gradient-to-r from-ai-purple to-ai-cyan bg-clip-text text-transparent">
                Industries
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-ai-gray/50 to-ai-dark/50 rounded-2xl border border-ai-cyan/20 backdrop-blur-sm hover:border-ai-cyan/40 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-gray to-ai-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business
              <span className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">
                {' '}with AI?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get started with a free consultation to discuss your AI needs and discover 
              how AIIT can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-cyan text-white font-semibold rounded-full text-lg shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-ai-cyan text-ai-cyan font-semibold rounded-full text-lg hover:bg-ai-cyan hover:text-ai-dark transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;