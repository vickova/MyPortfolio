import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import OtherProjects from './components/OtherProjects';

const App = () => {
  return (
    <>
      <Navbar />

      <main style={{padding:'.8rem'}}>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <OtherProjects/>
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;