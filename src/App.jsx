import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/COntact'

import './App.css'

function App() {
  
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
