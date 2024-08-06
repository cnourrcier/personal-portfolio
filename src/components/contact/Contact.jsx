import React from 'react';
import './styles.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-title">
                        <h3>Contact</h3>
                        <h4>Let's Collaborate! Reach me with a click.</h4>
                    </div>
                    <div className="contact-icons">
                        <span>
                            <a href="http://github.com/cnourrcier" id="profile-link" target="_blank" className="btn contact-details">
                                <i className="fab fa-github"> Github</i>
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/charlienourrcier/" id="profile-link" target="_blank"
                                className="btn contact-details">
                                <i className="fab fa-linkedin"> LinkedIn</i>
                            </a>
                        </span>
                        <span>
                            <a href="https://wa.me/13374967870" id="profile-link" target="_blank" className="btn contact-details">
                                <i className="fab fa-whatsapp"> WhatsApp</i>
                            </a>
                        </span>
                        <span>
                            <a href="mailto:charlienourrcier@gmail.com" id="profile-link" target="_blank" className="btn contact-details">
                                <i className="fab fa-at">Email</i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;