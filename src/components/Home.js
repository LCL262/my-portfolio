import React from 'react';
// IMPORTANT: Ensure this path is correct: src/assets/selfie.jpg
import selfiePhoto from '../assets/selfie.jpg'; 

function Home() {
  return (
    <section 
      id="home" 
      // This is the main two-column grid structure
      // We explicitly set the padding-top (pt-28) to ensure it clears the fixed navbar
      className="min-h-screen grid md:grid-cols-2 grid-cols-1 items-center px-12 pt-28 text-white bg-[#2c2c2c]"
      style={{
        backgroundImage: 'url(/dark-texture-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* LEFT COLUMN: Main Text Content (Even Bigger Text) */}
      <div className="flex flex-col justify-center h-full py-10 md:text-left text-center">
        {/* TEXT SIZE INCREASED: text-9xl (Largest available) */}
        <h1 className="text-9xl font-extrabold mb-8 tracking-wider leading-tight">
          HI, I AM <br className="hidden md:block" /> LIU CHUNLIN
        </h1>
        {/* TEXT SIZE INCREASED: text-4xl */}
        <p className="max-w-xl text-4xl leading-relaxed mb-8 font-light">
          A student from Diploma in Digital Design & Development. 
          Motivated in learning new skills, having the dual identity of both **designer** and **developer**.
        </p>
        {/* TEXT SIZE INCREASED: text-3xl */}
        <p></p>
        <p></p>
        <p className="text-3xl mt-6 italic font-light">
          Let me show you something...
        </p>
      </div>

      {/* RIGHT COLUMN: Image (Designed to fill the right side) */}
      {/* Increased padding (p-12) to give the container more room if needed */}
      <div className="flex justify-center items-center h-full p-12">
        <img 
          src={selfiePhoto} 
          alt="Liu Chunlin Selfie" 
          // NEW DIMENSIONS: Increased width (450px) and height (650px)
          style={{ width: '450px', height: '650px' }}
          className="object-cover rounded-xl shadow-2xl border-4 border-white border-opacity-50"
        />
      </div>
    </section>
  );
}

export default Home;