import React from 'react';
import { useNavigate } from 'react-router-dom';

const videoCategories = [
  {
    id: 'motion-graphics',
    label: 'Motion Graphics',
    description: 'Animated graphics, explainer videos, and creative motion design.',
    videos: [
      '/assets/work/motion graphics/the Story of Mate Rimac/leaving the company.mp4',
      '/assets/work/motion graphics/Tipping is a scam/unethical practice.mp4',
    ],
  },
  {
    id: 'video-editing',
    label: 'Video Editing',
    description: 'Short films, edits, creative reels, and shorts.',
    videos: [
      '/assets/work/video editing/personal reels/taloussis.mp4',
      '/assets/work/video editing/shorts/9.mp4',
      '/assets/work/video editing/Talent - الموهبة/The main Montage.mp4',
    ],
  },
  {
    id: 'visual-effects',
    label: 'Visual Effects',
    description: 'Compositing, VFX, and digital effects for film and animation.',
    videos: [
      '/assets/work/Visual Effects/Animated Drawing/move soul.mp4',
      '/assets/work/Visual Effects/Attack on Titan/beast.mp4',
    ],
  },
];

const photoCategories = [
  {
    id: 'photomanipulation',
    label: 'Photomanipulation',
    description: 'Creative photo manipulation and compositing.',
    images: [
      '/assets/work/photomanipulation/Tangier Apocalypse/zombie.jpg',
      '/assets/work/photomanipulation/Realistic Conan/conan.jpg',
    ],
    videos:[
      '/assets/work/photomanipulation/the land/land.mp4',
    ]
  },
  {
    id: 'graphic-design',
    label: 'Graphic Design',
    description: 'Posters, branding, and graphic design work.',
    images: [
      '/assets/work/graphic design/Poster Design/بلحة.jpg',
      '/assets/work/graphic design/Tshits/good friends.png',
      '/assets/work/graphic design/Invitation/daawa.jpg',
    ],
  },
  {
    id: 'art',
    label: 'Art',
    description: 'Digital and hand-drawn art.',
    images: [
      '/assets/work/Art/Digital Art/death.jpg',
      '/assets/work/Art/Digital Art/old.jpg',
      '/assets/work/Art/HAnd drawn art/20190519_132505 copy.jpg',
    ],
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-xl text-gray-300">
              Explore All my personal/professional work in : 
            </p>
          </div>

          {/* Video Categories Row */}
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Video Production</h3>
          <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videoCategories.map((cat) => {
              const count = Math.min(cat.videos.length, 3);
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/showcase/${cat.id}`)}
                  className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group flex flex-col items-stretch shadow-lg cursor-pointer focus:outline-none"
                  aria-label={`View ${cat.label} projects`}
                >
                  <div className="relative h-56 w-full flex items-center justify-center bg-black gap-1">
                    {cat.videos.slice(0, 3).map((video, i) => (
                      <video
                        key={i}
                        src={video}
                        className="object-cover rounded-lg border-2 border-gray-800 group-hover:border-blue-400 transition-all duration-300"
                        style={{ width: `calc(100%/${count})`, height: '100%' }}
                        poster="/assets/logo.svg"
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.label}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{cat.description}</p>
                    <span className="text-blue-400 font-semibold mt-auto">View Projects &rarr;</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Blue Divider */}
          <hr className=" border-blue-500 my-6 rounded-full" />

          {/* Photo Categories Row */}
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Photo & Design Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {photoCategories.map((cat) => {
              // Compose up to 3 thumbnails: prefer 1 video if present, then images
              const thumbs = [];
              if (cat.videos && cat.videos.length > 0) {
                thumbs.push({ type: 'video', src: cat.videos[0] });
              }
              if (cat.images && cat.images.length > 0) {
                for (const img of cat.images) {
                  if (thumbs.length < 3) thumbs.push({ type: 'image', src: img });
                }
              }
              const count = thumbs.length;
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/showcase/${cat.id}`)}
                  className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group flex flex-col items-stretch shadow-lg cursor-pointer focus:outline-none"
                  aria-label={`View ${cat.label} projects`}
                >
                  <div className="relative h-56 w-full flex items-center justify-center bg-black gap-1">
                    {thumbs.map((thumb, i) => (
                      thumb.type === 'video' ? (
                        <video
                          key={i}
                          src={thumb.src}
                          className="object-cover rounded-lg border-2 border-gray-800 group-hover:border-blue-400 transition-all duration-300"
                          style={{ width: `calc(100%/${count})`, height: '100%' }}
                          poster="/assets/logo.svg"
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          key={i}
                          src={thumb.src}
                          className="object-cover rounded-lg border-2 border-gray-800 group-hover:border-blue-400 transition-all duration-300"
                          style={{ width: `calc(100%/${count})`, height: '100%' }}
                          alt={cat.label + ' thumbnail'}
                        />
                      )
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.label}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{cat.description}</p>
                    <span className="text-blue-400 font-semibold mt-auto">View Projects &rarr;</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;