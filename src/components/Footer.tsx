import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-blue-400/20 overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-30"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  AIIT
                </h3>
                <p className="text-xs text-gray-300">AI Institute of Technology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              Pioneering the future of artificial intelligence with cutting-edge research, 
              innovative solutions, and advanced technology.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-400/30 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-300">© {currentYear} AIIT - AI Institute of Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>AI Systems Online</span>
            </span>
            <span className="text-gray-300">Made with ❤️ and AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;