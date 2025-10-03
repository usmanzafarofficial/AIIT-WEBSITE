import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ComputerDesktopIcon, 
  ChartBarIcon,
  CpuChipIcon,
  PresentationChartLineIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  instructor: string;
  rating: number;
  students: number;
  category: string;
}

const courses: Course[] = [
  // AI & Machine Learning
  {
    id: '1',
    title: 'Machine Learning Fundamentals',
    description: 'Learn the core concepts of machine learning, algorithms, and practical applications. Daily 40-minute classes for comprehensive understanding.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Beginner',
    price: 'PKR 10,000',
    instructor: 'Muhammad Jamshaid Ali',
    rating: 4.8,
    students: 24,
    category: 'AI & ML'
  },
  {
    id: '2',
    title: 'Deep Learning with Neural Networks',
    description: 'Master deep learning techniques, neural networks, and advanced AI architectures. Daily 40-minute interactive sessions.',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Advanced',
    price: 'PKR 15,000',
    instructor: 'Usman Zafar',
    rating: 4.9,
    students: 18,
    category: 'AI & ML'
  },
  {
    id: '3',
    title: 'Artificial Intelligence Ethics',
    description: 'Explore the ethical implications of AI and responsible AI development practices. Daily 40-minute discussion sessions.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Intermediate',
    price: 'PKR 10,000',
    instructor: 'Hassan Ahmad',
    rating: 4.8,
    students: 90,
    category: 'AI & ML'
  },

  // Programming
  {
    id: '4',
    title: 'Python Programming Masterclass',
    description: 'Complete Python course from basics to advanced programming concepts. Daily 40-minute hands-on coding sessions.',
    image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Beginner',
    price: 'PKR 11,000',
    instructor: 'Muhammad Jamshaid Ali',
    rating: 4.6,
    students: 32,
    category: 'Programming'
  },
  {
    id: '5',
    title: 'Advanced Python for Data Science',
    description: 'Advanced Python techniques specifically for data analysis and scientific computing. Daily 40-minute practical sessions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Advanced',
    price: 'PKR 14,000',
    instructor: 'Usman Zafar',
    rating: 4.8,
    students: 15,
    category: 'Programming'
  },

  // Data Science
  {
    id: '6',
    title: 'Data Science Bootcamp',
    description: 'Comprehensive data science program covering statistics, analysis, and visualization. Daily 40-minute practical sessions with real datasets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Intermediate',
    price: 'PKR 13,000',
    instructor: 'Hassan Ahmad',
    rating: 4.9,
    students: 21,
    category: 'Data Science'
  },
  {
    id: '7',
    title: 'Big Data Analytics',
    description: 'Learn to process and analyze large datasets using modern tools and techniques. Daily 40-minute interactive workshops.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Advanced',
    price: 'PKR 15,000',
    instructor: 'Usman Zafar',
    rating: 4.7,
    students: 89,
    category: 'Data Science'
  },

  // Mathematics & Statistics
  {
    id: '8',
    title: 'Statistics for Data Science',
    description: 'Essential statistical concepts for data analysis and machine learning. Daily 40-minute problem-solving sessions.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Beginner',
    price: 'PKR 10,500',
    instructor: 'Muhammad Jamshaid Ali',
    rating: 4.7,
    students: 18,
    category: 'Mathematics'
  },
  {
    id: '9',
    title: 'Calculus for Machine Learning',
    description: 'Mathematical foundations of calculus essential for understanding ML algorithms. Daily 40-minute concept sessions.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Intermediate',
    price: 'PKR 11,500',
    instructor: 'Muhammad Jamshaid Ali',
    rating: 4.5,
    students: 134,
    category: 'Mathematics'
  },

  // Microsoft Office
  {
    id: '10',
    title: 'Microsoft Excel Advanced',
    description: 'Master Excel formulas, pivot tables, macros, and advanced data analysis. Daily 40-minute hands-on practice sessions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Intermediate',
    price: 'PKR 10,000',
    instructor: 'Muhammad Jamshaid Ali',
    rating: 4.6,
    students: 289,
    category: 'Microsoft Office'
  },
  {
    id: '11',
    title: 'PowerPoint Presentation Mastery',
    description: 'Create compelling presentations with advanced design and animation techniques. Daily 40-minute design workshops.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Beginner',
    price: 'PKR 10,000',
    instructor: 'Hassan Ahmad',
    rating: 4.4,
    students: 156,
    category: 'Microsoft Office'
  },
  {
    id: '12',
    title: 'Microsoft Word Professional',
    description: 'Advanced Word processing, document design, and collaboration features. Daily 40-minute tutorial sessions.',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=400&fit=crop',
    duration: '3 months (40 min/day)',
    level: 'Beginner',
    price: 'PKR 10,000',
    instructor: 'Muhammad Jamshaid Ali',
    rating: 4.3,
    students: 210,
    category: 'Microsoft Office'
  }
];

