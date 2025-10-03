import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'info@aiit.tech',
      action: 'mailto:info@aiit.tech',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690z"/>
        </svg>
      ),
      title: 'WhatsApp Chat',
      description: 'Chat with our experts directly',
      contact: 'Available 24/7',
      action: '#whatsapp-experts',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: 'Call Us',
      description: 'Speak with our team',
      contact: '+92 320 566 5392',
      action: 'tel:+923205665392',
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Meet us in person',
      contact: 'Pakistan - Available by appointment',
      action: '#',
    },
  ];

  const whatsappExperts = [
    {
      name: 'Muhammad Jamshaid Ali',
      title: 'Full-Stack AI Researcher',
      specialties: ['Python & ML', 'React Development', 'MongoDB & Node.js'],
      whatsapp: '+923265641620',
      image: '/images/jamshaid.jpg'
    },
    {
      name: 'Usman Zafar',
      title: 'AI & Data Structure Expert',
      specialties: ['AI & Machine Learning', 'Python & PHP', 'Data Structures'],
      whatsapp: '+923205665392',
      image: '/images/usman.jpg'
    },
    {
      name: 'Hassan Ahmad',
      title: 'AI Model Specialist',
      specialties: ['Data Scientist', 'Data Science', 'AI Model Structure'],
      whatsapp: '+923198081524',
      image: '/images/hassan.jpg'
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 AI Street, San Francisco, CA 94102',
      phone: '+1 (555) 123-4567',
      email: 'sf@aiit.tech',
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, New York, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@aiit.tech',
    },
    {
      city: 'London',
      address: '789 Tech Plaza, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@aiit.tech',
    },
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
              Get in
              <br />
              <span className="bg-gradient-to-r from-ai-blue via-ai-cyan to-ai-purple bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to transform your business with AI? Let's discuss your project 
              and explore how AIIT can help you achieve your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-gray to-ai-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block p-6 bg-gradient-to-br from-ai-gray/50 to-ai-dark/50 rounded-2xl border border-ai-cyan/20 backdrop-blur-sm hover:border-ai-cyan/40 transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <p className="text-ai-cyan font-medium">{method.contact}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Experts Section */}
      <section id="whatsapp-experts" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-gray to-ai-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect with Our
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> WhatsApp Experts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get instant support and consultation from our AI specialists via WhatsApp. 
              Choose the expert that best matches your project needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatsappExperts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-ai-gray/50 to-ai-dark/50 rounded-3xl border border-blue-500/20 backdrop-blur-sm p-8 text-center group hover:border-blue-500/40 transition-all duration-300"
              >
                {/* Expert Image */}
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full rounded-full object-cover border-4 border-blue-500/30 group-hover:border-blue-500/60 transition-colors duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg';
                    }}
                  />
                  {/* WhatsApp Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690z"/>
                    </svg>
                  </div>
                </div>

                {/* Expert Info */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {expert.name}
                </h3>
                <p className="text-blue-400 font-semibold mb-4">{expert.title}</p>
                
                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {expert.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <motion.a
                  href={`https://wa.me/${expert.whatsapp.replace('+', '')}?text=Hi%20${expert.name.split(' ')[0]},%20I'm%20interested%20in%20your%20AI%20expertise%20and%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </motion.a>

                {/* Phone Number Display */}
                <p className="text-gray-400 text-sm mt-3">{expert.whatsapp}</p>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-400 text-xl">⚡</span>
                </div>
                <h4 className="text-white font-semibold mb-1">Instant Response</h4>
                <p className="text-gray-400 text-sm">Quick replies within minutes</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-400 text-xl">🔒</span>
                </div>
                <h4 className="text-white font-semibold mb-1">Secure Chat</h4>
                <p className="text-gray-400 text-sm">End-to-end encrypted conversations</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-400 text-xl">👥</span>
                </div>
                <h4 className="text-white font-semibold mb-1">Direct Access</h4>
                <p className="text-gray-400 text-sm">Connect directly with experts</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-400 text-xl">🌍</span>
                </div>
                <h4 className="text-white font-semibold mb-1">Global Support</h4>
                <p className="text-gray-400 text-sm">Available across time zones</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ai-dark to-ai-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-ai-gray/50 to-ai-dark/50 rounded-2xl border border-ai-cyan/20 backdrop-blur-sm p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-ai-gray border border-ai-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-cyan transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-ai-gray border border-ai-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-cyan transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-ai-gray border border-ai-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-cyan transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-ai-gray border border-ai-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-cyan transition-colors"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-ai-gray border border-ai-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-cyan transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-ai-blue to-ai-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-ai-cyan/25 transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
                <p className="text-gray-300 mb-8">
                  Visit us at any of our global locations or reach out to your nearest office.
                </p>
              </div>

              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-ai-gray/50 to-ai-dark/50 rounded-2xl border border-ai-cyan/20 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{office.city}</h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex items-start space-x-2">
                      <span className="text-ai-cyan mt-1">📍</span>
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="text-ai-cyan">📞</span>
                      <span>{office.phone}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="text-ai-cyan">📧</span>
                      <span>{office.email}</span>
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="p-6 bg-gradient-to-r from-ai-blue/10 to-ai-cyan/10 rounded-2xl border border-ai-cyan/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-4">Quick Questions?</h3>
                <p className="text-gray-300 mb-4">
                  Check out our FAQ section or schedule a quick call with our team.
                </p>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-ai-cyan text-ai-dark font-medium rounded-lg hover:bg-ai-cyan/90 transition-colors"
                  >
                    View FAQ
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 border border-ai-cyan text-ai-cyan font-medium rounded-lg hover:bg-ai-cyan hover:text-ai-dark transition-all duration-300"
                  >
                    Schedule Call
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;