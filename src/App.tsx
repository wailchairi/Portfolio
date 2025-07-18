import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectsShowcase from './components/ProjectsShowcase';
import { Routes, Route } from 'react-router-dom';
import RimacStory from './components/RimacStory';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-900">
          <Header currentPage={currentPage} onNavigate={handleNavigation} />
          <Hero onNavigate={handleNavigation} />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      } />
      <Route path="/showcase/:category" element={<ProjectsShowcase />} />
      <Route path="/project/:projectId" element={<ProjectDetail />} />
      <Route path="/rimac-story" element={<RimacStory />} />
      {/* Future: <Route path="/category/:categoryId" element={<CategoryPage />} /> */}
      {/* Future: <Route path="/project/:projectId" element={<ProjectPage />} /> */}
    </Routes>
  );
}

export default App;