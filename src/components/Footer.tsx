import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2024 Wail Chairi Mahjor. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>and</span>
            <Code className="w-4 h-4 mx-2 text-blue-400" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;