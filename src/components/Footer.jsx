// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // Importa el archivo de estilos CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025, Mi Portafolio. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/SamuSanj09" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
