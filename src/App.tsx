import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectsShowcase from './components/ProjectsShowcase';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  if (currentPage === 'projects') {
    return <ProjectsShowcase onNavigate={handleNavigation} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <Hero onNavigate={handleNavigation} />
      <About />
      <Projects onNavigate={handleNavigation} preview={true} />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;