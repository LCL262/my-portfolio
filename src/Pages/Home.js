import React from 'react';
import mySelfie from '../assets/selfie.jpg';

const Home = () => {
    return (
        <section id="home" className="home-container">
            <div className="home-content">
                <p className="intro-text">HI, I AM</p>
                <h1 className="name-text">LIU CHUNLIN</h1>
                <p className="description-text">
                    A student from <strong>Diploma in Digital Design & Development</strong>.
                    <br />
                    Motivated in learning new skills, having the dual identity of both{' '}
                    <span className="special-font">designer</span> and developer.
                </p>
                <p className="cta-text">Let me show you something...</p>
            </div>

            <div className="home-image-container">
                {/* 2. Use the variable name here */}
                <img src={mySelfie} alt="Liu Chunlin" className="profile-img" />
            </div>
        </section>
    );
};

export default Home;