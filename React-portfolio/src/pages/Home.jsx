import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home;