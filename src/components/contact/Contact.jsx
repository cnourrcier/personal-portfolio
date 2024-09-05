import React from 'react';
import './styles.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
                <div className="contact-content">
                    <div className="contact-title">
                        <h3>Contact</h3>
                        <h4>Let's Collaborate! Reach me with a click.</h4>
                    </div>
                    <div className="contact-icons">
                        <a href="http://github.com/cnourrcier" id="profile-link" target="_blank" className="btn contact-details">
                            <i className="fab fa-github"> Github</i>
                        </a>
                        <a href="https://www.linkedin.com/in/charlienourrcier/" id="profile-link" target="_blank"
                            className="btn contact-details">
                            <i className="fab fa-linkedin"> LinkedIn</i>
                        </a>
                        <a href="https://wa.me/13374967870" id="profile-link" target="_blank" className="btn contact-details">
                            <i className="fab fa-whatsapp"> WhatsApp</i>
                        </a>
                        <a href="mailto:charlienourrcier@gmail.com" id="profile-link" target="_blank" className="btn contact-details">
                            <i className="fab fa-at">Email</i>
                        </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;