import React from 'react';
import Project from '../project/Project';
import './styles.css';

const projects = [
    {
        id: 1,
        name: 'EcoTrack',
        tools: ['Webpack', 'Docker', 'Jest', 'NodeJS', 'Express', 'MongoDB', 'React', 'Material UI'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1729539612/Portfolio%20Projects/ecotrack_qmueza.gif`,
        demo: 'https://ecotrack-8glp.onrender.com',
        github: 'https://github.com/cnourrcier/ecotrack',
        description: 'A RESTful single-page web application using Docker containerization, CI/CD with GitHub Actions, Jest testing, and WebSockets. Built with Webpack, React, Node.js, Express, MongoDB, Mongoose, and Material UI.'
    },
    {
        id: 2,
        name: 'Cardinal Finds',
        tools: ['Vite', 'NodeJS', 'Express', 'MongoDB', 'React', 'CSS'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725579026/Portfolio%20Projects/e-commerce-cardinal-finds_fhuz5o.gif`,
        demo: 'https://cardinalfinds.com',
        github: 'https://github.com/cnourrcier/cardinal-finds',
        description: 'A complete, robust, and user-friendly e-commerce application that includes authentication and authorization, data validations, product search, product browsing, product management, shopping cart functionality, checkout and order processing, and mock payment simulation.'
    },
    {
        id: 3,
        name: 'Stock Tracker',
        tools: ['NodeJS', 'Express', 'MongoDB', 'React', 'MaterialUI'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1721177232/Portfolio%20Projects/stock-market-portfolio-dark_dmby4o.gif`,
        demo: 'https://stock-market-portfolio-mern.onrender.com',
        github: 'https://github.com/cnourrcier/stock-tracker',
        description: 'A Full Stack MERN web application that displays stock prices, allows the user to filter/sort, and add/remove stocks from a watchlist'
    },
    {
        id: 4,
        name: 'Image Search Gallery',
        tools: ['React', 'Tailwind CSS', 'Pixabay API'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1719695190/Portfolio%20Projects/imagesearchgallery_ibw6wi.gif`,
        demo: 'https://image-gallery-react-tailwindcss.onrender.com',
        github: 'https://github.com/cnourrcier/image-gallery-react-tailwindcss',
        description: 'A React-based project for searching and displaying images, including a user-friendly search interface and detailed image cards with metadata and tag-based search functionality.'
    },
    {
        id: 5,
        name: 'Moola',
        tools: ['NodeJS', 'Express', 'MongoDB', 'React'],
        img: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1719692435/Portfolio%20Projects/expensetracker_sko0s5.gif`,
        demo: 'https://expense-tracker-mern-41ga.onrender.com/',
        github: 'https://github.com/cnourrcier/moola',
        description: 'An expense tracker that allows users to track their income and expenses, view a list of positive and negative transactions, and see their total income, total expenses, and overall balance as a graphical representation.'
    }
]

const Projects = () => {
    return (
        <section id="projects" className="projects-container">
            <div className="projects-content">
                <h3>Projects</h3>
                <h4>Here you will find some of my most recent projects.</h4>
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