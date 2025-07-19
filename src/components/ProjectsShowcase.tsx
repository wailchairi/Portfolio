import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {  ArrowLeft } from 'lucide-react';

const showcaseData = {
  'motion-graphics': [
    {
      id: 'the-story-of-mate-rimac',
      label: 'The Story of Mate Rimac',
      description: 'A documentary-style project about Mate Rimac, featuring advanced motion graphics and storytelling.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/motion graphics/the Story of Mate Rimac/leaving the company.mp4',
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/motion graphics/the Story of Mate Rimac/Middle easterns.mp4',
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/motion graphics/the Story of Mate Rimac/rimac Future.mp4',
      ],
    },
    {
      id: 'tipping-is-a-scam',
      label: 'Tipping is a Scam',
      description: 'A motion graphics project exposing unethical tipping practices.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/motion graphics/Tipping is a scam/unethical practice.mp4',
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/motion graphics/Tipping is a scam/explaining.mp4',
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/motion graphics/Tipping is a scam/Big mistake.mp4',
      ],
    },
  ],
  'video-editing': [
    {
      id: 'personal-reels',
      label: 'Personal Reels',
      description: 'A collection of my best video editing work and creative reels.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/video editing/personal reels/taloussis.mp4',
      ],
    },
    {
      id: 'shorts',
      label: 'Social Media content',
      description: 'Short-form creative videos and storytelling.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/video editing/shorts/9.mp4',
      ],
    },
    {
      id: 'talent',
      label: 'Talent - الموهبة',
      description: 'A documentary edit with creative cuts and storytelling.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/video editing/Talent - الموهبة/The main Montage.mp4',
      ],
    },
  ],
  'visual-effects': [
    {
      id: 'animated-drawing',
      label: 'Animated Drawing',
      description: 'A VFX project exploring animated drawing techniques.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/Visual Effects/Animated Drawing/move soul.mp4',
      ],
    },
    {
      id: 'attack-on-titan',
      label: 'Attack on Titan',
      description: 'A VFX project inspired by Attack on Titan.',
      videos: [
        'https://f005.backblazeb2.com/file/my-portfolio-assets/work/Visual Effects/Attack on Titan/beast.mp4',
      ],
    },
  ],
  'photomanipulation': [
    
    {
      id: 'tangier-apocalypse',
      label: 'Tangier Apocalypse',
      description: 'Photo manipulation project: Tangier Apocalypse.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Tangier Apocalypse/zombie.jpg',
    },
    {
      id: 'turning-myself-into-fictional-character',
      label: 'Turning Myself into Fictional Character',
      description: 'Photo manipulation project: Turning myself into fictional character.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Turning my self into fictional carachter/thoroso.jpg',
    },
    {
      id: 'the-land',
      label: 'The Land',
      description: 'Photo manipulation project: The Land.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/the land/flaa7.jpg',
    }, 
    {
      id: 'samurai-jack-realistic',
      label: 'Samurai Jack Realistic',
      description: 'Photo manipulation project: Samurai Jack realistic.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Samurai jack realistic/samurai jack copy.png',
    },
    {
      id: 'aji',
      label: 'Aji',
      description: 'Photo manipulation project: Aji.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Aji/aji recruit.jpg',
    },
    {
      id: 'realistic-conan',
      label: 'Realistic Conan',
      description: 'Photo manipulation project: Realistic Conan.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Realistic Conan/conan.jpg',
    },
    {
      id: 'turning-salah-into-zombie',
      label: 'Turning Salah into Zombie',
      description: 'Photo manipulation project: Turning Salah into Zombie.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Turning Salah into Zombie/soloh.jpg',
    },
    {
      id: 'tod-realistic',
      label: 'Tod Realistic',
      description: 'Photo manipulation project: Tod realistic.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Tod realistic/tod.jpg',
    },
    {
      id: 'turning-bilal-into-eren',
      label: 'Turning Bilal into Eren',
      description: 'Photo manipulation project: Turning Bilal into Eren.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Turning Bilal into Eren/irin.jpg',
    },
    {
      id: 'van-gogh',
      label: 'Van Gogh',
      description: 'Photo manipulation project: Van Gogh.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Van gogh/mahgokh.jpg',
    },
    {
      id: 'rissala',
      label: 'Rissala',
      description: 'Photo manipulation project: Rissala.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/photomanipulation/Rissala/زورق الرسالة.jpg',
    },
  ],
  'graphic-design': [
    {
      id: 'poster-design',
      label: 'Poster Design',
      description: 'Graphic design project: Poster Design.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/graphic design/Poster Design/بلحة.jpg',
    },
    {
      id: 'tshits',
      label: 'Tshits',
      description: 'Graphic design project: Tshits.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/graphic design/Tshits/good friends.png',
    },
    {
      id: 'invitation',
      label: 'Invitation',
      description: 'Graphic design project: Invitation.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/graphic design/Invitation/daawa.jpg',
    },
    {
      id: 'certificate',
      label: 'Certificate',
      description: 'Graphic design project: Certificate.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/graphic design/Certificate/ajyal certificat.jpg',
    },
  ],
  'art': [
    {
      id: 'digital-art',
      label: 'Digital Art',
      description: 'Digital art project.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/Art/Digital+Art/death.jpg',
    },
    {
      id: 'hand-drawn-art',
      label: 'Hand Drawn Art',
      description: 'Hand drawn art project.',
      type: 'photo',
      thumbnail: 'https://f005.backblazeb2.com/file/my-portfolio-assets/work/Art/HAnd+drawn+art/20190519_132505 copy.jpg',
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-">
      <div className="w-full max-w-5xl mb-8 flex items-center">
        <button
          onClick={() => navigate(-1)}
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
              onClick={() => navigate(`/project/${proj.id}`)}
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