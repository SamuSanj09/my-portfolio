import { useMediaQuery } from 'react-responsive';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import './App.css';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="page-container">
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
      </main>
      
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;