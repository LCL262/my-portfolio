import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="about-page">
            {/* --- Part 1: The Code Section --- */}
            <div className="about-code-section">
                <h2 className="about-header">&lt;AboutMe /&gt;</h2>
                <div className="code-block">
                    <p>class LiuChunlin {'{'}</p>
                    <p className="indent-1">constructor() {'{'}</p>
                    <p className="indent-2"><span className="red">this</span>.role = <span className="green">"Digital Design and Development Student"</span>;</p>
                    <p className="indent-2"><span className="red">this</span>.skills = [</p>
                    <p className="indent-3"><span className="green">"digital design"</span>,</p>
                    <p className="indent-3"><span className="green">"web development"</span>,</p>
                    <p className="indent-3"><span className="green">"immersive technologies"</span></p>
                    <p className="indent-2">];</p>
                    <p className="indent-2"><span className="red">this</span>.traits = [<span className="green">"motivated"</span>, <span className="green">"detail-oriented"</span>];</p>

                    <br />
                    <p className="indent-2"><span className="red">this</span>.education = [</p>
                    <p className="indent-3">{'{'}</p>
                    <p className="indent-4"><span className="pink">level:</span> <span className="green">"Diploma"</span>,</p>
                    <p className="indent-4"><span className="pink">school:</span> <span className="green">"Republic Polytechnic"</span>,</p>
                    <p className="indent-4"><span className="pink">duration:</span> <span className="green">"2024–2027 (Expected)"</span>,</p>
                    <p className="indent-4"><span className="pink">major:</span> <span className="green">"Digital Design and Development"</span>,</p>
                    <p className="indent-4"><span className="pink">gpa:</span> <span className="green">2.83</span></p>
                    <p className="indent-3">{'}'},</p>
                    <p className="indent-3">{'{'}</p>
                    <p className="indent-4"><span className="pink">level:</span> <span className="green">"O-level"</span>,</p>
                    <p className="indent-4"><span className="pink">school:</span> <span className="green">"Management Development Institute of Singapore"</span>,</p>
                    <p className="indent-4"><span className="pink">duration:</span> <span className="green">"Jan 2023 - Nov 2023"</span></p>
                    <p className="indent-3">{'}'}</p>
                    <p className="indent-2">];</p>

                    <br />
                    <p className="indent-2"><span className="red">this</span>.goal = <span className="green">"apply creativity and technical expertise to real-world projects"</span>;</p>
                    <p className="indent-2"><span className="red">this</span>.lookingFor = <span className="green">"an internship that supports growth and collaboration"</span>;</p>
                    <p className="indent-1">{'}'}</p>
                    <p>{'}'}</p>
                </div>
            </div>

            {/* --- Part 2: The Skills Section --- */}
            <div className="skills-section">
                <h2 className="skills-main-title">My Skill sets</h2>
                <div className="skills-grid">

                    {/* Development Column */}
                    <div className="skills-column">
                        <h3>Development</h3>
                        <div className="icons-container">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                            <img src="https://nate-robo.github.io/img/mysql.png" alt="SQL" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        </div>
                    </div>

                    {/* Design Column */}
                    <div className="skills-column">
                        <h3>Design</h3>
                        <div className="icons-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" />
                        </div>
                    </div>

                    {/* Others Column */}
                    <div className="skills-column">
                        <h3>Others</h3>
                        <ul className="soft-skills">
                            <li>Communication Skills</li>
                            <li>Collaboration</li>
                            <li>Critical Thinking</li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* --- Part 3: Certificates Section --- */}
            <div className="certificates-section">
                <h2 className="skills-main-title">Certificates</h2>

                <div className="certificates-grid">
                    {/* SQL Basic */}
                    <a href="https://www.hackerrank.com/certificates/f637b7a0e7b1" target="_blank" rel="noopener noreferrer" className="cert-card">
                        <div className="cert-icon-box">
                            <img
                                src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088"
                                alt="HackerRank"
                                className="cert-icon"
                            />
                        </div>
                        <div className="cert-info">
                            <h4 className="cert-name">SQL (Basic)</h4>
                            <p className="cert-issuer">HackerRank</p>
                            <p className="cert-date">Issued 01 Jan, 2026</p>
                        </div>
                    </a>

                    {/* SQL Intermediate */}
                    <a href="https://www.hackerrank.com/certificates/94b6714267f8" target="_blank" rel="noopener noreferrer" className="cert-card">
                        <div className="cert-icon-box">
                            <img
                                src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088"
                                alt="HackerRank"
                                className="cert-icon"
                            />
                        </div>
                        <div className="cert-info">
                            <h4 className="cert-name">SQL (Intermediate)</h4>
                            <p className="cert-issuer">HackerRank</p>
                            <p className="cert-date">Issued 03 Feb, 2026</p>
                        </div>
                    </a>

                    {/* CSS Basic */}
                    <a href="https://www.hackerrank.com/certificates/93ef0fb04556" target="_blank" rel="noopener noreferrer" className="cert-card">
                        <div className="cert-icon-box">
                            <img
                                src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088"
                                alt="HackerRank"
                                className="cert-icon"
                            />
                        </div>
                        <div className="cert-info">
                            <h4 className="cert-name">CSS (Basic)</h4>
                            <p className="cert-issuer">HackerRank</p>
                            <p className="cert-date">Issued 03 Feb, 2026</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;