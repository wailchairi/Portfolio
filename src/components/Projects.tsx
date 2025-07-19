import React from 'react';
import { useNavigate } from 'react-router-dom';

const videoCategories = [
  {
    id: 'motion-graphics',
    label: 'Motion Graphics',
    description: 'Animated graphics, explainer videos, and creative motion design.',
    videos: [
      'https://f005.backblazeb2.com/file/my-portfolio-assets/motion+graphics/the+Story+of+Mate+Rimac/leaving+the+company.mp4',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/motion+graphics/Tipping+is+a+scam/unethical+practice.mp4',
    ],
  },
  {
    id: 'video-editing',
    label: 'Video Editing',
    description: 'Short films, edits, creative reels, and shorts.',
    videos: [
      'https://f005.backblazeb2.com/file/my-portfolio-assets/video+editing/personal+reels/taloussis.mp4',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/video+editing/shorts/9.mp4',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/Talent+-+%D8%A7%D9%84%D9%85%D9%88%D9%87%D8%A8%D8%A9/The+main+Montage.mp4',
    ],
  },
  {
    id: 'visual-effects',
    label: 'Visual Effects',
    description: 'Compositing, VFX, and digital effects for film and animation.',
    videos: [
      'https://f005.backblazeb2.com/file/my-portfolio-assets/Visual+Effects/Animated+Drawing/move+soul.mp4',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/Visual+Effects/Attack+on+Titan/beast.mp4',
    ],
  },
];

const photoCategories = [
  {
    id: 'photomanipulation',
    label: 'Photomanipulation',
    description: 'Creative photo manipulation and compositing.',
    images: [
      'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/Tangier+Apocalypse/zombie.jpg',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/Realistic+Conan/conan.jpg',
    ],
    videos:[
      'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/the+land/land.mp4',
    ]
  },
  {
    id: 'graphic-design',
    label: 'Graphic Design',
    description: 'Posters, branding, and graphic design work.',
    images: [
      'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/%D8%A8%D9%84%D8%AD%D8%A9.jpg',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Tshits/good+friends.png',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/Invitation/daawa.jpg',
    ],
  },
  {
    id: 'art',
    label: 'Art',
    description: 'Digital and hand-drawn art.',
    images: [
      'https://f005.backblazeb2.com/file/my-portfolio-assets/Art/Digital+Art/death.jpg',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/Art/Digital+Art/old.jpg',
      'https://f005.backblazeb2.com/file/my-portfolio-assets/HAnd+drawn+art/20190519_132505+copy.jpg',
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
                  className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 group flex flex-col items-stretch shadow-lg cursor-pointer focus:outline-none"
                  aria-label={`View ${cat.label} projects`}
                >
                  <div className="relative h-56 w-full flex items-center justify-center bg-black gap-1 overflow-hidden">
                    {cat.videos.slice(0, 3).map((video, i) => (
                      <video
                        key={i}
                        src={video}
                        className="object-cover rounded-lg border-2 border-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                        style={{ width: `calc(100%/${count})`, height: '100%' }}
                        poster="/assets/logo.svg"
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    ))}
                    {/* Blue arrow overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 drop-shadow-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.label}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{cat.description}</p>
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
                  className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 group flex flex-col items-stretch shadow-lg cursor-pointer focus:outline-none"
                  aria-label={`View ${cat.label} projects`}
                >
                  <div className="relative h-56 w-full flex items-center justify-center bg-black gap-1 overflow-hidden">
                    {thumbs.map((thumb, i) => (
                      thumb.type === 'video' ? (
                        <video
                          key={i}
                          src={thumb.src}
                          className="object-cover rounded-lg border-2 border-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
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
                          className="object-cover rounded-lg border-2 border-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                          style={{ width: `calc(100%/${count})`, height: '100%' }}
                          alt={cat.label + ' thumbnail'}
                          onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/logo.svg'; }}
                        />
                      )
                    ))}
                    {/* Add the blue arrow and dark overlay for images as well */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 drop-shadow-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.label}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{cat.description}</p>
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