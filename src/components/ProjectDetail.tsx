import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro, SiCinema4D, SiAdobeillustrator } from 'react-icons/si';

// Map projectId to folder and info
export const projectMap: Record<string, {
  category: string;
  label: string;
  description: string;
  technologies: string[];
  info: string;
  type?: 'photo' | 'video'; // Added type for photo projects
}> = {
  'the-story-of-mate-rimac': {
    category: 'Motion Graphics',
    label: 'The Story of Mate Rimac',
    description: 'A documentary-style YouTube project about Mate Rimac, featuring advanced motion graphics and video editing. Note: Script and voiceover by the client (Alex).',
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop'],
    info: '2022 | Professional Work | Duration: 12 min | Role: Video Creation (Motion Graphics, Editing, Color Grading)',
    type: 'video',
  },
  'tipping-is-a-scam': {
    category: 'Motion Graphics',
    label: 'Tipping is a Scam',
    description: 'A documentary-style YouTube project analyzing tipping culture, using motion graphics to visually explain the concept. Note: Script and voiceover by client (Alex).',
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop'],
    info: '2022 | Professional Work | Duration: 5 min | Role: Motion Graphics & Editing',
    type: 'video',
  },
  'personal-reels': {
    category: 'Video Editing',
    label: 'Personal Reels',
    description: 'A collection of my best personal adventure edits, focusing on cinematic storytelling through sequencing and subtle details. These reel prioritize authentic mountain hiking experiences over trendy hooks, using purely visual narration (no voiceover).',
    technologies: ['Premiere Pro', 'After Effects'],
    info: 'Personal Work | Duration: ≤1 min each | Role: Editing & Color Grading',
    type: 'video',
  },
  'talent': {
    category: 'Video Editing',
    label: 'Talent - الموهبة',
    description: 'A documentary-style edit featuring creative cuts and visual storytelling. Collaborated with Ayoub Essafi on script development, while handling video editing, smart transitions, and cinematography. The concept plays with youthful themes while showcasing professional editing techniques.',
    technologies: ['Premiere Pro', 'After Effects'],
    info: '2020 | Personal Work | Duration: 15 min | Role: Video Editing & Cinematography',
    type: 'video',
  },
  'shorts': {
    category: 'Video Editing',
    label: 'Shorts',
    description: 'A curated selection of short-form content created for HighKey Agency clients during my 10-month tenure. Edited 100+ reels (a limited selection shown here), featuring compelling storytelling for high-profile speakers.',
    technologies: ['Premiere Pro', 'After Effects'],
    info: '2023-2024 | Client: HighKey Agency | Duration: 40s-1min each | Role: Editing & Storytelling',
    type: 'video',
  },
  'animated-drawing': {
    category: 'Visual Effects',
    label: 'Animated Drawing',
    description: 'A VFX exploration blending hand-drawn animation with realistic compositing techniques. Features original artwork brought to life through visual effects animation and advanced digital integration.',
    technologies: ['After Effects', 'Photoshop'],
    info: '2024 | Personal Project | Duration: 10 sec | Role: Animation & VFX Compositing',
    type: 'video',
  },
  'attack-on-titan': {
    category: 'Visual Effects',
    label: 'Turning my self into the Beast titan',
    description: 'An ambitious VFX project transforming myself into an Attack on Titan character through digital compositing and animation. Developed over several months, this involved mastering new techniques to achieve authentic anime-style effects.',
    technologies: ['After Effects', 'Premiere Pro', 'Photoshop'],
    info: '2023 | Personal Project | Duration: 40s | Role: VFX & Animation',
    type: 'video',
  },
  // Added photo projects
  'realistic-conan': {
    category: 'Photomanipulation',
    label: 'Realistic Conan',
    description: 'A decade-old photomanipulation project reimagining the Conan anime character with hyper-realistic details, showcasing early mastery of digital artistry.',
    technologies: ['Photoshop'],
    info: '2016 | Personal Project | Role: Digital Photomanipulation',
    type: 'photo',
  },
  'turning-salah-into-zombie': {
    category: 'Photomanipulation',
    label: 'Zombie Transformation',
    description: 'A photorealistic zombie makeover project featuring a full character transformation of my friend Salah, created through advanced digital manipulation techniques.',
    technologies: ['Photoshop'],
    info: '2020 | Personal Project | Role: Digital Character Transformation',
    type: 'photo',
  },
  'tod-realistic': {
    category: 'Photomanipulation',
    label: 'Realistic Todd Chavez',
    description: 'A photorealistic character redesign transforming the BoJack Horseman animated character into a lifelike human version, while preserving the original voice actors likeness.',
    technologies: ['Photoshop'],
    info: '2020 | Personal Project | Role: Digital Character Design',
    type: 'photo',
  },
  'samurai-jack-realistic': {
    category: 'Photomanipulation',
    label: 'Realistic Samurai Jack',
    description: 'A hyper-realistic character reimagining of the iconic Samurai Jack, blending anime aesthetics with photorealistic digital painting techniques.',
    technologies: ['Photoshop'],
    info: '2020 | Personal Project | Role: Digital Character Design',
    type: 'photo',
  },
  'turning-bilal-into-eren': {
    category: 'Photomanipulation',
    label: 'Turning Bilal into Eren',
    description: 'A photomanipulation project transforming a portrait of Bilal into Eren Yeager from Attack on Titan, capturing the character’s iconic look and intensity.',
    technologies: ['Photoshop'],
    info: '2022 | Personal Project | Role: Photomanipulation Artist',
    type: 'photo',
  },
  'aji': {
    category: 'Photomanipulation',
    label: 'Aji Club Poster',
    description: 'A cinematic-style recruitment poster using photomanipulation, designed to announce Aji Club s new member intake with dramatic, movie-like visuals.',
    technologies: ['Photoshop'],
    info: '2023 | Professional Project | Role: Photomanipulation Artist',
    type: 'photo',
  },
  'van-gogh': {
    category: 'Photomanipulation',
    label: 'Van Gogh Reimagined',
    description: 'A creative photomanipulation blending my facial features into Van Gogh\'s iconic painting style, transforming the artwork to convey a unique personal narrative and artistic vision.',
    technologies: ['Photoshop'],
    info: '2022 | Personal Project | Role: Digital Artist & Photomanipulation Specialist',
    type: 'photo',
  },
  'rissala': {
    category: 'Photomanipulation',
    label: 'Rissala Ship',
    description: 'A conceptual photomanipulation bringing the Rissala organization\'s logo to life, depicting their mission through a symbolic ship delivering messages of hope. The artwork visualizes children surviving childhood as messengers carrying society-changing ideas across turbulent waters.',
    technologies: ['Photoshop'],
    info: '2016 | Professional Project | Role: Concept Artist & Photomanipulation Specialist',
    type: 'photo',
  },
  'turning-myself-into-fictional-character': {
    category: 'Photomanipulation',
    label: 'Turning Myself into Fictional Character',
    description: 'A photomanipulation project transforming my portrait into Thors, the legendary warrior from Vinland Saga, while preserving the anime\'s distinct art style and the character\'s noble demeanor.',
    technologies: ['Photoshop'],
    info: '2021 | Personal Project | Role: Digital Artist & Photomanipulation Specialist',
    type: 'photo',
  },
  'the-land': {
    category: 'Photomanipulation',
    label: 'Horizons of Imagination',
    description: 'A surreal photomanipulation compositing a self-portrait from my rooftop into a breathtaking fantasy landscape, showcasing both creative vision and technical execution in digital artistry.',
    technologies: ['Photoshop'],
    info: '2022 | Personal Project | Role: Digital Artist & Photocomposition Specialist',
    type: 'photo',
  },
  'tangier-apocalypse': {
    category: 'Photomanipulation',
    label: 'Tangier Apocalypse',
    description: 'An ambitious photomanipulation transforming a famous Tangier landmark into a post-apocalyptic wasteland, featuring myself as a survivor. This complex project required complete environmental redesign including: atmospheric lighting reconstruction, architectural modifications, time-of-day transformation, and seamless integration of zombie characters and props while maintaining photorealistic quality.',
    technologies: ['Photoshop'],
    info: '2020 | Personal Project | Role: Digital Environment Artist & Photocomposition Specialist', 
    type: 'photo',
  },
  'poster-design': {
    category: 'Graphic Design',
    label: 'Poster Design',
    description: 'A collection of professional poster designs created for diverse clients, delivering visually compelling solutions tailored to each project\'s unique requirements and target audiences.',
    technologies: ['Photoshop' ,'Illustrator'],
    info: '2018-Present | Professional Projects | Role: Graphic Designer',
    type: 'photo',
  },
  'T-Shirts': {
    category: 'Graphic Design',
    label: 'T-Shirt Design ',
    description: 'A complete line of original T-shirt designs created for a startup clothing brand, focusing on marketable designs that align with the client\'s brand identity and target audience.',
    technologies: ['Photoshop'],
    info: '2020 | Freelance Project | Role: Apparel Graphic Designer',
    type: 'photo',
  },
  'invitation': {
    category: 'Graphic Design',
    label: 'Invitation Design',
    description: 'An elegant invitation suite designed for Rissala Organization, combining sophisticated typography with meaningful visual elements that reflect the organization\'s mission and values.',
    technologies: ['Photoshop'],
    info: '2022 | Professional PRoject | Role: Graphic Designer',
    type: 'photo',
  },
  'certificate': {
    category: 'Graphic Design',
    label: 'Certificate Design',
    description: 'A collection of custom-designed certificates for various clients, creating elegant and official-looking documents tailored to each organization\'s branding and recognition needs.',
    technologies: ['Photoshop', 'Illustrator'],
    info: '2020-Present | Professional PRoject | Role: Graphic Designer',
    type: 'photo',
  },
  'digital-art': {
    category: 'Art',
    label: 'Digital Art',
    description: 'A curated collection of original digital paintings showcasing technical mastery in photorealistic rendering and advanced compositing techniques, developed through personal artistic exploration.',
    technologies: ['Photoshop'],
    info: '2020-Present | Personal Project | Role: Digital Artist',
    type: 'photo',
  },
  'hand-drawn-art': {
    category: 'Art',
    label: 'Traditional Art',
    description: 'A series of hand-drawn artworks created as personal artistic explorations, showcasing foundational drawing skills and creative concepts developed through traditional media.',
    technologies: [],
    info: '2019-present | Personal Project | Role: Traditional Artist',
    type: 'photo',
  },
};

