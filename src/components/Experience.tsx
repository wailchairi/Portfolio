import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
const experiences = [
  {
    title: "Frontend Intern – Developer",
    company: "Flex Business",
    location: "Morocco",
    period: "May 2025 – Present",
    type: "Current",
    description:
      "Contributing to a delivery management platform using React and Tailwind. Collaborating with the dev team on components, dashboards, and API integration.",
    achievements: [
      "Built reusable components and dashboards with React.js",
      "Worked with real backend APIs and authentication flows",
      "Practiced Git, collaboration workflows, and code reviews",
    ],
  },
  {
    title: "Video Editor & Motion Designer",
    company: "Highkey Agency",
    location: "Remote",
    period: "July 2023 – April 2024",
    type: "Creative",
    description:
      "Created short-form video content for social platforms. Focused on fast-paced editing and storytelling.",
    achievements: [
      "Produced 100+ short videos optimized for engagement",
      "Handled all editing, sound design, and animation independently",
      "Adapted visual content for multiple brands and audiences",
    ],
  },
  {
    title: "Freelance Designer & Editor",
    company: "Independent Clients",
    location: "Remote",
    period: "2020 – 2023",
    type: "Creative",
    description:
      "Provided design and editing services to local businesses and individuals. Specialized in logos, flyers, posters, and video edits.",
    achievements: [
      "Delivered consistent branding materials and promo videos",
      "Worked directly with clients from concept to final delivery",
      "Used Adobe Creative Suite for most projects",
    ],
  },
  {
    title: "Graphic Designer & Print Operator",
    company: "Local Print Shop",
    location: "Morocco",
    period: "2021 – 2023",
    type: "Design",
    description:
      "Handled both digital design and physical print production of materials including business cards, posters, books, and menus.",
    achievements: [
      "Designed and prepared hundreds of print-ready files",
      "Worked daily with clients under short deadlines",
      "Built solid layout and typography habits",
    ],
  },
  {
    title: "Campaign Content Creator",
    company: "RNI – Tangier",
    location: "Morocco",
    period: "September 2021",
    type: "Creative",
    description:
      "Worked on political content during the election campaign. Focused on photography, visual identity, and poster creation.",
    achievements: [
      "Photographed campaign events and edited materials on the spot",
      "Designed printed media under tight political deadlines",
      "Collaborated with communication teams on branding",
    ],
  },
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
              trying to fit my skills into real-world projects
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