const categories = [
  { name: 'All Courses', icon: AcademicCapIcon, count: courses.length },
  { name: 'AI & ML', icon: CpuChipIcon, count: courses.filter(c => c.category === 'AI & ML').length },
  { name: 'Programming', icon: ComputerDesktopIcon, count: courses.filter(c => c.category === 'Programming').length },
  { name: 'Data Science', icon: ChartBarIcon, count: courses.filter(c => c.category === 'Data Science').length },

  { name: 'Mathematics', icon: CalculatorIcon, count: courses.filter(c => c.category === 'Mathematics').length },
  { name: 'Microsoft Office', icon: PresentationChartLineIcon, count: courses.filter(c => c.category === 'Microsoft Office').length },
];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setShowEnrollmentModal(true);
  };

  const handleWhatsAppEnrollment = () => {
    // Direct link to AIIT enrollment WhatsApp group
    const groupUrl = 'https://chat.whatsapp.com/CIkuvAwYIEf5JyaRvqqnj1';
    window.open(groupUrl, '_blank');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All Courses') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.category === category));
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-blue-400 bg-blue-400/10';
      case 'Intermediate': return 'text-blue-300 bg-blue-300/10';
      case 'Advanced': return 'text-blue-500 bg-blue-500/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent"
          >
            Our Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Master the future with our comprehensive AI, technology, and business courses
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-purple-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-300'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm bg-gray-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Level Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-2xl font-bold text-white">{course.price}</span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {course.description}
                      </p>
                    </div>

                    {/* Course Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>⏱️ {course.duration}</span>
                      <span>👨‍🏫 {course.instructor}</span>
                    </div>

                    {/* Rating and Students */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-white font-medium">{course.rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{course.students.toLocaleString()} students</span>
                    </div>

                    {/* Enroll Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEnrollClick(course)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {showEnrollmentModal && selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center p-4 bg-black/80 backdrop-blur-sm pt-20 overflow-y-auto"
            onClick={() => setShowEnrollmentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 max-w-2xl w-full mx-4 my-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Enroll in Course</h3>
                <button
                  onClick={() => setShowEnrollmentModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Course Info */}
              <div className="bg-gray-800/50 rounded-xl p-6 mb-6 border border-green-500/20">
                <h4 className="text-xl font-bold text-white mb-2">{selectedCourse.title}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white ml-2">{selectedCourse.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white ml-2">{selectedCourse.level}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Instructor:</span>
                    <span className="text-white ml-2">{selectedCourse.instructor}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Price:</span>
                    <span className="text-green-400 font-bold ml-2">{selectedCourse.price}</span>
                  </div>
                </div>
              </div>

              {/* Enrollment Process */}
              <div className="space-y-6">
                <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-400 mb-4">📋 Enrollment Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                      <div>
                        <p className="font-medium text-white">Make Payment</p>
                        <p className="text-sm text-gray-300">Pay course fee using Easypaisa or JazzCash</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                      <div>
                        <p className="font-medium text-white">Join AIIT Enrollment Group</p>
                        <p className="text-sm text-gray-300">Click the button below to join our official enrollment group for all courses</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                      <div>
                        <p className="font-medium text-white">Share Payment Screenshot</p>
                        <p className="text-sm text-gray-300">Send your payment receipt in the group for verification</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                      <div>
                        <p className="font-medium text-white">Get Enrolled</p>
                        <p className="text-sm text-gray-300">After payment approval, you'll be added to the course group</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-2xl p-6 border border-green-500/30">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">💳 Payment Methods</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-900/50 rounded-xl p-4 border border-blue-400/40">
                      <h5 className="font-bold text-blue-300 mb-3 flex items-center">
                        <span className="mr-2">📱</span> Easypaisa
                      </h5>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-400">Account:</span>
                          <span className="text-white ml-2 font-mono font-bold">03479069470</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Name:</span>
                          <span className="text-white ml-2">Usman Zafar</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-900/50 rounded-xl p-4 border border-orange-400/40">
                      <h5 className="font-bold text-orange-300 mb-3 flex items-center">
                        <span className="mr-2">💰</span> JazzCash
                      </h5>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-400">Account:</span>
                          <span className="text-white ml-2 font-mono font-bold">03479069470</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Name:</span>
                          <span className="text-white ml-2">Usman Zafar</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-900/30 border border-yellow-500/40 rounded-lg p-4 text-center">
                    <p className="text-yellow-200 font-medium mb-2">📧 Payment Confirmation</p>
                    <p className="text-yellow-100 text-sm">Please send receipt 🧾 for the confirmation of Your Payment.</p>
                    <p className="text-yellow-300 font-semibold text-sm mt-2">Thanks.</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={handleWhatsAppEnrollment}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/30"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690z"/>
                    </svg>
                    <span>Join WhatsApp Group & Enroll</span>
                  </motion.button>
                </div>

                {/* Important Note */}
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-500 text-lg mt-0.5">⚠️</span>
                    <div>
                      <p className="text-yellow-300 font-medium mb-1">Important Instructions:</p>
                      <ul className="text-yellow-200 text-sm space-y-1">
                        <li>• Payment must be made before joining the course group</li>
                        <li>• Share clear screenshot of payment receipt for verification</li>
                        <li>• Course will start after payment approval (usually within 24 hours)</li>
                        <li>• Daily classes are 40 minutes each for 3 months</li>
                        <li>• Contact Usman Zafar (+92 320 566 5392) for any queries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;