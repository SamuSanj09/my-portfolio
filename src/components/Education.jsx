import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: "C.S. (6 Semesters Completed)",
        institution: "Universidad Católica Boliviana (UCB)",
        year: "2022 - 2024",
        description: "Completed coursework in algorithms, databases, and software engineering before transferring to WGU.",
        photo: "/images/ucb.png" 
    },
    {
        degree: "System & Support",
        institution: "Milicom Corporation",
        year: "2024",
        description: "Collaborated with a support team to develop backend logic that delivered default responses",
        photo: "/images/Milicom.jpg"
    },
    {
        degree: "Bachelor’s Degree in Computer Science",
        institution: "Western Governors University (WGU)",
        year: "2025 - 2026",
        description: "Specialized in Full Stack Development and Data Analysis.",
        photo: "/images/WGU.png"  
    },
    {
        degree: "Technical Support",
        institution: "ROYLIS S.R.L",
        year: "2025",
        description: " Mentored by a senior developer, learned to maintain and support a small on-premise private database",
        photo: "/images/roylis_icon.png"  
    },
    	
];

const Education = () => {
    return (
        <section className="education" style={{ marginTop: '90px' }}>
            <h2>Education and Experience</h2>
            <div className="education-grid">
                {educationData.map((edu, index) => (
                    <div key={index} className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={edu.photo} alt={`${edu.institution} Logo`} className="edu-logo" /> 
                                <h3>{edu.degree}</h3>
                                <p>{edu.institution}</p>
                            </div>
                            <div className="card-back">
                                <p>{edu.year}</p>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
