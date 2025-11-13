import React from 'react';
import { Zap, Users } from 'lucide-react';

const About = () => {


  const qualities = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Self-Taught Discipline",
      description: "I pick up various tools fast and apply them in projects."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Practical Creativity",
      description: "I focus on making ideas real clean, functional, and true to their intent."
    }
  ];

  return (
    <section id="about" className="pt-20 pb- bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
            <p className="text-xl text-gray-300">
              Prioritizing truth over shallow aesthetics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm <span className="font-semibold text-white">Wail Chairi Mahjor</span> a self-taught designer, video editor, and junior developer.
                  I started with drawing and photography before discovering how much I enjoyed shaping ideas visually. 
                  That curiosity grew into design, motion, and eventually frontend development.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Along the way, I’ve learned tools like Photoshop, Illustrator, Premiere Pro, After Effects, React, React Native, and Figma — mostly by experimenting and building small projects.
                I try to keep my work simple, functional, and true to its purpose.
              </p>
              
              <div className="space-y-4">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {quality.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{quality.title}</h4>
                      <p className="text-gray-400 text-m">{quality.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              {/* Purple glow circle behind everything */}
             
              <img
                src="/assets/smileb.svg"
                alt="profile"
                className="h-[600px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;