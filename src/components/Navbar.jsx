import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Jonathan Sanjines 💻</a>
        </div>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            ☰ {/* Hamburger icon */}
          </div>
        )}

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li>
        <a href="/JonathanSanjines_Resume_Soft.pdf" target="_blank" rel="noopener noreferrer">Resumé</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
