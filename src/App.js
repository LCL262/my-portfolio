import React, { useState } from "react";
import "./App.css";

// Import all modularized components
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer"; // Don't forget to import the footer!

export default function App() {
    // State for the Portfolio hover-flip effect
    const [flipped, setFlipped] = useState([false, false, false, false, false, false]);

    // Handler to set the flipped state for hover effect
    const setCardFlipped = (index, isFlipped) => {
        setFlipped((prev) =>
            prev.map((v, i) => (i === index ? isFlipped : v))
        );
    };

    return (
        /* Removed 'bg-[#2c2c2c]' and 'text-white' to keep consistency with the white theme */
        <div className="app-main-wrapper">
            <Navbar />

            <Home />

            {/* Portfolio receives the state and handler as props */}
            <Portfolio flipped={flipped} setCardFlipped={setCardFlipped} />

            <About />

            <Contact />

            <Footer />
        </div>
    );
}