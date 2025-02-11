import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Mi Portafolio</Link>  {/* Link a la home */}
        </div>
        
        <ul className="nav-links">
          <li><Link to="/skills">Skills</Link></li>      {/* Link a Skills */}
          <li><Link to="/education">Education</Link></li> {/* Link a Education */}
          <li><Link to="/projects">Projects</Link></li>   {/* Link a Projects */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


