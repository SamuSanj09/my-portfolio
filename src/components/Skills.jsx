import React from 'react';
import './Skills.css'; // Optional if you want to add some custom styling

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {/* Frontend Skills */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>HTML</li>
            <li>CSS / Tailwind</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Django</li>
            <li>Flask</li>
          </ul>
        </div>

        {/* Database Skills */}
        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* DevOps & Tools */}
        <div className="skill-category">
          <h3>DevOps & Tools</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem-solving</li>
            <li>Team collaboration</li>
            <li>Adaptability</li>
            <li>Time management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
