import React, { useEffect, useRef } from 'react';
import projects from '../model/selected-projects';
import { animateHero } from '../animations/homeAnimation';
import gsap from "gsap";
import chevron from '../assets/chevron-down.png'

const Home = () => {
    const homeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            animateHero();
        }, homeRef);

        return () => ctx.revert(); 
    }, []);

    return (
        <div ref={homeRef}>
            {/* Hero Section */}
            <section className="hero">
                <p className="hero-subtitle">Lalu Iman Abdullah – Front-End Developer</p>
                <h1 className="hero-title">
                    Code Beautiful Experiences With <br /> Flawless Functionality
                </h1>
                <p className="scroll-down">
                    Scroll down <span><img className='chevron-down' src={chevron} alt="Down" /></span>
                </p>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img loading='lazy' src={project.image} alt={project.title} className="project-image" />
                            <p className="project-meta">
                                {project.title} &nbsp;•&nbsp; {project.type} &nbsp; {project.tech}
                            </p>
                            <h3 className="project-title">{project.description}</h3>
                            <a target='_blank' href={project.link} className="project-button">See details</a>
                        </div>
                    ))}
                </div>

                <div className="see-more-wrapper">
                    <a href="/projects" className="see-more-button">See more!</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
