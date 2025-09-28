import React, { useEffect, useRef } from 'react';
import projects from '../model/all-projects';
import {animateProject } from '../animations/projectAnimation';
import gsap from "gsap";

const Projects = () => {
    const projectRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            animateProject();
        }, projectRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="projects-gallery" ref={projectRef}>
            {projects.map((project, index) => (
                <div className="project-tile" key={index}>
                    <img loading='lazy' src={project.image} alt={`Project ${index}`} className="project-img" />
                    <a target='_blank' href={project.link} className="project-overlay-button">See details</a>
                </div>
            ))}
        </section>
    );
};

export default Projects;
