import React from 'react';

function ProjectCard({ project, index, isFlipped, setCardFlipped, onViewProject }) {
  // Destructure project details for use in the card
  const { title, type, image } = project;

  // Handler to view the project details when the card is clicked
  const handleCardClick = () => {
    onViewProject(project.id);
  };

  return (
    // Outer container for the card, handles the 3D perspective
    <div 
      className="project-card"
      onMouseEnter={() => setCardFlipped(index, true)} // Set flipped to true on hover
      onMouseLeave={() => setCardFlipped(index, false)} // Set flipped to false on leave
      onClick={handleCardClick} // Handle click to view details
    >
      
      {/* Inner container, handles the transition and conditional flip/scale */}
      <div className={`project-inner ${isFlipped ? 'flipped' : ''}`}>
        
        {/* --- FRONT SIDE: Image and Project Name --- */}
        <div className="project-front flex items-end p-4 relative">
          
          {/* Background Image */}
          <img 
            src={image} // Image from project data
            alt={title} 
            className="h-full absolute top-0 left-0 object-cover" 
            // *** FIXED SIZE: Guaranteed 500px width via inline style ***
            style={{ width: '500px' }}
          />
          
          {/* Overlay text for Project Name */}
          <div className="relative z-10 w-full text-left">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm font-light text-gray-200">{type}</p>
          </div>
        </div>

        {/* --- BACK SIDE: View Details Overlay --- */}
        <div className="project-back flex flex-col justify-center items-center p-4 text-center">
          
          {/* Overlay Content */}
          <div className="bg-black bg-opacity-80 p-6 rounded-lg w-full h-full flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-[#00B4D8] mb-4">View Project Details</h3>
            <p className="text-sm text-gray-300">Click to read the full design rationale.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;