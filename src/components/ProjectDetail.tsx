import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro, SiCinema4D } from 'react-icons/si';

// Map projectId to folder and info
const projectMap: Record<string, {
  folder: string;
  category: string;
  label: string;
  description: string;
  technologies: string[];
  info: string;
  type?: 'photo' | 'video'; // Added type for photo projects
}> = {
  'the-story-of-mate-rimac': {
    folder: '/assets/work/motion graphics/the Story of Mate Rimac',
    category: 'Motion Graphics',
    label: 'The Story of Mate Rimac',
    description: 'A documentary-style project about Mate Rimac, featuring advanced motion graphics and storytelling.',
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop'],
    info: 'Client: YouTube Channel | Duration: 12 min | Role: Motion Graphics, Editing, Color Grading',
    type: 'video',
  },
  'tipping-is-a-scam': {
    folder: '/assets/work/motion graphics/Tipping is a scam',
    category: 'Motion Graphics',
    label: 'Tipping is a Scam',
    description: 'A motion graphics project exposing unethical tipping practices.',
    technologies: ['After Effects', 'Premiere Pro' , 'Photoshop'],
    info: 'Client: YouTube Channel | Duration: 8 min | Role: Motion Graphics, Editing',
    type: 'video',
  },
  'personal-reels': {
    folder: '/assets/work/video editing/personal reels',
    category: 'Video Editing',
    label: 'Personal Reels',
    description: 'A collection of my best video editing work and creative reels.',
    technologies: ['Premiere Pro', 'After Effects'],
    info: 'Client: Various | Duration: 2-5 min each | Role: Editing, Color Grading',
    type: 'video',
  },
  'talent': {
    folder: '/assets/work/video editing/Talent - الموهبة',
    category: 'Video Editing',
    label: 'Talent - الموهبة',
    description: 'A documentary edit with creative cuts and storytelling.',
    technologies: ['Premiere Pro', 'After Effects'],
    info: 'Client: Documentary | Duration: 15 min | Role: Editing, Color Grading',
    type: 'video',
  },
  'shorts': {
    folder: '/assets/work/video editing/shorts',
    category: 'Video Editing',
    label: 'Shorts',
    description: 'A collection of short-form creative videos and storytelling clips.',
    technologies: ['Premiere Pro', 'After Effects'],
    info: 'Client: Various | Duration: 1-3 min each | Role: Editing, Storytelling',
    type: 'video',
  },
  'animated-drawing': {
    folder: '/assets/work/Visual Effects/Animated Drawing',
    category: 'Visual Effects',
    label: 'Animated Drawing',
    description: 'A VFX project exploring animated drawing techniques and compositing.',
    technologies: ['After Effects', 'Photoshop'],
    info: 'Personal Project | Duration: 2 min | Role: Animation, VFX',
    type: 'video',
  },
  'attack-on-titan': {
    folder: '/assets/work/Visual Effects/Attack on Titan',
    category: 'Visual Effects',
    label: 'Attack on Titan',
    description: 'A VFX project inspired by Attack on Titan, focusing on creature animation and effects.',
    technologies: ['After Effects', 'Premiere Pro' ,'Photoshop'],
    info: 'Fan Project | Duration: 3 min | Role: VFX, Animation',
    type: 'video',
  },
  // Added photo projects
  'realistic-conan': {
    folder: '/assets/work/photomanipulation/Realistic Conan',
    category: 'Photomanipulation',
    label: 'Realistic Conan',
    description: 'A photomanipulation project showcasing realistic Conan the Barbarian.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'turning-salah-into-zombie': {
    folder: '/assets/work/photomanipulation/Turning Salah into Zombie',
    category: 'Photomanipulation',
    label: 'Turning Salah into Zombie',
    description: 'A photomanipulation project transforming a person into a zombie.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'tod-realistic': {
    folder: '/assets/work/photomanipulation/Tod realistic',
    category: 'Photomanipulation',
    label: 'Tod Realistic',
    description: 'A photomanipulation project creating a realistic Tod character.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'samurai-jack-realistic': {
    folder: '/assets/work/photomanipulation/Samurai jack realistic',
    category: 'Photomanipulation',
    label: 'Samurai Jack Realistic',
    description: 'A photomanipulation project creating a realistic Samurai Jack.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'turning-bilal-into-eren': {
    folder: '/assets/work/photomanipulation/Turning Bilal into Eren',
    category: 'Photomanipulation',
    label: 'Turning Bilal into Eren',
    description: 'A photomanipulation project transforming a person into Eren Yeager.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'aji': {
    folder: '/assets/work/photomanipulation/Aji',
    category: 'Photomanipulation',
    label: 'Aji',
    description: 'A photomanipulation project featuring an Aji character.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'van-gogh': {
    folder: '/assets/work/photomanipulation/Van gogh',
    category: 'Photomanipulation',
    label: 'Van Gogh',
    description: 'A photomanipulation project recreating a Van Gogh painting.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'rissala': {
    folder: '/assets/work/photomanipulation/Rissala',
    category: 'Photomanipulation',
    label: 'Rissala',
    description: 'A photomanipulation project featuring a Rissala character.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'turning-myself-into-fictional-character': {
    folder: '/assets/work/photomanipulation/Turning my self into fictional carachter',
    category: 'Photomanipulation',
    label: 'Turning Myself into Fictional Character',
    description: 'A photomanipulation project transforming a person into a fictional character.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'the-land': {
    folder: '/assets/work/photomanipulation/the land',
    category: 'Photomanipulation',
    label: 'The Land',
    description: 'A photomanipulation project depicting a landscape.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'tangier-apocalypse': {
    folder: '/assets/work/photomanipulation/Tangier Apocalypse',
    category: 'Photomanipulation',
    label: 'Tangier Apocalypse',
    description: 'A photomanipulation project depicting an apocalyptic scene in Tangier.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'poster-design': {
    folder: '/assets/work/graphic design/Poster Design',
    category: 'Graphic Design',
    label: 'Poster Design',
    description: 'A graphic design project for a poster.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'tshits': {
    folder: '/assets/work/graphic design/Tshits',
    category: 'Graphic Design',
    label: 'Tshits',
    description: 'A graphic design project for a Tshits (a type of Arabic bread).',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'invitation': {
    folder: '/assets/work/graphic design/Invitation',
    category: 'Graphic Design',
    label: 'Invitation',
    description: 'A graphic design project for an invitation.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'certificate': {
    folder: '/assets/work/graphic design/Certificate',
    category: 'Graphic Design',
    label: 'Certificate',
    description: 'A graphic design project for a certificate.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'digital-art': {
    folder: '/assets/work/Art/Digital Art',
    category: 'Art',
    label: 'Digital Art',
    description: 'A digital art project featuring a death scene.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Art',
    type: 'photo',
  },
  'hand-drawn-art': {
    folder: '/assets/work/Art/HAnd drawn art',
    category: 'Art',
    label: 'Hand Drawn Art',
    description: 'A hand-drawn art project from 2019.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Art',
    type: 'photo',
  },
};

// Hardcoded video files for each project (in real app, automate this)
const projectVideos: Record<string, { src: string; title: string }[]> = {
  'the-story-of-mate-rimac': [
    { src: '/assets/work/motion graphics/the Story of Mate Rimac/HAMMOC.mp4', title: 'HAMMOC' },
    { src: '/assets/work/motion graphics/the Story of Mate Rimac/leaving the company.mp4', title: 'Leaving the Company' },
    { src: '/assets/work/motion graphics/the Story of Mate Rimac/Middle easterns.mp4', title: 'Middle Easterns' },
    { src: '/assets/work/motion graphics/the Story of Mate Rimac/rimac Future.mp4', title: 'Rimac Future' },
    { src: '/assets/work/motion graphics/the Story of Mate Rimac/the concept one.mp4', title: 'The Concept One' },
  ],
  'tipping-is-a-scam': [
    { src: '/assets/work/motion graphics/Tipping is a scam/Big mistake.mp4', title: 'Big Mistake' },
    { src: '/assets/work/motion graphics/Tipping is a scam/unethical practice.mp4', title: 'Unethical Practice' },
    { src: '/assets/work/motion graphics/Tipping is a scam/explaining.mp4', title: 'Explaining' },
  ],
  'personal-reels': [
    { src: '/assets/work/video editing/personal reels/taloussis.mp4', title: 'Taloussis' },
    { src: '/assets/work/video editing/personal reels/كلتي.mp4', title: 'كلتي' },
    { src: '/assets/work/video editing/personal reels/into the wild.mp4', title: 'Into the Wild' },
    { src: '/assets/work/video editing/personal reels/حافة زلطان.mp4', title: 'حافة زلطان' },
    { src: '/assets/work/video editing/personal reels/the sunset.mp4', title: 'The Sunset' },
    { src: '/assets/work/video editing/personal reels/الصابة المنقولة.mp4', title: 'الصابة المنقولة' },
  ],
  'talent': [
      { src: '/assets/work/video editing/Talent - الموهبة/Intro.mp4', title: 'Intro' },
    { src: '/assets/work/video editing/Talent - الموهبة/The main Montage.mp4', title: 'The Main Montage' },
    { src: '/assets/work/video editing/Talent - الموهبة/Interview.mp4', title: 'Interview' },
  ],
  'shorts': [
    { src: '/assets/work/video editing/shorts/9.mp4', title: '9' },
    { src: '/assets/work/video editing/shorts/4 - I ran into a burning building-.mp4', title: '4 - I ran into a burning building-' },
    { src: '/assets/work/video editing/shorts/27-biggest success story-.mp4', title: '27-biggest success story-' },
    { src: '/assets/work/video editing/shorts/23-don_t overthink your goals.mp4', title: '23-don_t overthink your goals' },
  ],
  'animated-drawing': [
    { src: '/assets/work/Visual Effects/Animated Drawing/move soul.mp4', title: 'Move Soul' },
  ],
  'attack-on-titan': [
    { src: '/assets/work/Visual Effects/Attack on Titan/beast.mp4', title: 'Beast' },
  ],
};

const projectGallery: Record<string, { type: 'image' | 'video'; src: string; title: string }[]> = {
  // Graphic Design
  'poster-design': [
    { type: 'image', src: '/assets/work/graphic design/Poster Design/بلحة.jpg', title: 'بلحة' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/pos.jpg', title: 'pos' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/star.jpg', title: 'star' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/الحساب الذهني copy.jpg', title: 'الحساب الذهني' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/bassma copyq.jpg', title: 'bassma' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/printing.jpg', title: 'printing' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/ilaan pics.jpg', title: 'ilaan pics' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/omyaa.jpg', title: 'omyaa' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/music.jpg', title: 'music' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/7afl copy.jpg', title: '7afl' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/black.jpg', title: 'black' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/IMG-20180603-WA0005.jpg', title: 'IMG-20180603-WA0005' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/stito.jpg', title: 'stitto' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/ilan copy.jpg', title: 'ilan' },
    { type: 'image', src: '/assets/work/graphic design/Poster Design/hadkourt.jpg', title: 'hadkourt' },
  ],
  'tshits': [
    { type: 'image', src: '/assets/work/graphic design/Tshits/good friends.png', title: 'good friends' },
    { type: 'image', src: '/assets/work/graphic design/Tshits/pink baseball.png', title: 'pink baseball' },
    { type: 'image', src: '/assets/work/graphic design/Tshits/women.png', title: 'women' },
    { type: 'image', src: '/assets/work/graphic design/Tshits/baseball copy.png', title: 'baseball copy' },
    { type: 'image', src: '/assets/work/graphic design/Tshits/guys.png', title: 'guys' },
  ],
  'invitation': [
    { type: 'image', src: '/assets/work/graphic design/Invitation/daawa.jpg', title: 'daawa' },
  ],
  'certificate': [
    { type: 'image', src: '/assets/work/graphic design/Certificate/ajyal certificat.jpg', title: 'ajyal certificat' },
    { type: 'image', src: '/assets/work/graphic design/Certificate/certificat.jpg', title: 'certificat' },
    { type: 'image', src: '/assets/work/graphic design/Certificate/شهادة.jpg', title: 'شهادة' },
  ],
  // Art
  'digital-art': [
    { type: 'video', src: '/assets/work/Art/Digital Art/caveman.mp4', title: 'caveman' },
    { type: 'video', src: '/assets/work/Art/Digital Art/wailverine.mp4', title: 'wailverine' },
    { type: 'image', src: '/assets/work/Art/Digital Art/death.jpg', title: 'death' },
    { type: 'image', src: '/assets/work/Art/Digital Art/old.jpg', title: 'old' },
    { type: 'image', src: '/assets/work/Art/Digital Art/cave tone.jpg', title: 'cave tone' },
    { type: 'image', src: '/assets/work/Art/Digital Art/dream.jpg', title: 'dream' },
    { type: 'image', src: '/assets/work/Art/Digital Art/booy.jpg', title: 'booy' },
    { type: 'image', src: '/assets/work/Art/Digital Art/subconsious .jpg', title: 'subconsious' },
    { type: 'image', src: '/assets/work/Art/Digital Art/spirit of the mountain.jpg', title: 'spirit of the mountain' },
    { type: 'image', src: '/assets/work/Art/Digital Art/waillverine.jpg', title: 'waillverine' },
    { type: 'image', src: '/assets/work/Art/Digital Art/me.jpg', title: 'me' },
  ],
  'hand-drawn-art': [
    { type: 'image', src: '/assets/work/Art/HAnd drawn art/20190519_132505 copy.jpg', title: '20190519_132505' },
    { type: 'image', src: '/assets/work/Art/HAnd drawn art/DSC05294.JPG', title: 'DSC05294' },
    { type: 'image', src: '/assets/work/Art/HAnd drawn art/rollo.JPG', title: 'rollo' },
    { type: 'image', src: '/assets/work/Art/HAnd drawn art/anoir .jpg', title: 'anoir' },
    { type: 'image', src: '/assets/work/Art/HAnd drawn art/cave me.jpg', title: 'cave me' },
  ],
  // photomanipulation
  'realistic-conan': [
    { type: 'image', src: '/assets/work/photomanipulation/Realistic Conan/conan.jpg', title: 'conan' },
  ],
  'turning-salah-into-zombie': [
    { type: 'image', src: '/assets/work/photomanipulation/Turning Salah into Zombie/soloh.jpg', title: 'soloh' },
  ],
  'tod-realistic': [
    { type: 'image', src: '/assets/work/photomanipulation/Tod realistic/tod.jpg', title: 'tod' },
    { type: 'video', src: '/assets/work/photomanipulation/Tod realistic/tod.mp4', title: 'tod' },
  ],
  'samurai-jack-realistic': [
    { type: 'image', src: '/assets/work/photomanipulation/Samurai jack realistic/samurai jack copy.png', title: 'samurai jack copy' },
    { type: 'video', src: '/assets/work/photomanipulation/Samurai jack realistic/samurai jack.mp4', title: 'samurai jack' },
  ],
  'turning-bilal-into-eren': [
    { type: 'image', src: '/assets/work/photomanipulation/Turning Bilal into Eren/irin.jpg', title: 'irin' },
  ],
  'aji': [
    { type: 'image', src: '/assets/work/photomanipulation/Aji/aji recruit.jpg', title: 'aji recruit' },
  ],
  'van-gogh': [
    { type: 'image', src: '/assets/work/photomanipulation/Van gogh/mahgokh.jpg', title: 'mahgokh' },
  ],
  'rissala': [
    { type: 'image', src: '/assets/work/photomanipulation/Rissala/زورق الرسالة.jpg', title: 'زورق الرسالة' },
    { type: 'image', src: '/assets/work/photomanipulation/Rissala/LOGO.png', title: 'LOGO' },
  ],
  'turning-myself-into-fictional-character': [
    { type: 'image', src: '/assets/work/photomanipulation/Turning my self into fictional carachter/thoroso.jpg', title: 'thoroso' },
    { type: 'video', src: '/assets/work/photomanipulation/Turning my self into fictional carachter/thors.mp4', title: 'thors' },
  ],
  'the-land': [
    { type: 'image', src: '/assets/work/photomanipulation/the land/flaa7.jpg', title: 'flaa7' },
    { type: 'video', src: '/assets/work/photomanipulation/the land/land.mp4', title: 'land' },
  ],
  'tangier-apocalypse': [
    { type: 'image', src: '/assets/work/photomanipulation/Tangier Apocalypse/zombie.jpg', title: 'zombie' },
    { type: 'image', src: '/assets/work/photomanipulation/Tangier Apocalypse/walker.jpg', title: 'walker' },
    { type: 'video', src: '/assets/work/photomanipulation/Tangier Apocalypse/apocalypse.mp4', title: 'apocalypse' },
    { type: 'video', src: '/assets/work/photomanipulation/Tangier Apocalypse/walker.mp4', title: 'walker' },
  ],
};

const techIconMap: Record<string, React.ReactNode> = {
  'After Effects': <SiAdobeaftereffects className="text-purple-400" title="After Effects" size={28} />,
  'Premiere Pro': <SiAdobepremierepro className="text-blue-400" title="Premiere Pro" size={28} />,
  'Photoshop': <SiAdobephotoshop className="text-blue-600" title="Photoshop" size={28} />,
  'Cinema 4D': <SiCinema4D className="text-indigo-400" title="Cinema 4D" size={28} />,
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectMap[projectId || ''];
  const isVideoProject = project && project.type === 'video';
  const isPhotoProject = project && project.type === 'photo';
  const videos = isVideoProject ? (projectVideos[projectId || ''] || []) : [];
  const gallery = isPhotoProject ? (projectGallery[projectId || ''] || []) : [];
  // Use a single index for both
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [poster, setPoster] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsPlaying(true);
    setPoster(undefined);
  }, [galleryIdx, projectId]);

  useEffect(() => {
    if ((isPhotoProject && gallery.length > 0) || (isVideoProject && videos.length > 0)) setGalleryIdx(0);
  }, [projectId, isPhotoProject, isVideoProject]);

  // Extract the first frame as poster for videos
  useEffect(() => {
    if (isVideoProject && videos[galleryIdx]) {
      const video = videoRef.current;
      if (!video) return;
      const handleLoaded = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            setPoster(canvas.toDataURL('image/jpeg'));
          }
        } catch {
          setPoster(undefined);
        }
      };
      video.addEventListener('loadeddata', handleLoaded, { once: true });
      return () => video.removeEventListener('loadeddata', handleLoaded);
    }
  }, [galleryIdx, projectId, isVideoProject, videos]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && isVideoProject && videos[galleryIdx]) {
      if (isPlaying) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [isPlaying, galleryIdx, isVideoProject, videos]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white text-2xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Showcase
        </button>
      </div>
      <div className="max-w-5xl w-full rounded-2xl flex flex-col-reverse md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="flex-1 p-8 flex flex-col justify-center min-w-[280px]">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.label}</h1>
          <h2 className="text-xl text-blue-400 font-semibold mb-2">{project.category}</h2>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="mb-4 flex flex-wrap gap-3 items-center">Technologies used :
            {project.technologies.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-2 px-1 py-1 rounded-full">
                {techIconMap[tech] || <span className="text-xs text-gray-200 font-semibold">{tech}</span>}
              </span>
            ))}
          </div>
          <div className="mb-4 text-gray-400 text-sm">{project.info}</div>
        </div>
        {/* Right: Unified Gallery */}
        <div className="flex-1 p-8 flex flex-col items-center bg-gray-900 min-w-[320px]">
          <div className="w-full flex flex-col items-center">
            {/* Main media area */}
            <div className="relative w-full max-w-lg mx-auto mb-2 flex items-center justify-center">
              {isPhotoProject && gallery.length > 0 && gallery[galleryIdx].type === 'image' && (
                <img
                  src={gallery[galleryIdx].src}
                  alt={gallery[galleryIdx].title}
                  className="w-full h-[60vh] object-contain rounded-xl shadow-lg bg-black"
                />
              )}
              {isPhotoProject && gallery.length > 0 && gallery[galleryIdx].type === 'video' && (
                <video
                  ref={videoRef}
                  src={gallery[galleryIdx].src}
                  className="w-full h-[60vh] object-contain rounded-xl shadow-lg bg-black"
                  controls
                  autoPlay
                  loop
                  playsInline
                  poster={poster || '/assets/logo.svg'}
                  onClick={() => setIsPlaying((p) => !p)}
                  style={{ cursor: 'pointer' }}
                />
              )}
              {isVideoProject && videos.length > 0 && (
                <video
                  ref={videoRef}
                  src={videos[galleryIdx].src}
                  className="w-full h-[60vh] object-contain rounded-xl shadow-lg bg-black"
                  controls
                  autoPlay
                  loop
                  playsInline
                  poster={poster || '/assets/logo.svg'}
                  onClick={() => setIsPlaying((p) => !p)}
                  style={{ cursor: 'pointer' }}
                />
              )}
              {/* Arrows */}
              {(isPhotoProject && gallery.length > 1) && (
                <>
                  <button
                    onClick={() => setGalleryIdx((galleryIdx - 1 + gallery.length) % gallery.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-500 focus:outline-none z-10"
                    aria-label="Previous item"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setGalleryIdx((galleryIdx + 1) % gallery.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-500 focus:outline-none z-10"
                    aria-label="Next item"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              {(isVideoProject && videos.length > 1) && (
                <>
                  <button
                    onClick={() => setGalleryIdx((galleryIdx - 1 + videos.length) % videos.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-500 focus:outline-none z-10"
                    aria-label="Previous video"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setGalleryIdx((galleryIdx + 1) % videos.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-500 focus:outline-none z-10"
                    aria-label="Next video"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {/* Title under main image/video */}
            {isPhotoProject && gallery.length > 0 && (
              <div className="w-full text-center text-l font-semibold mb-2">
                {gallery[galleryIdx].title}
              </div>
            )}
            {isVideoProject && videos.length > 0 && (
              <div className="w-full text-center text-lg  font-semibold mb-2">
                {videos[galleryIdx].title}
              </div>
            )}
            {/* Thumbnail strip for all items */}
            {isPhotoProject && gallery.length > 1 && (
              <div className="flex gap-2 flex-wrap justify-center mt-2">
                {gallery.map((item, idx) => (
                  item.type === 'image' ? (
                    <img
                      key={idx}
                      src={item.src}
                      alt={item.title}
                      className={`h-12 w-12 md:h-20 md:w-20 object-cover rounded-lg border-2 ${galleryIdx === idx ? 'border-blue-500' : 'border-gray-700'} cursor-pointer`}
                      onClick={() => setGalleryIdx(idx)}
                    />
                  ) : (
                    <video
                      key={idx}
                      src={item.src}
                      className={`h-12 w-12 md:h-20 md:w-20 object-cover rounded-lg border-2 ${galleryIdx === idx ? 'border-blue-500' : 'border-gray-700'} cursor-pointer`}
                      onClick={() => setGalleryIdx(idx)}
                      muted
                      loop
                      playsInline
                    />
                  )
                ))}
              </div>
            )}
            {isVideoProject && videos.length > 1 && (
              <div className="flex gap-2 flex-wrap justify-center mt-2">
                {videos.map((item, idx) => (
                  <video
                    key={idx}
                    src={item.src}
                    className={`h-12 w-12 md:h-20 md:w-20 object-cover rounded-lg border-2 ${galleryIdx === idx ? 'border-blue-500' : 'border-gray-700'} cursor-pointer`}
                    onClick={() => setGalleryIdx(idx)}
                    muted
                    loop
                    playsInline
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 