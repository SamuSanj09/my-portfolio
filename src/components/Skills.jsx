import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiTool, FiUsers } from 'react-icons/fi';
import './Skills.css';

const skillGroups = [
  { title: 'Frontend', icon: FiCode, skills: ['React', 'Next.js', 'HTML', 'CSS / Tailwind', 'JavaScript'] },
  { title: 'Backend', icon: FiLayers, skills: ['Node.js', 'Express', 'Django', 'Flask'] },
  { title: 'Databases', icon: FiDatabase, skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'DevOps & Tools', icon: FiTool, skills: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  { title: 'Collaboration', icon: FiUsers, skills: ['Problem-solving', 'Team collaboration', 'Adaptability', 'Time management'] },
];

const Skills = () => (
  <section className="skills">
    <motion.div className="skills__heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
      <p>HOW I BUILD</p>
      <h2>A flexible toolkit for real-world work.</h2>
      <span>I choose the right tools for the problem—not technology for its own sake.</span>
    </motion.div>

    <div className="skills-list">
      {skillGroups.map(({ title, icon: Icon, skills }, index) => (
        <motion.article className="skill-category" key={title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
          <div className="skill-category__icon"><Icon aria-hidden="true" /></div>
          <h3>{title}</h3>
          <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Skills;
