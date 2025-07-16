import React from 'react';
import { ArrowDown, Eye, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate('projects');
    }
  };

  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
            <img
              src='/assets/profile.svg'
              alt='profile'
              className="mx-auto mb-6 w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Wail <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chairi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Creative Designer & Junior Developer
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting digital stories through design, motion, and code. Focused on building bold visuals and functional user experiences.
            </p>
            </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleViewWork}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <Eye size={20} />
              View My Work
            </button>
            <button 
              onClick={handleContact}
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          <button
            onClick={scrollToNext}
            className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;