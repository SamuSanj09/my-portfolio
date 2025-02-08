import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">My Portfolio</a>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {/* You can use icons like FontAwesome for the hamburger menu */}
          <span className={click ? "fas fa-times" : "fas fa-bars"}></span>
        </div>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