// Hardcoded video files for each project (in real app, automate this)
const projectVideos: Record<string, { src: string; title: string }[]> = {
  'the-story-of-mate-rimac': [
    { src: 'https://drive.google.com/file/d/1HA9b0WrVSliJUqMhGs8juo86NksYetYA/preview', title: 'The Concept One begining' },
    { src: 'https://drive.google.com/file/d/1g1Wv4H93hARyqfWLxe5I1fL4scMumqgz/preview', title: 'Richard Hammond Accident' },
    { src: 'https://drive.google.com/file/d/1yBlA0kn-UP5IgAMJPyRVtFL2Siew-Mqs/preview', title: 'Leaving the Company' },
    { src: 'https://drive.google.com/file/d/1DVlexPpwEJxmZMeKbWoljj8YI6IrkQ4m/preview', title: 'Middle Easterns' },
    { src: 'https://drive.google.com/file/d/1tiwr9i_wZ6GgIMcBiJzHp5AdhRqsjQuO/preview', title: 'Rimac Future' },
  ],
  'tipping-is-a-scam': [
    { src: 'https://drive.google.com/file/d/1sJC56E1aEuJZdK26kAM6wvaBwe_ohC6N/preview', title: 'Big Mistake' },
    { src: 'https://drive.google.com/file/d/1AZfEnW2vpYbNv01qfpqxBSe_LJfcuSAs/preview', title: 'Explaining' },
    { src: 'https://drive.google.com/file/d/1ogpN_bKZXoqGMO7aFdhRAJmj9LDgT2LO/preview', title: 'Unethical+Practice' },
  ],
  'personal-reels': [
    { src: 'https://drive.google.com/file/d/1tKgQ6bHiED-q7uPH_YGDr0M5onDgNxzd/preview', title: 'Taloussis' },
    { src: 'https://drive.google.com/file/d/12_RQFWhCOE6KvTn3VJHCSi97JSX0gWCu/preview', title: 'كلتي' },
    { src: 'https://drive.google.com/file/d/1MP3TNveFuv35XmtuC1EJubM_WfSVRy_F/preview', title: 'Into the Wild' },
    { src: 'https://drive.google.com/file/d/1XmHkEJgC4nK_zSBorVWrEKqKP8OcUXoT/preview', title: 'حافة زلطان' },
    { src: 'https://drive.google.com/file/d/1lcPjcGmdj1SocNDxl3tUQn8la1WG0xJC/preview', title: 'The Sunset' },
    { src: 'https://drive.google.com/file/d/10zuJLm88pwKd2n5XI6HnmxguQ7ckv5QM/preview', title: 'Fahss Lemhar' },
  ],
  'talent': [
      { src: 'https://drive.google.com/file/d/1a_2JxVKeUlbM28u0Y046m75cqVa_XqxM/preview', title: 'Intro' },
      { src: 'https://drive.google.com/file/d/1QK42DufC1865goktfzlEVksnKjg8XG4g/preview', title: 'The Main Montage' },
      { src: 'https://drive.google.com/file/d/1frYpJ4R9ACq06Mkj3MWUdL0-lb3j8A2H/preview', title: 'Interview' },
  ],
  'shorts': [
    { src: 'https://drive.google.com/file/d/1WNXWeMGQ-KZ95MrKdqifDoK8QRmvGT3L/preview', title: 'Journaling' },
    { src: 'https://drive.google.com/file/d/1sXTebg3g-CRKlnVob5qpqt7HRIh4OR30/preview', title: 'Tomo - i ran into a burning building' },
    { src: 'https://drive.google.com/file/d/1b7zAeUFabylrjx1oKaP4eLbWlZrd3k4Q/preview', title: 'biggest success story' },
    { src: 'https://drive.google.com/file/d/1nCBsRqEXbVqigGmXLLqHkK_QIfVvyvoi/preview', title: 'don_t overthink your goals' },
  ],
  'animated-drawing': [
    { src: 'https://drive.google.com/file/d/1967iodGhGQQa_6mV1UBHftf1s-D05BHJ/preview', title: 'Whispers Of The Mountain' },
  ],
  'attack-on-titan': [
    { src: 'https://drive.google.com/file/d/1hcw3gZDgTpurpHGzF6HaetXoVlFn9dsc/preview', title: 'Beast' },
  ],
};

