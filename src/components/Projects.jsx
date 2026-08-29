import React from "react";
import './Projects.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'animate.css';


const projectsData = [

    {
        title: "Document Access Portal",
        description: `real access-control requirement. The goal was to allow a specific group of pre-approved users to access and read a PDF online without providing a 
                        public download or allowing unrestricted access.`,
        image: "/images/apuntes_f7.jpg",
        link: "https://pdf-web-prototype.vercel.app/login",
        github: "https://pdf-web-prototype.vercel.app/login",
        techStack: ["React", "API"]
    },
    {
        title: "AI-Powered Landing Page for Customer Engagement",
        description: "Developed an interactive landing page featuring an AI chatbot for consultations and quote requests.",
        image: "/images/rhino.jpg",
        link: "https://page-angular-pr4e.vercel.app/",
        github: "https://page-angular-pr4e.vercel.app/",
        techStack: ["React", "API"]
    },
    {
        title: "Led Bell",
        description: `Designed, developed, and deployed a mobile application to control a doorbell in a deaf-friendly home, 
            utilizing a Raspberry Pi Pico W and HTTP requests for seamless integration.`,
        image: "/images/led_timbre.png",
        link: "https://github.com/SamuSanj09/timbre_led",
        github: "https://github.com/SamuSanj09/timbre_led",
        techStack: ["React", "CSS"]
    },
    {
        title: "CLOTS",
        description: `Developed a web application using PHP and MySQL that enables to 
            play musical digital instruments via Raspberry Pi Pico W. 
            Includes real-time sound and data visualized on dashboards.`,        
        image: "/images/clots.webp",
        link: "https://github.com/SamuSanj09/Lampara_IOT_Software",
        github: "https://github.com/SamuSanj09/Lampara_IOT_Software",
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

    <div className="text-center mt-5 p-5 bg-gradient bg-dark text-light rounded shadow-lg">
        <h3 className="fw-bold display-4 animate__animated animate__pulse animate__infinite">
            Looking for a <span className="text-warning">passionate developer?</span>  
        </h3>
        <h4 className="text-info fw-bold mt-3 animate__animated animate__fadeInUp">
            I'm ready for new challenges! 🚀
        </h4>
        {/* Botón adicional fuera de los banners de proyectos */}
        <a 
            href="mailto:sanjines009@gmail.com" 
            className="btn btn-danger mt-4"
            target="_blank" 
            rel="noopener noreferrer"
        >
            Contact Me!
        </a>
    </div>

</section>
    );
}	

export default Projects;
