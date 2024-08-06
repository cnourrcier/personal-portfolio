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
                        <p>Hey, my name is Charlie, and I'm a Full-stack software engineer. My passion is building seamless and dynamic web solutions to elevate your digital presence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;