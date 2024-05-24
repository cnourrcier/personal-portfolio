import React from 'react'

const Project = ({ project }) => {
    return (
        <div className="pro pro__1">
            <div className="pro__img">
                <img src={project.img} alt="Software Screenshot" loading="lazy" />
            </div>
            <div className="pro__text">
                <h3>{project.name}</h3>
                <p>
                    {project.description}
                </p>
                <div className="stack">
                    {project.tools.map((tool, index) => (
                        <p key={index}>{tool}</p>
                    ))}
                </div>
                <div className="links">
                    <a aria-label="demo" rel="noreferrer" target="_blank" href={project.demo}>
                        Demo
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="42"
                            fill="none"
                            viewBox="6 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5" d="M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z"
                            />
                        </svg>
                    </a>
                    <a aria-label="github" rel="noreferrer" target="_blank" href={project.github}>
                        GitHub
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-brand-github">
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;