import React from 'react';
import { motion } from 'framer-motion';

interface AIModel {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  specialty: string;
  gender: 'male' | 'female';
  whatsapp: string;
}

const aiModels: AIModel[] = [
  {
    id: '1',
    name: 'Muhammad Jamshaid Ali',
    title: 'Full-Stack AI Researcher',
    description: 'BS/Master level researcher in Python, Machine Learning, React development, MongoDB, and Node.js',
    image: '/images/jamshaid.jpg',
    specialty: 'Full-Stack Development',
    gender: 'male',
    whatsapp: '+923265641620'
  },
  {
    id: '2',
    name: 'Usman Zafar',
    title: 'AI & Data Structure Expert',
    description: 'Specialist in AI, Machine Learning, Excel, PHP, Python, and advanced data structures',
    image: '/images/usman.jpg',
    specialty: 'AI & Data Structures',
    gender: 'male',
    whatsapp: '+923205665392'
  },
  {
    id: '3',
    name: 'Hassan Ahmad',
    title: 'Trading & AI Model Specialist',
    description: 'Trading master with expertise in data science, AI model structure, and research analysis',
    image: '/images/hassan.jpg',
    specialty: 'Trading & AI Models',
    gender: 'male',
    whatsapp: '+923198081524'
  }
];

const AIModels: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            Meet Our AI Experts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of AI professionals brings cutting-edge expertise across all domains of artificial intelligence
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full rounded-full object-cover border-4 border-gray-700 group-hover:border-blue-400 transition-colors duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.svg';
                      }}
                    />
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-300" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.3), transparent)' }} />
                  </div>
                  
                  {/* Specialty Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
                      {model.specialty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {model.name}
                  </h3>
                  
                  <p className="text-purple-400 font-semibold mb-3">
                    {model.title}
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {model.description}
                  </p>

                  {/* WhatsApp Contact Button */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={`https://wa.me/${model.whatsapp.replace('+', '')}?text=Hi%20${model.name.split(' ')[0]},%20I'm%20interested%20in%20your%20${model.specialty}%20expertise%20and%20would%20like%20to%20discuss%20a%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                    >
                      <span>💬</span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  
                  {/* Gender Indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className={`w-3 h-3 rounded-full ${model.gender === 'female' ? 'bg-pink-400' : 'bg-blue-400'}`} />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-60" />
                
                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            Join Our AI Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIModels;