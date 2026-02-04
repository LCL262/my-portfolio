import React from 'react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-container">
            <div className="footer-line"></div>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Liu Chunlin. All rights reserved.</p>

                <button onClick={scrollToTop} className="scroll-top-btn" title="Back to Top">
                    ↑
                </button>
            </div>
        </footer>
    );
}

export default Footer;