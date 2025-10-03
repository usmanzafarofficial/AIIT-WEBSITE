import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIFeature {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  whatIs: string;
  uses: string[];
  howItWorks: string;
  models: string[];
  examples: string[];
  industries: string[];
  benefits: string[];
  gradient: string;
  color: string;
  images: {
    hero: string;
    examples: { url: string; caption: string }[];
  };
}

const aiFeatures: AIFeature[] = [
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    icon: '👁️',
    shortDescription: 'AI that enables machines to interpret and understand visual information from the world',
    whatIs: 'Computer Vision is a field of artificial intelligence that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs. It uses machine learning algorithms and neural networks to identify, analyze, and understand visual content just like human vision.',
    uses: [
      'Image Recognition & Classification',
      'Object Detection & Tracking',
      'Facial Recognition Systems',
      'Medical Image Analysis',
      'Autonomous Vehicle Navigation',
      'Quality Control in Manufacturing',
      'Security & Surveillance Systems',
      'Augmented Reality Applications'
    ],
    howItWorks: 'Computer Vision works by processing digital images through multiple layers of neural networks. First, it extracts low-level features like edges and textures, then combines them into higher-level features to recognize patterns, objects, and scenes. Deep learning models like CNNs (Convolutional Neural Networks) are trained on massive datasets to learn these visual patterns.',
    models: [
      'YOLO (You Only Look Once) - Real-time object detection',
      'ResNet - Deep residual networks for image classification',
      'U-Net - Semantic segmentation in medical imaging',
      'OpenCV - Comprehensive computer vision library',
      'TensorFlow Vision - Google\'s vision AI platform',
      'PyTorch Vision - Facebook\'s computer vision toolkit'
    ],
    examples: [
      'Tesla Autopilot - Self-driving car navigation',
      'Instagram Filters - Real-time face detection and AR',
      'Google Photos - Automatic image categorization',
      'Amazon Go - Cashier-less shopping experience',
      'Medical CT/MRI Scanners - Disease detection',
      'Factory Robots - Quality inspection automation'
    ],
    industries: ['Automotive', 'Healthcare', 'Retail', 'Manufacturing', 'Security', 'Entertainment'],
    benefits: [
      'Automates visual inspection tasks',
      'Improves accuracy over human vision',
      'Enables 24/7 monitoring capabilities',
      'Reduces operational costs',
      'Enhances safety and security',
      'Creates new user experiences'
    ],
    gradient: 'from-blue-600 via-purple-600 to-cyan-500',
    color: 'blue',
    images: {
      hero: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      examples: [
        {
          url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Tesla Autopilot - Self-driving car using computer vision for navigation'
        },
        {
          url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Medical imaging - AI detecting diseases in X-rays and CT scans'
        },
        {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Facial recognition - Security systems and mobile authentication'
        },
        {
          url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Industrial automation - Quality control in manufacturing'
        }
      ]
    }
  },
  {
    id: 'natural-language-processing',
    title: 'Natural Language Processing',
    icon: '🗣️',
    shortDescription: 'AI that helps machines understand, interpret, and generate human language',
    whatIs: 'Natural Language Processing (NLP) is a branch of AI that gives machines the ability to read, understand, and derive meaning from human languages. It combines computational linguistics with machine learning and deep learning to enable computers to process and analyze large amounts of natural language data.',
    uses: [
      'Chatbots & Virtual Assistants',
      'Language Translation Services',
      'Sentiment Analysis',
      'Text Summarization',
      'Speech Recognition',
      'Content Generation',
      'Email Filtering & Classification',
      'Voice Commands & Control'
    ],
    howItWorks: 'NLP combines computational linguistics (rule-based modeling) with statistical and machine learning methods. It processes text through tokenization, parsing, semantic analysis, and contextual understanding. Modern NLP uses transformer models like BERT and GPT that can understand context and generate human-like responses.',
    models: [
      'GPT-4 - Advanced language generation model',
      'BERT - Bidirectional encoder representations',
      'Transformer - Attention-based neural networks',
      'spaCy - Industrial-strength NLP library',
      'NLTK - Natural language toolkit for Python',
      'Hugging Face - Open-source NLP platform'
    ],
    examples: [
      'ChatGPT - AI-powered conversational assistant',
      'Google Translate - Real-time language translation',
      'Siri/Alexa - Voice-activated virtual assistants',
      'Grammarly - AI-powered writing assistant',
      'Spotify Recommendations - Music discovery through lyrics',
      'Email Spam Detection - Automatic filtering systems'
    ],
    industries: ['Customer Service', 'Education', 'Healthcare', 'Finance', 'Marketing', 'Legal'],
    benefits: [
      'Enables human-computer communication',
      'Automates content creation and analysis',
      'Breaks down language barriers',
      'Improves customer service efficiency',
      'Enhances data extraction from text',
      'Personalizes user experiences'
    ],
    gradient: 'from-green-600 via-emerald-600 to-teal-500',
    color: 'green',
    images: {
      hero: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      examples: [
        {
          url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'ChatGPT & AI Assistants - Natural conversation with artificial intelligence'
        },
        {
          url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Voice assistants - Siri, Alexa, Google Assistant understanding speech'
        },
        {
          url: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Language translation - Google Translate breaking language barriers'
        },
        {
          url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Content analysis - Sentiment analysis and text understanding'
        }
      ]
    }
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    icon: '🧠',
    shortDescription: 'AI systems that learn and improve from data without being explicitly programmed',
    whatIs: 'Machine Learning is a subset of artificial intelligence that enables systems to automatically learn and improve performance from experience without being explicitly programmed. It uses statistical techniques to give computers the ability to "learn" patterns from data and make predictions or decisions.',
    uses: [
      'Predictive Analytics & Forecasting',
      'Recommendation Systems',
      'Fraud Detection & Prevention',
      'Medical Diagnosis & Treatment',
      'Financial Trading Algorithms',
      'Supply Chain Optimization',
      'Customer Behavior Analysis',
      'Automated Decision Making'
    ],
    howItWorks: 'Machine Learning algorithms build mathematical models based on training data to make predictions or decisions. The process involves data collection, feature extraction, model training, validation, and deployment. Algorithms learn patterns through supervised learning (with labeled data), unsupervised learning (finding hidden patterns), or reinforcement learning (learning through rewards).',
    models: [
      'Random Forest - Ensemble learning method',
      'Support Vector Machines - Classification and regression',
      'Neural Networks - Deep learning architectures',
      'XGBoost - Gradient boosting framework',
      'Scikit-learn - Machine learning library for Python',
      'TensorFlow/PyTorch - Deep learning frameworks'
    ],
    examples: [
      'Netflix Recommendations - Personalized content suggestions',
      'Credit Card Fraud Detection - Real-time transaction analysis',
      'Amazon Price Optimization - Dynamic pricing strategies',
      'Medical Imaging Analysis - Cancer detection in radiology',
      'Stock Market Prediction - Algorithmic trading systems',
      'Weather Forecasting - Climate pattern analysis'
    ],
    industries: ['Finance', 'Healthcare', 'E-commerce', 'Transportation', 'Manufacturing', 'Agriculture'],
    benefits: [
      'Improves decision-making accuracy',
      'Automates complex analytical tasks',
      'Discovers hidden patterns in data',
      'Reduces operational costs',
      'Enables personalization at scale',
      'Continuously improves performance'
    ],
    gradient: 'from-purple-600 via-pink-600 to-red-500',
    color: 'purple',
    images: {
      hero: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      examples: [
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Netflix Recommendations - Personalized content using machine learning'
        },
        {
          url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Fraud detection - Credit card security through predictive algorithms'
        },
        {
          url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Stock market analysis - AI-powered trading and investment strategies'
        },
        {
          url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Healthcare diagnostics - Disease prediction and medical analysis'
        }
      ]
    }
  },
  {
    id: 'ai-models',
    title: 'AI Models & Infrastructure',
    icon: '�',
    shortDescription: 'Advanced AI models and infrastructure powering next-generation applications',
    whatIs: 'AI Models & Infrastructure encompasses the sophisticated neural networks, deep learning architectures, and computational systems that power modern artificial intelligence applications. These include generative models, detection systems, conversational AI, and specialized models for gaming, animation, and content creation.',
    uses: [
      'Deepfake Detection & Media Verification',
      'Game AI & Procedural Generation',
      'Animation & Visual Effects Creation',
      'Conversational AI & Chatbots',
      'Content Generation & Synthesis',
      'Model Training & Deployment',
      'Edge Computing & Optimization',
      'Real-time AI Applications'
    ],
    howItWorks: 'AI Models work through complex neural network architectures that process data through multiple layers of computational nodes. Infrastructure components include training pipelines, model serving systems, GPU clusters, and edge deployment platforms. Modern AI systems use transformer architectures, diffusion models, and reinforcement learning to achieve human-like performance.',
    models: [
      'GPT-4 Architecture - Large language model infrastructure',
      'DALL-E 2/Midjourney - Image generation models',
      'Deepfake Detection Networks - FakeLocator, DeeperForensics',
      'Unity ML-Agents - Game AI development platform',
      'Stable Diffusion - Open-source image generation',
      'LangChain - AI application development framework',
      'OpenAI API Infrastructure - Cloud-based AI services',
      'TensorFlow Serving - Model deployment system'
    ],
    examples: [
      'ChatGPT Infrastructure - Serving millions of conversations daily',
      'Deepfake Detection - Protecting media integrity and authenticity',
      'Game NPCs - AI-powered characters in video games',
      'AI Animation - Automated character movement and facial expressions',
      'Content Moderation - Real-time detection of harmful content',
      'Personalized Recommendations - AI-driven content curation'
    ],
    industries: ['Entertainment', 'Gaming', 'Media', 'Social Networks', 'Education', 'Security'],
    benefits: [
      'Scales AI applications globally',
      'Enables real-time AI processing',
      'Reduces development complexity',
      'Improves model accuracy and speed',
      'Facilitates rapid prototyping',
      'Supports edge and cloud deployment'
    ],
    gradient: 'from-orange-600 via-red-600 to-pink-500',
    color: 'orange',
    images: {
      hero: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      examples: [
        {
          url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'ChatGPT Infrastructure - Massive server farms powering conversational AI'
        },
        {
          url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Deepfake Detection - AI systems identifying manipulated media content'
        },
        {
          url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'Game AI Models - Intelligent NPCs and procedural generation systems'
        },
        {
          url: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          caption: 'AI Animation Systems - Automated character animation and motion capture'
        }
      ]
    }
  }
];

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<AIFeature | null>(null);

  const handleFeatureClick = (feature: AIFeature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
          >
            AI Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Explore the cutting-edge AI technologies that are transforming industries and reshaping our future. Click on any feature to discover comprehensive details.
          </motion.p>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => handleFeatureClick(feature)}
                className={`relative p-6 bg-gradient-to-br ${feature.gradient} rounded-2xl border border-white/20 backdrop-blur-sm cursor-pointer group overflow-hidden`}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Preview Image */}
                  <div className="mb-4 rounded-xl overflow-hidden h-32 bg-black/30">
                    <img 
                      src={feature.images.hero} 
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    {feature.shortDescription}
                  </p>
                  
                  {/* Click to Learn More */}
                  <div className="flex items-center text-white/80 text-sm group-hover:text-white transition-colors">
                    <span>Click to learn more</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm pt-20 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`bg-gradient-to-br ${selectedFeature.gradient} rounded-3xl p-8 max-w-4xl w-full mx-4 my-8 shadow-2xl border border-white/20`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-6xl">{selectedFeature.icon}</span>
                  <h2 className="text-4xl font-bold text-white">{selectedFeature.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white text-3xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Hero Image */}
              <div className="mb-8">
                <div className="relative rounded-2xl overflow-hidden h-64 bg-black/20 backdrop-blur-sm">
                  <img 
                    src={selectedFeature.images.hero} 
                    alt={`${selectedFeature.title} Technology`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{selectedFeature.title} in Action</h3>
                    <p className="text-gray-300 text-sm">Real-world applications and examples</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* What Is Section */}
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">What is {selectedFeature.title}?</h3>
                    <p className="text-gray-200 leading-relaxed">{selectedFeature.whatIs}</p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
                    <p className="text-gray-200 leading-relaxed">{selectedFeature.howItWorks}</p>
                  </div>

                  {/* Benefits */}
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {selectedFeature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-200">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Use Cases */}
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">Primary Uses</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedFeature.uses.map((use, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-200">
                          <span className="text-blue-400">•</span>
                          <span className="text-sm">{use}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Models & Tools */}
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">Popular Models & Tools</h3>
                    <div className="space-y-2">
                      {selectedFeature.models.map((model, index) => (
                        <div key={index} className="text-gray-200 text-sm">
                          <span className="font-medium text-cyan-300">{model.split(' - ')[0]}</span>
                          {model.includes(' - ') && (
                            <span className="text-gray-300"> - {model.split(' - ')[1]}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real-World Examples with Images */}
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">Real-World Examples</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedFeature.images.examples.map((example, index) => (
                        <div key={index} className="bg-black/30 rounded-xl overflow-hidden">
                          <img 
                            src={example.url} 
                            alt={example.caption}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-3">
                            <p className="text-gray-200 text-sm leading-relaxed">{example.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* AI Model Specifications for AI Models section */}
                    {selectedFeature.id === 'ai-models' && (
                      <div className="mt-6 space-y-4">
                        <h4 className="text-lg font-semibold text-cyan-300 mb-3">AI Model Architectures</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-500/30">
                            <h5 className="font-semibold text-blue-300 mb-2">🗣️ Chat Models (GPT Architecture)</h5>
                            <p className="text-gray-300 text-xs">175B+ parameters, transformer-based, multi-modal capabilities</p>
                          </div>
                          <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-4 rounded-lg border border-red-500/30">
                            <h5 className="font-semibold text-red-300 mb-2">🕵️ Deepfake Detection</h5>
                            <p className="text-gray-300 text-xs">CNN + RNN hybrid, real-time processing, 99%+ accuracy</p>
                          </div>
                          <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 p-4 rounded-lg border border-green-500/30">
                            <h5 className="font-semibold text-green-300 mb-2">🎮 Game AI Models</h5>
                            <p className="text-gray-300 text-xs">Reinforcement learning, behavior trees, procedural generation</p>
                          </div>
                          <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 p-4 rounded-lg border border-orange-500/30">
                            <h5 className="font-semibold text-orange-300 mb-2">🎬 Animation Models</h5>
                            <p className="text-gray-300 text-xs">Motion capture AI, facial rig automation, style transfer</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Industries */}
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">Key Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedFeature.industries.map((industry, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    
                    {/* Infrastructure Components for AI Models */}
                    {selectedFeature.id === 'ai-models' && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-purple-300 mb-3">Infrastructure Components</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-3 rounded-lg border border-purple-500/30">
                            <div className="text-2xl mb-2">🖥️</div>
                            <h5 className="font-semibold text-purple-300 text-sm">GPU Clusters</h5>
                            <p className="text-gray-400 text-xs">NVIDIA A100, H100 for training</p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-3 rounded-lg border border-blue-500/30">
                            <div className="text-2xl mb-2">☁️</div>
                            <h5 className="font-semibold text-blue-300 text-sm">Cloud Services</h5>
                            <p className="text-gray-400 text-xs">AWS, Azure, GCP deployment</p>
                          </div>
                          <div className="bg-gradient-to-br from-green-900/40 to-teal-900/40 p-3 rounded-lg border border-green-500/30">
                            <div className="text-2xl mb-2">⚡</div>
                            <h5 className="font-semibold text-green-300 text-sm">Edge Computing</h5>
                            <p className="text-gray-400 text-xs">Real-time inference systems</p>
                          </div>
                          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/40 p-3 rounded-lg border border-red-500/30">
                            <div className="text-2xl mb-2">🔄</div>
                            <h5 className="font-semibold text-red-300 text-sm">MLOps Pipeline</h5>
                            <p className="text-gray-400 text-xs">Training, validation, deployment</p>
                          </div>
                          <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 p-3 rounded-lg border border-orange-500/30">
                            <div className="text-2xl mb-2">📊</div>
                            <h5 className="font-semibold text-orange-300 text-sm">Data Processing</h5>
                            <p className="text-gray-400 text-xs">ETL pipelines, data lakes</p>
                          </div>
                          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-3 rounded-lg border border-indigo-500/30">
                            <div className="text-2xl mb-2">🛡️</div>
                            <h5 className="font-semibold text-indigo-300 text-sm">Security Layer</h5>
                            <p className="text-gray-400 text-xs">Model protection, API security</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-white font-semibold backdrop-blur-sm transition-all duration-300"
                  onClick={closeModal}
                >
                  Explore Our {selectedFeature.title} Courses →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Features;