import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface VideoItem {
  src: string;
  poster: string;
  title: string;
}

const rimacVideos: VideoItem[] = [
  {
    src: '/assets/work/motion graphics/RIMAC/leaving the company.mp4',
    poster: '/assets/work/motion graphics/RIMAC/thumbnail.jpg',
    title: 'Leaving the Company',
  },
  {
    src: '/assets/work/motion graphics/RIMAC/Middle easterns.mp4',
    poster: '/assets/work/motion graphics/RIMAC/thumbnail.jpg',
    title: 'Middle Easterns',
  },
  {
    src: '/assets/work/motion graphics/RIMAC/rimac Future.mp4',
    poster: '/assets/work/motion graphics/RIMAC/thumbnail.jpg',
    title: 'Rimac Future',
  },
  {
    src: '/assets/work/motion graphics/RIMAC/HAMMOC.mp4',
    poster: '/assets/work/motion graphics/RIMAC/thumbnail.jpg',
    title: 'HAMMOC',
  },
  {
    src: '/assets/work/motion graphics/RIMAC/the concept one.mp4',
    poster: '/assets/work/motion graphics/RIMAC/thumbnail.jpg',
    title: 'The Concept One',
  },
];

const RimacStory: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const goTo = (idx: number) => {
    setIsVideoLoading(true);
    setCurrent(idx);
  };

  const prev = () => {
    setIsVideoLoading(true);
    setCurrent((c) => (c === 0 ? rimacVideos.length - 1 : c - 1));
  };

  const next = () => {
    setIsVideoLoading(true);
    setCurrent((c) => (c === rimacVideos.length - 1 ? 0 : c + 1));
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      videoRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
    // Auto-play when loaded (muted to comply with browser policies)
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-7xl mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Info Panel */}
          <div className="flex-1 p-6 lg:p-8 bg-gradient-to-br from-gray-800 to-gray-900">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              The Story of Mate Rimac
            </h1>
            <h2 className="text-xl text-blue-400 font-medium mb-6">
              Motion Graphics & Video Editing Showcase
            </h2>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 mb-4">
                This documentary-style project tells the inspiring story of Mate Rimac, founder of Rimac Automobili. 
                Through advanced motion graphics and cinematic editing, we visualized his journey from garage tinkerer 
                to electric hypercar pioneer.
              </p>
              <p className="text-gray-300 mb-4">
                The production involved extensive research, script adaptation, and the creation of custom animated 
                sequences that blend seamlessly with archival footage to create an engaging narrative.
              </p>
              <div className="border-l-2 border-blue-500 pl-4 my-4">
                <p className="text-gray-400 italic">
                  "The motion graphics were essential for visualizing complex technical concepts while maintaining 
                  the emotional throughline of Mate's entrepreneurial journey."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Custom animated technical explanations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Cinematic color grading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Dynamic typography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Seamless archival footage integration</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  After Effects
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  Premiere Pro
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  Photoshop
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  Color Grading
                </span>
              </div>
            </div>
          </div>

          {/* Right: Video Carousel */}
          <div className="flex-1 p-6 lg:p-8 bg-gray-900/50 border-t lg:border-t-0 lg:border-l border-gray-700 flex flex-col">
            <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-xl overflow-hidden bg-black">
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              <video
                ref={videoRef}
                key={rimacVideos[current].src}
                controls
                poster={rimacVideos[current].poster}
                className={`w-full h-full object-contain ${isVideoLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
                onLoadedData={handleVideoLoaded}
                onCanPlayThrough={handleVideoLoaded}
                onError={() => setIsVideoLoading(false)}
              >
                <source src={rimacVideos[current].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Navigation Arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white rounded-full p-2 shadow hover:bg-blue-500 transition-colors z-10"
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white rounded-full p-2 shadow hover:bg-blue-500 transition-colors z-10"
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Video Title */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">
                {rimacVideos[current].title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Clip {current + 1} of {rimacVideos.length}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {rimacVideos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-blue-500 scale-110' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Go to clip ${idx + 1}: ${rimacVideos[idx].title}`}
                />
              ))}
            </div>

            {/* Video Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Metadata */}
      <div className="w-full max-w-7xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Project Details</h3>
          <ul className="space-y-3">
            <li>
              <span className="block text-sm text-gray-400">Category</span>
              <span className="text-white">Motion Graphics Documentary</span>
            </li>
            <li>
              <span className="block text-sm text-gray-400">Client</span>
              <span className="text-white">YouTube Channel</span>
            </li>
            <li>
              <span className="block text-sm text-gray-400">Duration</span>
              <span className="text-white">12 minutes</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">My Role</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Motion Graphics Design</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Video Editing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Color Grading</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Sound Design</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Impact</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>500K+ YouTube views</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Featured on Rimac social media</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Used in educational presentations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RimacStory;