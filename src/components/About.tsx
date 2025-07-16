import React from 'react';
import { Palette, Code, Video, Camera, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "Visual Design",
      description: "Branding, illustration, and motion graphics"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: "Video Production",
      description: "Video editing, visual effects, and content creation"
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Web Development",
      description: "React.js, Laravel, and modern web technologies"
    },
    {
      icon: <Camera className="w-8 h-8 text-orange-400" />,
      title: "Photography",
      description: "Digital photography and photo manipulation"
    }
  ];

  const qualities = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Self-Driven Learning",
      description: "Continuously expanding skills across creative and technical domains"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Cross-Disciplinary",
      description: "Bridging aesthetics with function in every project"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300">
              Blending visual creativity with practical development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm Wail Chairi Mahjor a self-taught designer, video editor, and junior developer.
                  I began with hand-drawn art and photography, eventually transitioning into digital design and video editing. 
                  My journey started with a passion for visual storytelling, 
                  creating content from personal use to real business needs. 
                  Over time, I expanded into frontend development, looking to merge creative design with functional code.

              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                That creative path naturally led me into web development,
                where I now work with tools like React, Laravel, and Node.js. 
                I'm currently building real-world projects and sharpening my skills 
                through self-driven learning and hands-on internships.
              </p>
              
              <div className="space-y-4">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {quality.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{quality.title}</h4>
                      <p className="text-gray-400 text-sm">{quality.description}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-600 transition-colors duration-300 border border-gray-600">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;