import React from 'react';
import { Palette, Code, Video, Camera, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "Visual Design",
      description: "Motion graphics, digital art, and brand design"
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300">
              Creative vision meets technical expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm Wail Chairi Mahjor, a multidisciplinary creative with a strong foundation in visual 
                storytelling and digital design. With years of hands-on experience in video editing, 
                motion graphics, and brand design, I've crafted compelling content for agencies, 
                political campaigns, and freelance clients.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Blending my artistic background with technical curiosity, I've recently expanded into 
                frontend and backend development, completing advanced training in React.js and gaining 
                practical experience with Laravel and Node.js through real-world projects.
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
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-8 border border-gray-600">
              <div className="grid grid-cols-2 gap-6 text-center mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Creative Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
                  <div className="text-gray-300 text-sm">Skill Areas</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 text-sm italic">
                  "Well-positioned for roles that demand both creative vision and technical implementation"
                </p>
              </div>
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