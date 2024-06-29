import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 1,
        name: 'E-Commerce-Platform',
        tools: ['NodeJS', 'Express', 'MongoDB', 'React', 'CSS'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1719608700/Portfolio%20Projects/e-commerce-demo_e18wss.gif`,
        demo: 'https://e-commerce-mern-fju7.onrender.com',
        github: 'https://github.com/cnourrcier',
        description: 'A complete, robust, and user-friendly e-commerce application that includes authentication and authorization, data validations, product search, product browsing, product management, shopping cart functionality, checkout and order processing, and mock payment simulation.'
    },
    {
        id: 2,
        name: 'Image Search Gallery',
        tools: ['React', 'Tailwind CSS', 'Pixabay API'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1715703483/Portfolio%20Projects/image-gallery_r0feop.png`,
        demo: 'https://image-gallery-react-tailwindcss.onrender.com',
        github: 'https://github.com/cnourrcier/image-gallery-react-tailwindcss',
        description: 'A React-based project for searching and displaying images, including a user-friendly search interface and detailed image cards with metadata and tag-based search functionality.'
    },
    {
        id: 3,
        name: 'Expense Tracker',
        tools: ['NodeJS', 'Express', 'MongoDB', 'React'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1719692435/Portfolio%20Projects/expensetracker_sko0s5.gif`,
        demo: 'https://expense-tracker-mern-41ga.onrender.com/',
        github: 'https://github.com/cnourrcier/expense-tracker-mern',
        description: 'Expense Tracker allows users to track their income and expenses, view a list of positive and negative transactions, and see their total income, total expenses, and overall balance as a graphical representation.'
    }
]

const Projects = () => {
    return (
        <section id="projects" className="project">
            <div className="container">
                <div className="project-content">
                    <p>Projects</p>
                    <h3>Here you will find some of my most recent projects.</h3>
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