import { motion } from 'framer-motion';
import { FiFileText, FiMail } from 'react-icons/fi';
import './Home.css';

const experience = [
  { title: 'Freelance Developer', company: 'Small business clients', period: '2022 - Present', description: 'Building practical websites and mobile applications around each client’s goals.' },
  { title: 'IT Systems & Support Associate', company: 'Milicom', period: '2024', description: 'Collaborated with a support team to develop and maintain backend logic.' },
  { title: 'Technical Support', company: 'Roylis S.R.L.', period: '2025', description: 'Supported an on-premise database and learned production maintenance practices.' },
];

const riseIn = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => (
  <section className="home" id="about">
    <motion.div className="home__hero" initial="hidden" animate="visible" variants={{ visible: { transition: { delayChildren: 0.35, staggerChildren: 0.4 } } }}>
      <motion.div className="home__portrait-wrap" variants={riseIn}>
        <img src="/images/failazo.jpeg" alt="Jonathan Sanjines" className="profile-image" />
      </motion.div>

      <div className="home__intro">
        <motion.h1 variants={riseIn}>Hey, I&apos;m Jonathan Sanjines</motion.h1>
        <motion.p variants={riseIn} className="home__summary">I have over <span className="glowing-text">2 years</span> of experience and I&apos;m completing my <span className="glowing-text">Bachelor&apos;s degree in Computer Science</span> at WGU. I specialize in Full Stack Development and Data Analysis.</motion.p>
        <motion.div variants={riseIn} className="home__actions">
          <a className="home__button home__button--primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=samuelsanjines09%40gmail.com" target="_blank" rel="noopener noreferrer"><FiMail aria-hidden="true" /> Contact Me</a>
          <a className="home__button home__button--secondary" href="/JonathanSanjines_Resume_Soft.pdf" target="_blank" rel="noopener noreferrer"><FiFileText aria-hidden="true" /> See my Résumé</a>
        </motion.div>
      </div>
    </motion.div>

    <div className="home__experience">
      <motion.div className="home__section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={riseIn}>
        <p>CAREER SNAPSHOT</p>
        <h2>Experience built through real work.</h2>
      </motion.div>
      <div className="experience-grid">
        {experience.map((job, index) => (
          <motion.article className="experience-card" key={job.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={riseIn} transition={{ delay: index * 0.1, duration: 0.5 }}>
            <span className="experience-card__number">0{index + 1}</span>
            <p className="experience-card__period">{job.period}</p>
            <h3>{job.title}</h3>
            <p className="experience-card__company">{job.company}</p>
            <p>{job.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
