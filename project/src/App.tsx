import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}