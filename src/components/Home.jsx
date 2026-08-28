import React, { useEffect } from 'react';    
import './Home.css';
import { motion } from "framer-motion";

const funFacts = [
    "🎮 I enjoy playing shooter video games in my free time.",
    "🌎 I've visited 5 countries so far.",
    "🤖 I built my first AI chatbot at 19.",
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
            <h1 className="animated-name">Hey, I'm Jonathan Sanjines</h1>
            <div className="text-container">
                <p>
                    I have over <span className="glowing-text">2 years</span> of experience and a 
                    <span className="glowing-text"> Bachelor's degree</span> Computer Science from WGU. 
                    I specialize in Full Stack Development and Data Analysis.
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
                        { title: "Freelancer Developer", company: "Small Business Clients", 
                            period: "2022 - Present", 
                            description: "Built websites and mobile apps for small businesses, meeting the requirements" },
                        { title: "IT Systems & Support Associate", company: "Milicom",
                             period: "2024", 
                             description: " Collaborated with a support team to develop backend logic" },
                        { title: "Technical Support", company: "Roylis S.R.L    ", 
                            period: "2025", 
                            description: " Mentored by a senior developer, learned to maintain and support a small on-premise private database" }
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
                <h2>Fun Facts About Me</h2>
                <ul>
                {funFacts.map((fact, index) => (
    <motion.li
        key={index}
        className="fun-fact-item"
        initial={{ opacity: 1, x: index % 2 === 0 ? -100 : 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }} 
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
