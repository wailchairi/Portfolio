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
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/the+Story+of+Mate+Rimac',
    category: 'Motion Graphics',
    label: 'The Story of Mate Rimac',
    description: 'A documentary-style YouTube project about Mate Rimac, featuring advanced motion graphics and video editing. Note: Script and voiceover by the client (Alex).',
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop'],
    info: '2022 | Professional Work | Duration: 12 min | Role: Video Creation (Motion Graphics, Editing, Color Grading)',
    type: 'video',
  },
  'tipping-is-a-scam': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Tipping is a scam',
    category: 'Motion Graphics',
    label: 'Tipping is a Scam',
    description: 'A documentary-style YouTube project analyzing tipping culture, using motion graphics to visually explain the concept. Note: Script and voiceover by client (Alex).',
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop'],
    info: '2022 | Professional Work | Duration: 5 min | Role: Motion Graphics & Editing',
    type: 'video',
  },
  'personal-reels': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/personal reels',
    category: 'Video Editing',
    label: 'Personal Reels',
    description: 'A collection of my best personal adventure edits, focusing on cinematic storytelling through sequencing and subtle details. These reel prioritize authentic mountain hiking experiences over trendy hooks, using purely visual narration (no voiceover).',
    technologies: ['Premiere Pro', 'After Effects'],
    info: 'Personal Work | Duration: ≤1 min each | Role: Editing & Color Grading',
    type: 'video',
  },
  'talent': {
    
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Talent - الموهبة',
    category: 'Video Editing',
    label: 'Talent - الموهبة',
    description: 'A documentary-style edit featuring creative cuts and visual storytelling. Collaborated with Ayoub Essafi on script development, while handling video editing, smart transitions, and cinematography. The concept plays with youthful themes while showcasing professional editing techniques.',
    technologies: ['Premiere Pro', 'After Effects'],
    info: '2020 | Personal Work | Duration: 15 min | Role: Video Editing & Cinematography',
    type: 'video',
  },
  'shorts': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/shorts',
    category: 'Video Editing',
    label: 'Shorts',
    description: 'A curated selection of short-form content created for HighKey Agency clients during my 10-month tenure. Edited 100+ reels (a limited selection shown here), featuring compelling storytelling for high-profile speakers.',
    technologies: ['Premiere Pro', 'After Effects'],
    info: '2023-2024 | Client: HighKey Agency | Duration: 40s-1min each | Role: Editing & Storytelling',
    type: 'video',
  },
  'animated-drawing': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Animated Drawing',
    category: 'Visual Effects',
    label: 'Animated Drawing',
    description: 'A VFX exploration blending hand-drawn animation with realistic compositing techniques. Features original artwork brought to life through frame-by-frame animation and advanced digital integration.',
    technologies: ['After Effects', 'Photoshop'],
    info: '2024 | Personal Project | Duration: 10 sec | Role: Animation & VFX Compositing',
    type: 'video',
  },
  'attack-on-titan': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Attack on Titan',
    category: 'Visual Effects',
    label: 'Turning my self into the Beast titan',
    description: 'An ambitious VFX project transforming myself into an Attack on Titan character through digital compositing and animation. Developed over several months, this involved mastering new techniques to achieve authentic anime-style effects.',
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop'],
    info: '2023 | Personal Project | Duration: 40s | Role: VFX & Animation',
    type: 'video',
  },
  // Added photo projects
  'realistic-conan': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Realistic Conan',
    category: 'Photomanipulation',
    label: 'Realistic Conan',
    description: 'A decade-old photomanipulation project reimagining the Conan anime character with hyper-realistic details, showcasing early mastery of digital artistry.',
    technologies: ['Photoshop'],
    info: '2016 | Personal Project | Role: Digital Photomanipulation',
    type: 'photo',
  },
  'turning-salah-into-zombie': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Turning Salah into Zombie',
    category: 'Photomanipulation',
    label: 'Zombie Transformation',
    description: 'A photorealistic zombie makeover project featuring a full character transformation of my friend Salah, created through advanced digital manipulation techniques.',
    technologies: ['Photoshop'],
    info: '2020 | Personal Project | Role: Digital Character Transformation',
    type: 'photo',
  },
  'tod-realistic': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Tod realistic',
    category: 'Photomanipulation',
    label: 'Realistic Todd Chavez',
    description: 'A photorealistic character redesign transforming the BoJack Horseman animated character into a lifelike human version, while preserving the original voice actors likeness.',
    technologies: ['Photoshop'],
    info: '2020 | Personal Project | Role: Digital Character Design',
    type: 'photo',
  },
  'samurai-jack-realistic': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Samurai jack realistic',
    category: 'Photomanipulation',
    label: 'Realistic Samurai Jack',
    description: 'A hyper-realistic character reimagining of the iconic Samurai Jack, blending anime aesthetics with photorealistic digital painting techniques.',
    technologies: ['Photoshop'],
    info: '2020 | Personal Project | Role: Digital Character Design',
    type: 'photo',
  },
  'turning-bilal-into-eren': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Turning Bilal into Eren',
    category: 'Photomanipulation',
    label: 'Turning Bilal into Eren',
    description: 'A photomanipulation project transforming a person into Eren Yeager.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'aji': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Aji',
    category: 'Photomanipulation',
    label: 'Aji',
    description: 'A photomanipulation project featuring an Aji character.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'van-gogh': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Van gogh',
    category: 'Photomanipulation',
    label: 'Van Gogh',
    description: 'A photomanipulation project recreating a Van Gogh painting.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'rissala': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Rissala',
    category: 'Photomanipulation',
    label: 'Rissala',
    description: 'A photomanipulation project featuring a Rissala character.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'turning-myself-into-fictional-character': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Turning my self into fictional carachter',
    category: 'Photomanipulation',
    label: 'Turning Myself into Fictional Character',
    description: 'A photomanipulation project transforming a person into a fictional character.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'the-land': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/the land',
    category: 'Photomanipulation',
    label: 'The Land',
    description: 'A photomanipulation project depicting a landscape.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'tangier-apocalypse': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Tangier Apocalypse',
    category: 'Photomanipulation',
    label: 'Tangier Apocalypse',
    description: 'A photomanipulation project depicting an apocalyptic scene in Tangier.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Photomanipulation',
    type: 'photo',
  },
  'poster-design': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design',
    category: 'Graphic Design',
    label: 'Poster Design',
    description: 'A graphic design project for a poster.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'tshits': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Tshits',
    category: 'Graphic Design',
    label: 'Tshits',
    description: 'A graphic design project for a Tshits (a type of Arabic bread).',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'invitation': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Invitation',
    category: 'Graphic Design',
    label: 'Invitation',
    description: 'A graphic design project for an invitation.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'certificate': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Certificate',
    category: 'Graphic Design',
    label: 'Certificate',
    description: 'A graphic design project for a certificate.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Graphic Design',
    type: 'photo',
  },
  'digital-art': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Digital Art',
    category: 'Art',
    label: 'Digital Art',
    description: 'A digital art project featuring a death scene.',
    technologies: ['Photoshop'],
    info: 'Personal Project | Role: Art',
    type: 'photo',
  },
  'hand-drawn-art': {
    folder: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/HAnd drawn art',
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
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/the+Story+of+Mate+Rimac/HAMMOC.mp4', title: 'HAMMOC' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/the+Story+of+Mate+Rimac/leaving+the+company.mp4', title: 'Leaving the Company' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/the+Story+of+Mate+Rimac/Middle+easterns.mp4', title: 'Middle Easterns' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/the+Story+of+Mate+Rimac/rimac+Future.mp4', title: 'Rimac Future' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/the+Story+of+Mate+Rimac/the+concept+one.mp4', title: 'The Concept One' },
  ],
  'tipping-is-a-scam': [
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Big+mistake.mp4', title: 'Big+Mistake' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/unethical+practice.mp4', title: 'Unethical+Practice' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/explaining.mp4', title: 'Explaining' },
  ],
  'personal-reels': [
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/taloussis.mp4', title: 'Taloussis' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/كلتي.mp4', title: 'كلتي' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/into+the+wild.mp4', title: 'Into+the+Wild' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/حافة+زلطان.mp4', title: 'حافة+زلطان' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/the+sunset.mp4', title: 'The+Sunset' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/الصابة المنقولة.mp4', title: 'الصابة المنقولة' },
  ],
  'talent': [
      { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Intro.mp4', title: 'Intro' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/The+main+Montage.mp4', title: 'The+Main+Montage' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/Interview.mp4', title: 'Interview' },
  ],
  'shorts': [
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/9.mp4', title: '9' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/4+-+I+ran+into+a+burning+building-.mp4', title: '4+-+I+ran+into+a+burning+building-' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/27-biggest+success+story-.mp4', title: '27-biggest+success+story-' },
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/23-don_t+overthink+your+goals.mp4', title: '23-don_t+overthink+your+goals' },
  ],
  'animated-drawing': [
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/move+soul.mp4', title: 'Move+Soul' },
  ],
  'attack-on-titan': [
    { src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/beast.mp4', title: 'Beast' },
  ],
};

const projectGallery: Record<string, { type: 'image' | 'video'; src: string; title: string }[]> = {
  // Graphic Design
  'poster-design': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/بلحة.jpg', title: 'بلحة' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/pos.jpg', title: 'pos' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/star.jpg', title: 'star' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/الحساب+الذهني+copy.jpg', title: 'الحساب+الذهني' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/bassma+copyq.jpg', title: 'bassma' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/printing.jpg', title: 'printing' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/ilaan+pics.jpg', title: 'ilaan+pics' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/omyaa.jpg', title: 'omyaa' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/music.jpg', title: 'music' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/7afl+copy.jpg', title: '7afl' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/black.jpg', title: 'black' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/IMG-20180603-WA0005.jpg', title: 'IMG-20180603-WA0005' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/stito.jpg', title: 'stitto' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/ilan+copy.jpg', title: 'ilan' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/graphic+design/Poster+Design/hadkourt.jpg', title: 'hadkourt' },
  ],
  'tshits': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/good+friends.png', title: 'good+friends' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/pink+baseball.png', title: 'pink+baseball' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/women.png', title: 'women' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/baseball+copy.png', title: 'baseball+copy' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/guys.png', title: 'guys' },
  ],
  'invitation': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/daawa.jpg', title: 'daawa' },
  ],
  'certificate': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/ajyal+certificat.jpg', title: 'ajyal+certificat' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/certificat.jpg', title: 'certificat' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/شهادة.jpg', title: 'شهادة' },
  ],
  // Art
  'digital-art': [
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/caveman.mp4', title: 'caveman' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/wailverine.mp4', title: 'wailverine' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/death.jpg', title: 'death' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/old.jpg', title: 'old' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/cave+tone.jpg', title: 'cave+tone' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/dream.jpg', title: 'dream' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/booy.jpg', title: 'booy' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/subconsious+.jpg', title: 'subconsious' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/spirit+of+the+mountain.jpg', title: 'spirit+of+the+mountain' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/waillverine.jpg', title: 'waillverine' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/me.jpg', title: 'me' },
  ],
  'hand-drawn-art': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/20190519_132505+copy.jpg', title: '20190519_132505' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/DSC05294.JPG', title: 'DSC05294' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/rollo.JPG', title: 'rollo' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/anoir+.jpg', title: 'anoir' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/cave+me.jpg', title: 'cave+me' },
  ],
  // photomanipulation
  'realistic-conan': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/conan.jpg', title: 'conan' },
  ],
  'turning-salah-into-zombie': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/soloh.jpg', title: 'soloh' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/salah.mp4', title: 'salah' },
  ],
  'tod-realistic': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/tod.jpg', title: 'tod' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/tod.mp4', title: 'tod' },
  ],
  'samurai-jack-realistic': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/samurai+jack+copy.png', title: 'samurai+jack+copy' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/samurai+jack.mp4', title: 'samurai+jack' },
  ],
  'turning-bilal-into-eren': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/irin.jpg', title: 'irin' },
  ],
  'aji': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/aji+recruit.jpg', title: 'aji+recruit' },
  ],
  'van-gogh': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/mahgokh.jpg', title: 'mahgokh' },
  ],
  'rissala': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/زورق+الرسالة.jpg', title: 'زورق+الرسالة' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/LOGO.png', title: 'LOGO' },
  ],
  'turning-myself-into-fictional-character': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/thoroso.jpg', title: 'thoroso' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/thors.mp4', title: 'thors' },
  ],
  'the-land': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/flaa7.jpg', title: 'flaa7' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/land.mp4', title: 'land' },
  ],
  'tangier-apocalypse': [
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/zombie.jpg', title: 'zombie' },
    { type: 'image', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/walker.jpg', title: 'walker' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/apocalypse.mp4', title: 'apocalypse' },
    { type: 'video', src: 'https://f005.backblazeb2.com/file/my-portfolio-assets/Portfo/walker.mp4', title: 'walker' },
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