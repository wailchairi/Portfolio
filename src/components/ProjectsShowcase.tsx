import React, { useState } from 'react';
import { ArrowLeft, Play, Eye, ExternalLink, Filter } from 'lucide-react';

interface ProjectsShowcaseProps {
  onNavigate?: (page: string) => void;
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'motion', label: 'Motion Graphics', count: 4 },
    { id: 'vfx', label: 'Visual Effects', count: 3 },
    { id: 'design', label: 'Graphic Design', count: 3 },
    { id: 'web', label: 'Web Development', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: "Political Campaign Motion Graphics",
      category: 'motion',
      type: 'Motion Graphics',
      description: "Complete animated logo system and social media content for political campaigns with dynamic transitions and engaging visual storytelling.",
      image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["After Effects", "Motion Design", "Branding"],
      featured: true
    },
    {
      id: 2,
      title: "Brand Identity & Logo Animation",
      category: 'design',
      type: 'Brand Design',
      description: "Comprehensive brand identity system with animated logo reveals and brand guidelines for multiple agency clients.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Illustrator", "After Effects", "Brand Design"],
      featured: true
    },
    {
      id: 3,
      title: "Cinematic Visual Effects",
      category: 'vfx',
      type: 'Visual Effects',
      description: "Advanced compositing and visual effects work including motion tracking, particle systems, and digital environments.",
      image: "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["After Effects", "Cinema 4D", "Compositing"],
      featured: false
    },
    {
      id: 4,
      title: "Interactive Portfolio Website",
      category: 'web',
      type: 'Web Development',
      description: "Modern React.js portfolio with smooth animations, responsive design, and dynamic content management.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React.js", "TypeScript", "Tailwind CSS"],
      featured: true
    },
    {
      id: 5,
      title: "Digital Art Collection",
      category: 'design',
      type: 'Digital Art',
      description: "Hand-drawn digital illustrations and photo manipulations showcasing artistic versatility and technical skill.",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Photoshop", "Digital Art", "Illustration"],
      featured: false
    },
    {
      id: 6,
      title: "Product Launch Video",
      category: 'motion',
      type: 'Video Production',
      description: "Complete video production from concept to final edit, including motion graphics, sound design, and color grading.",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Premiere Pro", "After Effects", "Sound Design"],
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Motion Graphics': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Visual Effects': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Brand Design': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Web Development': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Digital Art': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'Video Production': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      
        <div className="flex items-center justify-between mx-auto px-6 pt-6 pb-4">
          <button
                onClick={() => onNavigate?.('home')}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
              <div className="">
                <div className="text-2xl font-bold text-blue-400">{filteredProjects.length}</div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
        </div>
      <div className="container mx-auto px-6 pb-12">
        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-300 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-800 text-gray-300 border-gray-600 hover:border-gray-500'
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === category.id
                    ? 'bg-blue-600'
                    : 'bg-gray-700'
                }`}>
                  {category.id === 'all' ? projects.length : category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {activeFilter === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Work</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">
            {activeFilter === 'all' ? 'All Projects' : categories.find(c => c.id === activeFilter)?.label}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                        <Play size={16} />
                      </button>
                      <button className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-200">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded-full text-xs">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="">
            <h3 className="text-2xl font-bold text-white mb-4">Like what you see?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how I can bring your creative vision to life</p>
            <button
              onClick={() => onNavigate?.('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;