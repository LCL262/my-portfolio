import React from 'react';

function Contact() {
    return (
        <section id="contact" className="contact-section">

            {/* Header: <Contact /> */}
            <h3 className="contact-header">
                &lt;Contact /&gt;
            </h3>

            <p className="contact-subtext">Find me on:</p>

            <div className="contact-links-container">

                {/* LinkedIn Row */}
                <div className="contact-row">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn"
                        className="contact-icon"
                    />
                    <a
                        href="https://www.linkedin.com/in/chunlin-liu-696947304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        Chunlin Liu | LinkedIn
                    </a>
                </div>

                {/* Email Row (Outlook) */}
                <div className="contact-row">
                    <img
                        src="https://banner2.cleanpng.com/20190716/tzv/kisspng-office-365-microsoft-outlook-microsoft-office-micr-1713879420361.webp"
                        alt="Outlook Email"
                        className="contact-icon"
                    />
                    <a
                        href="mailto:24037880@myrp.edu.sg"
                        className="contact-link"
                    >
                        24037880@myrp.edu.sg
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;