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
                        <h4>Software Developer
                            <br /> based in New Jersey, USA 📍
                        </h4>
                        <p>I have a strong love and endless curiosity for designing and building things. In my experience, undertanding something on a fundamental level allows me to discover new and better ways to put the pieces back together. A core part of who I am, both as a software engineer and as an individual, is the desire to continuously learn and grow. I am self-driven and quickly become invested in projects, diving deep into problems to find the best solution.
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;