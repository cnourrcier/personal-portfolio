
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClick = (delay) => {
    setTimeout(() => {
      setIsMobileNavOpen(!isMobileNavOpen);
    }, delay);
  }

  return (
    <>
      <NavBar openMobileMenu={() => handleClick(100)} />
      <div className={`mobile-nav ${isMobileNavOpen ? 'open-menu' : 'closed-menu'}`}>
        <MobileNav closeMobileMenu={() => handleClick(500)} />
      </div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer>
        <div className="container">
          <h3>Copyright © 2024. All rights are reserved</h3>
        </div>
      </footer>
    </>
  )
}

export default App;
