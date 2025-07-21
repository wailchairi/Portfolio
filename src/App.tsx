import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectsShowcase from './components/ProjectsShowcase';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'projects') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const handleNavigation = () => {};

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-900">
          <Header onNavigate={handleNavigation} />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      } />
      <Route path="/showcase/:category" element={<ProjectsShowcase />} />
      <Route path="/project/:projectId" element={<ProjectDetail />} />
      {/* Future: <Route path="/category/:categoryId" element={<CategoryPage />} /> */}
      {/* Future: <Route path="/project/:projectId" element={<ProjectPage />} /> */}
    </Routes>
  );
}

export default App;