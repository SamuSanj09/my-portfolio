import React from 'react';	
import './Home.css';

const Home = () => {
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
            <section className="experience-section">
            <h2>Laboral Experience</h2>
            <div className="timeline">
                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3>Full Stack Developer</h3>
                        <p>XYZ Company (2022 - Present)</p>
                        <p>Developing and maintaining web applications using React, Node.js, and MongoDB.</p>
                    </div>
                </div>
                <div className="timeline-item right">
                    <div className="timeline-content">
                        <h3>Software Engineer Intern</h3>
                        <p>ABC Corp (2021 - 2022)</p>
                        <p>Worked on optimizing database queries and improving backend APIs.</p>
                    </div>
                </div>
                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3>Freelance Developer</h3>
                        <p>Self-Employed (2020 - 2021)</p>
                        <p>Built websites and mobile apps for small businesses and startups.</p>
                    </div>
                </div>
                <div className="timeline-item right">
                    <div className="timeline-content">
                        <h3>Freelance Developer</h3>
                        <p>Self-Employed (2020 - 2021)</p>
                        <p>Built websites and mobile apps for small businesses and startups.</p>
                    </div>
                </div>
            </div>
        </section>

            <section className="fun-facts">
                <h2>Fun Facts About Me</h2>
                <ul>
                    <li>🎮 I enjoy playing shooter video games in my free time.</li>
                    <li>🌎 I've visited 5 countries so far.</li>
                    <li>🤖 I built my first AI chatbot at 17.</li>
                    <li>✅ I love working from anywhere.</li>
                </ul>
            </section>
        </section>
    );  
}

export default Home;
