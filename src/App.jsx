import { useState } from 'react'
import Home from './components/home'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  
  return (
    <Router>
      <Navbar />  {/* Navbar se encuentra fuera de las rutas */}
      
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />  {/* Footer fuera de las rutas */}
    </Router>
  )
}

export default App;
