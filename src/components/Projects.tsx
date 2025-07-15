import React from 'react';
import { ExternalLink, Github, Play, Eye, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onNavigate?: (page: string) => void;
  preview?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate, preview = false }) => {
  const projects = [
    {
      title: "Political Campaign Visuals",
      description: "Complete visual identity and motion graphics package for political campaigns, including animated logos, social media content, and promotional videos.",
      image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["After Effects", "Premiere Pro", "Illustrator", "Motion Graphics"],
      type: "Creative",
      category: "motion",
      featured: true
    },
    {
      title: "Brand Identity System",
      description: "Comprehensive brand design including logo creation, color systems, typography, and brand guidelines for multiple agency clients.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Illustrator", "Brand Design", "Visual Identity"],
      type: "Design",
      category: "design",
      featured: true
    },
    {
      title: "Interactive Web Portfolio",
      description: "Modern React.js portfolio website with smooth animations, responsive design, and dynamic content management system.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
      type: "Development",
      category: "web",
      featured: true
    },
    {
      title: "Visual Effects Showcase",
      description: "Collection of visual effects work including compositing, motion tracking, and digital manipulation for various media projects.",
      image: "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["After Effects", "Cinema 4D", "Photoshop", "VFX"],
      type: "VFX",
      category: "vfx",
      featured: false
    },
    {
      title: "Digital Art Collection",
      description: "Hand-drawn digital illustrations and photo manipulations showcasing artistic versatility and technical skill.",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Digital Art", "Illustration"],
      type: "Art",
      category: "design",
      featured: false
    },
    {
      title: "Photography Portfolio",
      description: "Professional photography work including portraits, events, and commercial photography with post-processing expertise.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photography", "Lightroom", "Photoshop"],
      type: "Photography",
      category: "photography",
      featured: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Creative': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Design': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Development': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'VFX': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Art': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'Photography': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const displayProjects = preview ? projects.filter(p => p.featured) : projects;

  if (preview) {
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300">
                A glimpse into my creative and technical work
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {displayProjects.map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-200">
                          <Play size={20} />
                        </button>
                        <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors duration-200">
                          <Eye size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate?.('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              >
                <span>View All Projects</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Projects</h2>
            <p className="text-xl text-gray-300">
              Complete showcase of creative projects and technical achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-200">
                        <Play size={20} />
                      </button>
                      <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors duration-200">
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;