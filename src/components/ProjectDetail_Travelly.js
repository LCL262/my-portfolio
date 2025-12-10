import React from 'react';

// Assuming the image path
// NOTE: I've changed the image path to match what you provided: '/digital_banner.jpg'
const TRAVELLY_IMAGE_PATH = '/Digital_Banner.jpg';

// Component now receives the onBack handler as a prop
function ProjectDetailTravelly({ onBack }) { 
  return (
    // The section starts below the fixed global navbar (pt-32)
    <section id="project-travelly" className="min-h-screen px-8 pt-32 bg-[#2c2c2c] text-white flex justify-center">
      
      {/* Main Content Container (Limit width for readability on large screens) */}
      <div className="w-full max-w-4xl text-left pb-20">

        {/* --- 1. BACK BUTTON --- */}
        <button 
          onClick={onBack} 
          className="text-white text-lg mb-12 p-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          &larr; Back to Portfolio
        </button>
        
        {/* === 2. Project Title === */}
        <h2 className="text-4xl font-extrabold mb-12 text-[#00B4D8] border-b-2 border-gray-600 pb-4">
          Digital Banner for Travelly
        </h2>

        {/* === 3. Project Screenshot Container */}
        <div className="mb-12 shadow-2xl rounded-lg overflow-hidden border border-gray-700 flex justify-center">
          <img 
            src={TRAVELLY_IMAGE_PATH} 
            alt="Digital Banner for Travelly featuring global landmarks" 
            className="object-cover" 
            // *** GUARANTEED FIX: Inline style for exact dimensions (700px x 500px) ***
            style={{ width: '700px', height: '500px' }}
          />
        </div>

        {/* === 4. Details and Rationale === */}
        <div className="space-y-6 text-lg">
            
            <p className="font-semibold text-gray-300">
                <span className="text-[#00B4D8]">Duration:</span> 25/07/2025 - 25/07/2025
            </p>

            <h3 className="text-3xl font-bold pt-6 pb-2 text-white">
                Design Rationale
            </h3>

            <p>
                This banner was designed to promote the travel company **TRAVELLY** and highlight the exciting experiences they offer with the theme of global destinations for travelling. The concept is simple: bring together some of the world’s most iconic landmarks under a bright, open sky to spark curiosity and a sense of adventure.
            </p>
            <p>
                To keep the design visually appealing, I used principles like **balance**, placing landmarks evenly across the bottom, and **contrast**, with bold white text that stands out against the blue sky. The brand name “TRAVELLY” is placed prominently to grab attention, while the list of services is easy to read and well-organized.
            </p>
            <p>
                I used **masking techniques** to cut out each landmark cleanly from its original photo, then adjusted brightness and contrast to make the images feel consistent and vibrant. The airplane adds a sense of motion and ties in with the travel theme.
            </p>
            <p className="font-bold pt-2">
                Overall, the banner is meant to feel fresh, engaging, and professional — something that immediately tells people Travelly can take them anywhere they dream of going.
            </p>

        </div>
      </div>
    </section>
  );
}

export default ProjectDetailTravelly;