import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Mi Portafolio</a>  {/* Link to the home section */}
        </div>
        
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>      {/* Link to the Skills section */}
          <li><a href="#education">Education</a></li> {/* Link to the Education section */}
          <li><a href="#projects">Projects</a></li>   {/* Link to the Projects section */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
