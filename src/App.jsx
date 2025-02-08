import { useState } from 'react'
import Home from './components/home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import './App.css'

function App() {
  
  return (
    <div>
      <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer />
    </div>
  )
}

export default App;
