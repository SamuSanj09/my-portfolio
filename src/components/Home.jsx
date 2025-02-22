import React, { useEffect } from 'react';    
import './Home.css';
import { motion } from "framer-motion";

const funFacts = [
    "🎮 I enjoy playing shooter video games in my free time.",
    "🌎 I've visited 5 countries so far.",
    "🤖 I built my first AI chatbot at 17.",
    "✅ I love working from anywhere.",
];

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const timelineItems = document.querySelectorAll(".timeline-item");
            timelineItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                    item.classList.add("in-view");
                } else {
                    item.classList.remove("in-view");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            <img 
                src="/images/model-photo.jpg" 
                alt="Samuel Sanjines" 
                className="profile-image" 
            />
            <h1 className="animated-name">Hey, I'm Samuel Sanjines</h1>
            <div className="text-container">
                <p>
                    I have over <span className="glowing-text">3 years</span> of experience and a 
                    <span className="glowing-text"> Bachelor's degree</span> in Computer Science from WGU. 
                    I specialize in Full Stack Development and Data Science.
                </p>
            </div>
            <div className="cta-container">
                <button className="cta-button">Contact Me</button>
                <button className="cta-button">See My Work</button>
            </div>

            {/* Laboral Experience Section (Timeline Style) */}
            <div className="text-container" style={{marginTop: '50px'}}>
                <h2>Laboral Experience</h2>
            </div>
            <section className="experience-section">
                <div className="timeline">
                    {[
                        { title: "Full Stack Developer", company: "XYZ Company", 
                            period: "2022 - Present", 
                            description: "Developing and maintaining web applications using React, Node.js, and MongoDB." },
                        { title: "Software Engineer Intern", company: "ABC Corp",
                             period: "2021 - 2022", 
                             description: "Worked on optimizing database queries and improving backend APIs." },
                        { title: "Freelance Developer", company: "Self-Employed", 
                            period: "2020 - 2021", 
                            description: "Built websites and mobile apps for small businesses and startups." }
                    ].map((job, index) => (
                        <motion.div 
                            key={index} 
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="timeline-content">
                                <h3>{job.title}</h3>
                                <p>{job.company} ({job.period})</p>
                                <p>{job.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Fun Facts Section */}
            <section className="fun-facts">
                <h2  style={{ marginTop: '90px' }}>Fun Facts About Me</h2>
                <ul>
                {funFacts.map((fact, index) => (
    <motion.li
        key={index}
        className="fun-fact-item"
        initial={{ opacity: 1, x: index % 2 === 0 ? -100 : 100 }} // Alterna izquierda/derecha
        whileInView={{ opacity: 1, x: 0 }} // Se hacen visibles y vuelven a su lugar
        exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Salen ligeramente
        transition={{ duration: 0.8, ease: "easeOut" }} // Más suave
        viewport={{ once: false, amount: 0.1 }} // Activación más cerca
    >
        {fact}
    </motion.li>
))}

                </ul>
            </section>
        </section>
    );
}

export default Home;
