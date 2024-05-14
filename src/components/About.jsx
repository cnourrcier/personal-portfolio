import React from 'react';

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
                        <h4>Full-stack Developer
                            <br /> based in New York, USA 📍
                        </h4>
                        <p>Hey, my name is Charlie, and I'm a Full-stack Developer. My passion is building seamless and dynamic web solutions to elevate your digital presence.
                            <br />
                            <br />
                            My main stack currently is NodeJS, Express, MongoDB, and React.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;