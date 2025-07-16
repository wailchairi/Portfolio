import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (sectionId && page === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navItems = currentPage === 'home' 
    ? [
        { label: 'About', action: () => handleNavigation('home', 'about') },
        { label: 'Projects', action: () => handleNavigation('projects') },
        { label: 'Experience', action: () => handleNavigation('home', 'experience') },
        { label: 'Contact', action: () => handleNavigation('home', 'contact') }
      ]
    : [
        { label: 'Home', action: () => handleNavigation('home') },
        { label: 'About', action: () => handleNavigation('home', 'about') },
        { label: 'Projects', action: () => handleNavigation('projects') },
        { label: 'Experience', action: () => handleNavigation('home', 'experience') },
        { label: 'Contact', action: () => handleNavigation('home', 'contact') }
      ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-200"
          >
            <img src="/assets/logo.svg" alt="Logo" className="h-9 w-auto inline-block mr-2" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-blue-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;