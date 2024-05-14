import React from 'react';

const AboutSection = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="img-side">
                        <img src="/src/assets/computer.jpg" alt="mee" className="img-side__main-img" />
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

export default AboutSection;