import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                {/* React knows to look in the 'public' folder for root paths (/) */}
                <img src="/logo.png" alt="Portfolio Logo" className="logo-img" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;