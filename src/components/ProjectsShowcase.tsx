import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {  ArrowLeft } from 'lucide-react';

const showcaseData = {
  'motion-graphics': [
    {
      id: 'the-story-of-mate-rimac',
      label: 'The Story of Mate Rimac',
      description: 'YouTube documentary with advanced motion graphics and editing for Mate Rimac.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/motion+graphics/the+Story+of+Mate+Rimac/the+concept+one.mp4',
      ],
    },
    {
      id: 'tipping-is-a-scam',
      label: 'Tipping is a Scam',
      description: 'Explainer video using motion graphics to analyze tipping culture.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/motion+graphics/Tipping+is+a+scam/explaining.mp4',
      ],
    },
  ],
  'video-editing': [
    {
      id: 'personal-reels',
      label: 'Personal Reels',
      description: 'Cinematic adventure edits focused on authentic mountain experiences.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/video+editing/personal+reels/taloussis.mp4',
      ],
    },
    {
      id: 'shorts',
      label: 'Social Media content',
      description: 'Short-form reels for agency clients, highlighting storytelling.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/video+editing/shorts/9.mp4',
      ],
    },
    {
      id: 'talent',
      label: 'Talent - الموهبة',
      description: 'Documentary edit with creative cuts and youthful storytelling.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/video+editing/Talent+-+%D8%A7%D9%84%D9%85%D9%88%D9%87%D8%A8%D8%A9/The+main+Montage.mp4',
      ],
    },
  ],
  'visual-effects': [
    {
      id: 'animated-drawing',
      label: 'Animated Drawing',
      description: 'Hand-drawn animation blended with digital VFX.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/Visual+Effects/Animated+Drawing/move+soul.mp4',
      ],
    },
    {
      id: 'attack-on-titan',
      label: 'Attack on Titan',
      description: 'Anime-inspired VFX transformation into a Beast Titan.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/Visual+Effects/Attack+on+Titan/beast.mp4',
      ],
    },
  ],
  'photomanipulation': [
    
    {
      id: 'tangier-apocalypse',
      label: 'Tangier Apocalypse',
      description: 'Photo manipulation turning Tangier into a post-apocalyptic scene.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/zombie.jpg',
    },
    {
      id: 'turning-myself-into-fictional-character',
      label: 'Turning Myself into Fictional Character',
      description: 'Portrait transformation into Thors from Vinland Saga.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/thoroso.jpg',
    },
    {
      id: 'the-land',
      label: 'The Land',
      description: 'Surreal self-portrait composited into a fantasy landscape.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/land.mp4',
      ],
    }, 
    {
      id: 'samurai-jack-realistic',
      label: 'Samurai Jack Realistic',
      description: 'Anime character reimagined with photorealistic digital painting.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/samurai+jack.png',
    },
    {
      id: 'aji',
      label: 'Aji',
      description: 'Cinematic recruitment poster for Aji Club.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/aji+recruit.jpg',
    },
    {
      id: 'realistic-conan',
      label: 'Realistic Conan',
      description: 'Detective Conan reimagined with hyper-realistic details.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/conan.jpg',
    },
    {
      id: 'turning-salah-into-zombie',
      label: 'Turning Salah into Zombie',
      description: 'Photorealistic zombie makeover for a full character transformation.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/soloh.jpg',
    },
    {
      id: 'tod-realistic',
      label: 'Tod Realistic',
      description: 'BoJack Horseman’s Todd redesigned as a lifelike human.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/tod.jpg',
    },
    {
      id: 'turning-bilal-into-eren',
      label: 'Turning Bilal into Eren',
      description: 'Portrait transformed into Eren Yeager from Attack on Titan.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/irin.jpg',
    },
    {
      id: 'van-gogh',
      label: 'Van Gogh',
      description: 'Blending my features into Van Gogh’s iconic style.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/mahgokh.jpg',
    },
    {
      id: 'rissala',
      label: 'Rissala',
      description: 'Conceptual artwork visualizing Rissala’s mission.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/photomanipulation/%D8%B2%D9%88%D8%B1%D9%82+%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9.jpg',
    },
  ],
  'graphic-design': [
    {
      id: 'poster-design',
      label: 'Poster Design',
      description: 'Professional poster designs for diverse clients.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/hadkourt+copy.jpg',
    },
    {
      id: 'T-Shirts',
      label: 'T-shirts',
      description: 'Original T-shirt designs for a startup clothing brand.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/good+friends+.jpg',
    },
    {
      id: 'invitation',
      label: 'Invitation',
      description: 'Elegant invitation suite for Rissala Organization.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/daawa.jpg',
    },
    {
      id: 'certificate',
      label: 'Certificate',
      description: 'Custom-designed certificates for various clients.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/ajyal+certificat.jpg',
    },
  ],
  'art': [
    {
      id: 'digital-art',
      label: 'Digital Art',
      description: 'Original digital paintings and photorealistic art.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Art/Digital+Art/death.jpg',
    },
    {
      id: 'hand-drawn-art',
      label: 'Hand Drawn Art',
      description: 'Personal explorations in traditional hand-drawn art.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Art/HAnd+drawn+art/Cat.jpg',
    },
  ],
};

const categoryLabels: Record<string, string> = {
  'motion-graphics': 'Motion Graphics',
  'video-editing': 'Video Editing',
  'visual-effects': 'Visual Effects',
  'photomanipulation': 'Photo Manipulation',
  'graphic-design': 'Graphic Design',
  'art': 'Art',
};

const ProjectsShowcase: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const projects = showcaseData[category as keyof typeof showcaseData] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-">
      <div className="w-full max-w-5xl mb-8 flex items-center">
        <button
          onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Showcase
        </button>
      </div>
      <div className="max-w-5xl mx-auto">
      
        <h1 className="text-3xl font-bold text-white mb-10 text-center">
          {categoryLabels[category || ''] || 'Projects'} Showcase
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => navigate(`/project/${proj.id}`, { state: { category } })}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 group flex flex-col items-stretch shadow-lg cursor-pointer focus:outline-none"
              aria-label={`View project: ${proj.label}`}
            >
              <div className="relative h-56 w-full flex items-center justify-center bg-black overflow-hidden">
                {/* Video or image thumbnail */}
                {'videos' in proj && proj.videos && proj.videos.length > 0 ? (
                  <video
                    src={proj.videos[0]}
                    className="object-cover h-full w-full rounded-lg border-2 border-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                    poster="/assets/logo.svg"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                ) : ('thumbnail' in proj && proj.thumbnail ? (
                  <img
                    src={proj.thumbnail}
                    className="object-cover h-full w-full rounded-lg border-2 border-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                    alt={proj.label + ' thumbnail'}
                    onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/logo.svg'; }}
                  />
                ) : null)}
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
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{proj.label}</h3>
                <p className="text-gray-300 mb-4 flex-1">{proj.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;