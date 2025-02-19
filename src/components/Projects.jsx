import React from "react";
import './Projects.css';


const projectsData = [
    {
        title: "AI-Powered Landing Page for Customer Engagement",
        description: "Developed an interactive landing page featuring an AI chatbot for consultations and quote requests.",
        image: "/images/rhino.jpg",
        link: "https://weatherapp.com",
        github: "https://github.com/weatherapp",
        techStack: ["React", "API"]
    },
    {
        title: "Led Bell",
        description: `Designed, developed, and deployed a mobile application to control a doorbell in a deaf-friendly home, 
            utilizing a Raspberry Pi Pico W and HTTP requests for seamless integration.`,
        image: "/images/led_timbre.png",
        link: "https://myportfolio.com",
        github: "https://github.com/myportfolio",
        techStack: ["React", "CSS"]
    },
    {
        title: "Weather App",
        description: `Developed a weather forecasting app using React and API integration 
            providing real-time weather updates, temperature trends, and location-based forecasts.`,
        image: "/images/weather.png",
        link: "https://weatherapp.com",
        github: "https://github.com/weatherapp",
        techStack: ["React", "API"]
    },
    {
        title: "CLOTS",
        description: `Developed a web application using PHP and MySQL that enables to 
            play musical digital instruments via Raspberry Pi Pico W. 
            Includes real-time sound and data visualized on dashboards.`,        
        image: "/images/clots.webp",
        link: "https://weatherapp.com",
        github: "https://github.com/weatherapp",
        techStack: ["React", "API"]
    },
    {
        title: "TCP & DSS for Ketal Supermarket",
        description: `Developed a TCP-DSS for Ketal Supermarket, 
                    enabling real-time data processing and analytics to optimize inventory 
                    management and sales forecasting`,        
        image: "/images/ketal.png",
        link: "https://weatherapp.com",
        github: "https://github.com/weatherapp",
        techStack: ["React", "API"]
    },

    // Add more projects here
];

const Projects = () => {
    return (
        <section className="projects">
            <div className="text-container">
                <h2>My Projects</h2>
            </div>
    <div className="project-banners">
        {projectsData.map((project, index) => (
            <div key={index} className="project-banner">
                <img src={project.image} alt={project.title} className="project-banner-img" />
                <div className="project-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">See More</a>
                </div>
            </div>
        ))}
    </div>
</section>
    );
}	

export default Projects;