import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const teamMembers = [
    {
      name: 'Usman Zafar',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning, Neural Networks',
      image: '👨‍🔬',
    },
    {
      name: 'Muhammad Jamshaid Ali',
      role: 'Head of Research',
      expertise: 'Computer Vision, Robotics',
      image: '👨‍🔬',
    },
    {
      name: 'Allena Usman',
      role: 'NLP Director',
      expertise: 'Natural Language Processing',
      image: '👩‍💻',
    },
    {
      name: 'Hassan Ahmad',
      role: 'Data Science Lead',
      expertise: 'Big Data, Analytics',
      image: '👨‍💼',
    },
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with AI technology.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working together to create solutions that benefit humanity.'
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Maintaining the highest standards in research and development.'
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Creating AI solutions that make a positive difference in the world.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              About
              <br />
              <span className="text-white/90">
                AIIT
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI Institute of Technology - Pioneering the future of artificial intelligence 
              through cutting-edge research, innovative solutions, and transformative technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Mission Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block px-6 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
                  🎯 Our Mission
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transforming the World
                  <br />
                  <span className="text-white/90">
                    Through AI
                  </span>
                </h2>
                
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  At AIIT, we believe artificial intelligence has the power to solve humanity's 
                  greatest challenges. Our mission is to develop ethical, accessible, and 
                  transformative AI technologies that enhance human capabilities and improve 
                  quality of life across the globe.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs text-blue-600">✓</span>
                    </div>
                    <p className="text-white/90">Advancing AI research for societal benefit</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs text-blue-600">✓</span>
                    </div>
                    <p className="text-white/90">Developing ethical AI frameworks and standards</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs text-blue-600">✓</span>
                    </div>
                    <p className="text-white/90">Making AI accessible to organizations worldwide</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
              👥 Our Team
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              World-Class
              <br />
              <span className="text-white/90">
                AI Experts
              </span>
            </h2>
            
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our team consists of leading researchers, engineers, and visionaries 
              who are passionate about advancing the field of artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="relative p-8 bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300 text-center">
                  
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-white/90 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-white/80">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the
              <span className="text-white/90">
                {' '}AI Revolution?
              </span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Connect with our team to explore how AIIT can transform your business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full text-lg shadow-lg hover:bg-white/90 transition-all duration-300"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
              >
                View Careers
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;