const projectGallery: Record<string, { type: 'image' | 'video'; src: string; title: string }[]> = {
  // Graphic Design
  'poster-design': [
    { type: 'image', src: 'https://drive.google.com/file/d/1woG778fvvj4fgAmyg6lRrwVL1NbtlIi9/preview', title: 'منبع الأمل' },
    { type: 'image', src: 'https://drive.google.com/file/d/1ozJl9Zf9an51gG1I-PAJX3MxWQ-FsUP_/preview', title: 'مسابقة رمضانية' },
    { type: 'image', src: 'https://drive.google.com/file/d/1U8xJdRlKqoq2qpl6JnRb4mGhR1mwqjkQ/preview', title: 'رحلة' },
    { type: 'image', src: 'https://drive.google.com/file/d/1XvRmxgF6W7ZP5CYqKAMUktKzEdM7PwWB/preview', title: 'Store poster' },
    { type: 'image', src: 'https://drive.google.com/file/d/1D5mMQ98QViW5oFhwaM--35xiMdAZT4RM/preview', title: 'الحساب الذهني' },
    { type: 'image', src: 'https://drive.google.com/file/d/1-uIuY1Ri7HlyeIE54CPyDRsullqMSf9t/preview', title: 'بصمة' },
    { type: 'image', src: 'https://drive.google.com/file/d/1yZ1NhtRr5Xe9dt3rwLG9hiEUew_FcuFC/preview', title: 'CGC' },
    { type: 'image', src: 'https://drive.google.com/file/d/1F5NxplbVM48KIdI2Ynn-muANqxbdfUep/preview', title: 'الحفظ والتجويد' },
    { type: 'image', src: 'https://drive.google.com/file/d/1M6DhJkuJ-FcOLtaajxFSm7CqDw0dk60C/preview', title: 'محو الأمية' },
    { type: 'image', src: 'https://drive.google.com/file/d/1VS_1y2RfOwLg7JaIbQ3gPqqQI-ESZiwM/preview', title: 'نادي الموسيقى' },
    { type: 'image', src: 'https://drive.google.com/file/d/1rUKN5Ss7yHjuYdZmY9tYKSxRcwSrLIww/preview', title: 'الحفل الختامي' },
    { type: 'image', src: 'https://drive.google.com/file/d/10HpTLDA1fqva1vREHfDzytj50jxjLCAP/preview', title: 'AJI' },
    { type: 'image', src: 'https://drive.google.com/file/d/1EY6AMuL1xmxKjOzEhfNcpL_pE5EBfp9L/preview', title: 'نادي المسرح' },
    { type: 'image', src: 'https://drive.google.com/file/d/1xHtZWX4ErlXjCGYJ5c29C9zcKcX_bcg_/preview', title: 'كيف تكتب أول رواية لك' },
    { type: 'image', src: 'https://drive.google.com/file/d/1IzIJjtlim22FEJZex6i8AVya1sFU0SzW/preview', title: 'مركز خطوة' },
  ],
  'T-Shirts': [
    { type: 'image', src: 'https://drive.google.com/file/d/13w-7Y--BTbBOqbSEiDe301q-Pzp4o5fK/preview', title: 'good friends' },
    { type: 'image', src: 'https://drive.google.com/file/d/17RJRdxNjMKa6ljFk19HvcqJLCNOZKMHF/preview', title: 'pink baseball' },
    { type: 'image', src: 'https://drive.google.com/file/d/1_9G4Je-IC5IOxo3EN7CYFJg_n0605ewx/preview', title: 'women' },
    { type: 'image', src: 'https://drive.google.com/file/d/1pd-l8JfdI4CoennI7nfhFim--FSKsCZP/preview', title: 'baseball' },
    { type: 'image', src: 'https://drive.google.com/file/d/1YCKW3UpZtGE8qTQVDB_PtRYv6gTqxeyU/preview', title: 'guys' },
  ],
  'invitation': [
    { type: 'image', src: 'https://drive.google.com/file/d/1zLAVZy1MCLeOrjpXwarvcFD4HfOXP0gX/preview', title: 'Invitation' },
  ],
  'certificate': [
    { type: 'image', src: 'https://drive.google.com/file/d/166d1PY4VCLfOSwWHqbfYZolff0q71m45/preview', title: 'ajyal certificat' },
    { type: 'image', src: 'https://drive.google.com/file/d/1M6RMSc-QR3V5a9kW55-wbukX0_RF7-Zy/preview', title: 'Rissal certificat' },
    { type: 'image', src: 'https://drive.google.com/file/d/1fpqjdEb37WkwBwFV5QFBAbLyL0kS8XOB/preview', title: 'Bara2a certificat' },
  ],
  // Art
  'digital-art': [
    { type: 'video', src: 'https://drive.google.com/file/d/1Idt0gpPewNxvdQ72hPbK74IUgaIzD1w4/preview', title: 'caveman Process' },
    { type: 'image', src: 'https://drive.google.com/file/d/11QbdNo2M3DKpPcZSLZQMLfvrHA8qwOSk/preview', title: 'cavetone' },
    { type: 'video', src: 'https://drive.google.com/file/d/1e7GHdIl7AL8tUCUnlTLb-AVSGCSx7PmI/preview', title: 'wailverine' },
    { type: 'image', src: 'https://drive.google.com/file/d/1KCJ1Ng0b_namINRjGi8TvMGI4M01-L8X/preview', title: 'waillverine' },
    { type: 'image', src: 'https://drive.google.com/file/d/1cVKt-P5G14g9NH31UxE5TSAfIYZ4KzV3/preview', title: 'death' },
    { type: 'image', src: 'https://drive.google.com/file/d/14qq_Pc6ECcWuIhukbqWZXNxGwlW4XCd3/preview', title: 'old Man' },
    { type: 'image', src: 'https://drive.google.com/file/d/11D4hMkVVrEnLuoISldNjWyKJeOzvoA_H/preview', title: 'A land' },
    { type: 'image', src: 'https://drive.google.com/file/d/1sAQ6fZqQOenEhCrFsR3wSDciUPV5rq45/preview', title: 'Viking' },
    { type: 'image', src: 'https://drive.google.com/file/d/1Q4qeKgyIB1YZXh5V6pER_Ns5Nhys0xTc/preview', title: 'subconsious' },
    { type: 'image', src: 'https://drive.google.com/file/d/1Kt_ntkcMcOmrfuSdcp7w0djskqUMhAFV/preview', title: 'Spirit Of The Mountain' },
    { type: 'image', src: 'https://drive.google.com/file/d/1As4YAaGHssqfFjLyfha-nSS8fITvHMLB/preview', title: 'caricature' },
  ],
  'hand-drawn-art': [
    { type: 'image', src: 'https://drive.google.com/file/d/1dKclphrz0oqFEh3VAdZxN6Dn2OrWsVQe/preview', title: 'A Cat' },
    { type: 'image', src: 'https://drive.google.com/file/d/1owjJB9yRzQrAWfU6BiaDMys8DKiEgN37/preview', title: 'A flower' },
    { type: 'image', src: 'https://drive.google.com/file/d/1UucHutVIg--guV8irRIu-hS_D9edUC-2/preview', title: 'rollo panting' },
    { type: 'image', src: 'https://drive.google.com/file/d/1rDlKcPyWXA7pdaeJeH4MbAM44RpgULIO/preview', title: 'anoir painting' },
    { type: 'image', src: 'https://drive.google.com/file/d/11HwBs7iiJ94fMkR9wEfBjKQy3k2JKR1x/preview', title: 'mowgli' },
  ],
  // photomanipulation
  'realistic-conan': [
    { type: 'image', src: 'https://drive.google.com/file/d/1GQSzepiJ_p4S8RCJl1TYFEwXlt75n5IT/preview', title: 'Detective Conan Realistic' },
  ],
  'turning-salah-into-zombie': [
    { type: 'image', src: 'https://drive.google.com/file/d/1cz035rRCY546NoLp1_8pUKTUInTqa4Fj/preview', title: 'Salah as a Zombie' },
    { type: 'video', src: 'https://drive.google.com/file/d/1H9dLvGhj_0YXZaPeaF6MVZ4fbXjnTphp/preview', title: 'the screen Record of Salah' },
  ],
  'tod-realistic': [
    { type: 'image', src: 'https://drive.google.com/file/d/1V3DJ4HBPTcsmIQ1Rrz8I1Y9nGvVRKwNG/preview', title: 'tod' },
    { type: 'video', src: 'https://drive.google.com/file/d/1LiRG8ccV_OUIKZNPknwKiglyJfRhS1M4/preview', title: 'The full process' },
  ],
  'samurai-jack-realistic': [
    { type: 'image', src: 'https://drive.google.com/file/d/1A3lfMkLHou94s-GIlck33_28PM_bNZeH/preview', title: 'samurai jack' },
    { type: 'video', src: 'https://drive.google.com/file/d/1YKHpHHZEepksv8Xa0H99XGyyENEEEny7/preview', title: 'The full process' },
  ],
  'turning-bilal-into-eren': [
    { type: 'image', src: 'https://drive.google.com/file/d/1p7pEi50oTvpHr5qtRKusNB-cxJJrJzDF/preview', title: 'Bilal as Eren yeager' },
    { type: 'image', src: 'https://drive.google.com/file/d/1fYzqtdn7XWYMPaawhIXmk-h13aQz_9bs/preview', title: 'The before image' },
  ],
  'aji': [
    { type: 'image', src: 'https://drive.google.com/file/d/1H1YlOawzWd6cKHx38gn1qBfoOzIJUVnD/preview', title: 'aji recruit' },
  ],
  'van-gogh': [
    { type: 'image', src: 'https://drive.google.com/file/d/1DAw4MlIfu38YdpAcxYBIYKIQ_JE5GB2_/preview', title: 'mah-gogh' },
  ],
  'rissala': [
    { type: 'image', src: 'https://drive.google.com/file/d/1wej3iEUPYd_Ekt6g0koo4Lp8xnQyZTGP/preview', title: 'The Ship of Rissala' },
    { type: 'image', src: 'https://drive.google.com/file/d/1_BgmoGeHeMedLngIrxbQuAavvuNtO_zy/preview', title: 'The Logo' },
  ],
  'turning-myself-into-fictional-character': [
    { type: 'image', src: 'https://drive.google.com/file/d/11ObZJesM3ja6TgjtzCZ1v-ZDNedF36te/preview', title: 'Me as Thors' },
    { type: 'video', src: 'https://drive.google.com/file/d/1YE9-69TwoJYdrvuIG8HYeJXiaYKAHG9D/preview', title: 'The full process' },
  ],
  'the-land': [
    { type: 'image', src: 'https://drive.google.com/file/d/1sU53W2qv75b-b3SCBEnDt3a0sFEJZM4p/preview', title: 'The Farmer' },
    { type: 'video', src: 'https://drive.google.com/file/d/1jPj7Sb_4UId6H71Et4xlZPnQtj4I4Nxn/preview', title: 'The full process' },
  ],
  'tangier-apocalypse': [
    { type: 'image', src: 'https://drive.google.com/file/d/1gTc2YsOB-zldnCUNy8N4Y14GjpipS10d/preview', title: 'Tangier Apocalypse' },
    { type: 'image', src: 'https://drive.google.com/file/d/1fxtvl7hzA94C631mAsO5KQHV_2KhxYEM/preview', title: 'Zoom in' },
    { type: 'video', src: 'https://drive.google.com/file/d/1ydKBDLdEjCPI22m2TJda8hyil_spu7t5/preview', title: 'the Befor and After' },
    { type: 'video', src: 'https://drive.google.com/file/d/1WBiiBReFI0put39_WSYjfX72Oswwnyp1/preview', title: 'The full process' },
  ],
};

