
import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <>
      <NavBar openMobileMenu={handleClick} />
      <div className={`mobile-nav ${isMobileNavOpen ? 'open-menu' : 'closed-menu'}`}>
        <MobileNav closeMobileMenu={handleClick} />
      </div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  )
}

export default App;
