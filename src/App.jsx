import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


function App() {
  // Mobile detection with React Responsive
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <div className="page-container">
        <Navbar />  

        {/* Adjust section layouts based on screen size */}
        <section id="home" className={isMobile ? "mobile-section" : "desktop-section"}>
          <Home />
        </section>

        <section id="skills" className={isMobile ? "mobile-section" : "desktop-section"}>
          <Skills />
        </section>

        <section id="education" className={isMobile ? "mobile-section" : "desktop-section"}>
          <Education />
        </section>

        <section id="projects" className={isMobile ? "mobile-section" : "desktop-section"}>
          <Projects />
        </section>
      </div>

      {/* Footer outside the page-container */}
      <Footer />
    </>
  );
}

export default App;
