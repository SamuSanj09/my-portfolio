import React from "react";
import './Projects.css';


const projectsData = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my skills and projects.",
        image: "/images/portfolio-screenshot.jpg",
        link: "https://myportfolio.com",
        github: "https://github.com/myportfolio",
        techStack: ["React", "CSS"]
    },
    {
        title: "Weather App",
        description: "A weather forecasting app using React and API integration.",
        image: "/images/weather-app.jpg",
        link: "https://weatherapp.com",
        github: "https://github.com/weatherapp",
        techStack: ["React", "API"]
    },
    // Add more projects here
];

const Projects = () => {
    return (
        <section className="projects">
    <h2>My Projects</h2>
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