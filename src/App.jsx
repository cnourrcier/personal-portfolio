
import React from 'react';
import NavBar from './components/navBar/NavBar';
import MobileNav from './components/mobileNav/MobileNav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { MobileMenuProvider } from './context/MobileMenuContext';

function App() {

  return (
    <>
      <MobileMenuProvider>
        <NavBar />
        <MobileNav />
      </MobileMenuProvider>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
