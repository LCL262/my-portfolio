// App.js (FIXED)

import React, { useState } from "react";
import "./App.css";

// Import all modularized components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";


export default function App() {
  // State for the Portfolio hover-flip effect must remain here
  const [flipped, setFlipped] = useState([false, false, false, false, false, false]);

  // Handler to set the flipped state (true or false) for hover effect
  const setCardFlipped = (index, isFlipped) => {
    setFlipped((prev) =>
      prev.map((v, i) => (i === index ? isFlipped : v))
    );
  };

  return (
    // FIX: Add 'relative' (just in case) and 'pt-32' (128px) to push content below the large fixed Navbar
    <div className="font-sans text-white bg-[#2c2c2c] relative pt-32"> 

      <Navbar /> 
      
      <Home /> 
      
      {/* Portfolio receives the state and handler as props */}
      <Portfolio flipped={flipped} setCardFlipped={setCardFlipped} /> 
      
      <About />
      
      <Contact /> 

    </div>
  );
}