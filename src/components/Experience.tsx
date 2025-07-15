import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Creative Developer",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      type: "Current",
      description: "Combining creative design with web development skills to create unique digital experiences. Working on React.js projects while maintaining a strong portfolio of motion graphics and visual design work.",
      achievements: [
        "Developed modern web applications using React.js and Node.js",
        "Created motion graphics and visual content for diverse clients",
        "Bridged the gap between design and development in project workflows"
      ]
    },
    {
      title: "Motion Graphics Designer",
      company: "Various Agencies",
      location: "Morocco",
      period: "2020 - 2023",
      type: "Creative",
      description: "Specialized in creating compelling motion graphics, visual effects, and brand content for agencies and political campaigns. Developed expertise in video editing and digital storytelling.",
      achievements: [
        "Produced 100+ motion graphics pieces for political campaigns",
        "Designed complete brand identities and visual systems",
        "Collaborated with agencies on high-profile creative projects"
      ]
    },
    {
      title: "Visual Designer & Video Editor",
      company: "Creative Studios",
      location: "Morocco",
      period: "2018 - 2020",
      type: "Design",
      description: "Focused on video editing, digital art creation, and photo manipulation. Built foundational skills in visual storytelling and developed proficiency in industry-standard creative software.",
      achievements: [
        "Edited and produced promotional videos and content",
        "Created digital art and photo manipulations for various projects",
        "Developed expertise in Adobe Creative Suite and design workflows"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current': return 'bg-green-500';
      case 'Creative': return 'bg-purple-500';
      case 'Design': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
            <p className="text-xl text-gray-300">
              My evolution from creative designer to multidisciplinary developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 ${getTypeColor(exp.type)} rounded-full border-4 border-gray-900 shadow-lg`}></div>
                
                <div className="ml-16 bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-xl text-blue-400 font-medium flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:text-right mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;