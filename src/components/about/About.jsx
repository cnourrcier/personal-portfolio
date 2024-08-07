import React from 'react';
import './styles.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="img-side">
                        <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1715709279/Portfolio%20Projects/computer_n0jopg.jpg`} alt="laptop" className="img-side__main-img" />
                    </div>
                    <div className="text-side">
                        <h3>About me</h3>
                        <h4>Software Engineer
                            <br /> based in New Jersey, USA 📍
                        </h4>
                        <p>I have a strong love and curiosity for designing and building things. From a young age, I have been fascinated by how and why things work. This curiosity drives me to break down complex systems into simple, understandable components and discover new and better ways to put them back together. Constantly learning and growing, both as a software engineer and as an individual, is a core part of who I am. I believe that effectively communicating requires a deep understanding beyond just knowing the answer. I am self-driven and quickly become invested in projects, diving deep into problems to find ideal solutions. While I enjoy working independently, I also thrive in team environments. I am an excellent collaborator with strong listening and communication skills. I can take on leadership roles intuitively and ambitiously, guiding projects from planning through to completion. I love what I do, and I believe that this passion makes the difference between being good at something and being great.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;