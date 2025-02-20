import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: "C.S. (6 Semesters Completed)",
        institution: "Universidad Católica Boliviana (UCB)",
        year: "2022 - 2025",
        description: "Completed coursework in algorithms, databases, and software engineering before transferring.",
        photo: "/images/ucb.png" 
    },
    {
        degree: "Intern at UCB",
        institution: "Universidad Católica Boliviana (UCB)",
        year: "2023",
        description: "Managed and deployed a project for the University’s Science Department.",
        photo: "/images/ucb.png" 
    },
    {
        degree: "Bachelor’s Degree in Computer Science",
        institution: "Western Governors University (WGU)",
        year: "2026",
        description: "Specialized in Full Stack Development and Data Science.",
        photo: "/images/WGU.png"  
    },
    {
        degree: "AWS Certified Developer – Associate",
        institution: "Amazon Web Services",
        year: "2025",
        description: "Hands-on experience with AWS Lambda, DynamoDB, and API Gateway.",
        photo: "/images/aws2.png"  
    },
    	
];

const Education = () => {
    return (
        <section className="education">
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
