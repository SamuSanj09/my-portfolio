import { useState } from 'react'
import Home from './components/home'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />  

      <section id="home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <Footer />
    </>
  );
}

export default App;
