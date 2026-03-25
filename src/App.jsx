import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Contact from './components/Contact';

import Background3D from './components/Background3D';

function App() {
  return (
    <div className="app">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Contact />
    </div>
  );
}

export default App;
