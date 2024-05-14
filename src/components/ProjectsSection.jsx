import React from 'react'

const ProjectsSection = () => {
    return (
        <section id="projects" className="project">
            <div className="container">
                <div className="project-content">
                    <p>Projects</p>
                    <h3>Here you will find some of the personal and clients projects that I
                        created with each project containing its own case study</h3>
                </div>
                <div className="projects-grid">
                    <div className="pro pro__1">
                        <div className="pro__img">
                            <img src="src/assets/image_gallery.png" alt="Software Screenshot" loading="lazy" />
                        </div>
                        <div className="pro__text">
                            <h3>Image Search Gallery</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis et doloremque harum ut voluptates laborum, repudiandae autem fugiat porro. Iusto magnam voluptatem adipisci delectus eligendi quam illo molestiae saepe.
                            </p>
                            <div className="stack">
                                <p>NodeJS</p>
                                <p>Express</p>
                                <p>MongoDB</p>
                                <p>React</p>
                            </div>
                            <div className="links">
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/cnourrcier">
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
                    <div className="pro pro__1">
                        <div className="pro__img">
                            <img src="src/assets/expense-tracker.png" alt="Software Screenshot" loading="lazy" />
                        </div>
                        <div className="pro__text">
                            <h3>Expense Tracker</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus similique cumque accusantium laudantium perferendis, a voluptate vitae sequi labore itaque dolorem ipsum obcaecati minima repellendus dignissimos rem nam magni?
                            </p>
                            <div className="stack">
                                <p>React</p>
                                <p>Tailwind CSS</p>
                            </div>
                            <div className="links">
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/cnourrcier">
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
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;