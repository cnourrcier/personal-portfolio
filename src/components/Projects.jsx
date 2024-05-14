import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 1,
        name: 'Image Search Gallery',
        tools: ['React, Tailwind CSS, Pixabay API'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1715703483/Portfolio%20Projects/image-gallery_r0feop.png`,
        demo: 'https://image-gallery-react-tailwindcss.onrender.com',
        github: 'https://github.com/cnourrcier/image-gallery-react-tailwindcss'
    },
    {
        id: 2,
        name: 'Expense Tracker',
        tools: ['NodeJS', 'Express', 'MongoDB', 'React'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1715703481/Portfolio%20Projects/expense-tracker_su00lc.png`,
        demo: 'https://expense-tracker-mern-41ga.onrender.com/',
        github: 'https://github.com/cnourrcier/expense-tracker-mern'
    }
]

const Projects = () => {
    return (
        <section id="projects" className="project">
            <div className="container">
                <div className="project-content">
                    <p>Projects</p>
                    <h3>Here you will find some of the personal and clients projects that I
                        created with each project containing its own case study</h3>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;