const techIconMap: Record<string, React.ReactNode> = {
  'After Effects': <SiAdobeaftereffects className="text-purple-400" title="After Effects" size={28} />,
  'Premiere Pro': <SiAdobepremierepro className="text-blue-400" title="Premiere Pro" size={28} />,
  'Photoshop': <SiAdobephotoshop className="text-blue-600" title="Photoshop" size={28} />,
  'Cinema 4D': <SiCinema4D className="text-indigo-400" title="Cinema 4D" size={28} />,
  'Illustrator': <SiAdobeillustrator className="text-orange-500" title="Illustrator" size={28} />,
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
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    setIsPlaying(true);
  }, [galleryIdx, projectId]);

  useEffect(() => {
    if ((isPhotoProject && gallery.length > 0) || (isVideoProject && videos.length > 0)) setGalleryIdx(0);
  }, [projectId, isPhotoProject, isVideoProject]);

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
          onClick={() => navigate(category ? `/showcase/${category}` : '/')}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Showcase
        </button>
      </div>
      <div className="max-w-5xl w-full rounded-2xl flex flex-col-reverse md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="flex-1 p-4 flex flex-col justify-center min-w-[280px]">
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
            {/* Main media display area */}
            <div className="relative w-full max-w-lg mx-auto mb-2 flex items-center justify-center">
              {/* Display either image or video based on project type */}
              {isPhotoProject && gallery.length > 0 && (
                gallery[galleryIdx].type === 'image' ? (
                  <iframe
                    src={gallery[galleryIdx].src}
                    className="w-full h-[70vh] object-contain rounded-xl shadow-lg bg-black"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/logo.svg';
                    }}
                  />
                ) : (
                  <iframe
                    src={gallery[galleryIdx].src}
                    className="w-full h-[70vh] object-contain rounded-xl shadow-lg bg-black"
                    allow="autoplay"
                    onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/logo.svg'; }}
                  />
                )
              )}

              {isVideoProject && videos.length > 0 && (
                (
                  <iframe
                    src={videos[galleryIdx].src}
                    className="w-full h-[70vh] border-none"
                    allow="autoplay"
                    allowFullScreen
                    title={videos[galleryIdx].title}
                  />
                ) 
              )}

              {/* Navigation arrows - works for both photo and video projects */}
              {(gallery.length > 1 || videos.length > 1) && (
                <>
                  <button
                    onClick={() => setGalleryIdx((prev) => 
                      (prev - 1 + (gallery.length || videos.length)) % (gallery.length || videos.length)
                    )}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-500 focus:outline-none z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setGalleryIdx((prev) => 
                      (prev + 1) % (gallery.length || videos.length)
                    )}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-500 focus:outline-none z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Display current item title */}
            <div className="w-full text-center text-gray-300 mb-2">
              {isPhotoProject ? gallery[galleryIdx]?.title : videos[galleryIdx]?.title}
            </div>


            {/* Gallery navigation dots */}
            <div className="flex gap-2 justify-center mt-4">
              {(isPhotoProject ? gallery : videos).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIdx(idx)}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-200 focus:outline-none ${
                    galleryIdx === idx
                      ? 'bg-blue-500 border-blue-500 scale-110'
                      : 'bg-gray-700 border-gray-500 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to item ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 