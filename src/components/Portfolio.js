import React, { useState } from 'react';

// Import the project card component
import ProjectCard from './ProjectCard'; 
// Renamed the detail component to PascalCase
import ProjectDetailTravelly from './ProjectDetail_Travelly'; 
// --- IMPORT NEW DETAIL PAGE ---
import ProjectDetailPetPal from './ProjectDetail_PetPal'; 

// --- Placeholder Data for 6 Projects ---
const projects = [
  { id: 1, title: 'Digital Banner for Travelly', type: 'Design', image: '/digital_banner.jpg' },
  { id: 2, title: 'User Account Management for PetPal', type: 'Development', image: '/petpal.jpg' },
  { id: 3, title: 'Project Three Title', type: 'Design', image: '/project3-thumb.jpg' },
  { id: 4, title: 'Project Four Title', type: 'Development', image: '/project4-thumb.jpg' },
  { id: 5, title: 'Project Five Title', type: 'Design', image: '/project5-thumb.jpg' },
  { id: 6, title: 'Project Six Title', type: 'Development', image: '/project6-thumb.jpg' },
];

function Portfolio({ flipped, setCardFlipped }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewProject = (projectId) => {
    setSelectedProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // === CONDITIONAL RENDERING ===
    
  // Project 1: Travelly
  if (selectedProject === 1) {
    return (
      <div className="bg-[#2c2c2c]">
        <ProjectDetailTravelly onBack={handleGoBack} />
      </div>
    );
  } 
    
  // --- NEW CONDITION FOR PROJECT 2: PetPal ---
  else if (selectedProject === 2) {
    return (
      <div className="bg-[#2c2c2c]">
        <ProjectDetailPetPal onBack={handleGoBack} />
      </div>
    );
  } 
    
  // Placeholder for other projects
  else if (selectedProject !== null) {
    return (
      <div id="portfolio" className="section text-white bg-[#2c2c2c] min-h-screen pt-32 p-8">
        <button 
          onClick={handleGoBack} 
          className="text-white text-lg mb-8 p-3 rounded bg-gray-700 hover:bg-gray-600"
        >
          &larr; Back to Portfolio
        </button>
        <h2 className="text-3xl font-bold mb-10">Details for Project {selectedProject}</h2>
        <p>Coming Soon...</p>
      </div>
    );
  }

  // === DEFAULT VIEW: SHOW PROJECT GRID ===
  return (
    <section id="portfolio" className="section text-white bg-[#2c2c2c] min-h-screen pt-32">
      
      {/* Header */}
      <h2 className="text-4xl font-extrabold mb-12 text-[#00B4D8] border-b-2 border-gray-600 pb-4">
        &lt;Portfolio /&gt;
      </h2>

      {/* Grid Container - MODIFIED FOR NARROWER CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            project={project}
            isFlipped={flipped[index]}
            setCardFlipped={setCardFlipped}
            onViewProject={handleViewProject}
          />
        ))}

      </div>
    </section>
  );
}

export default Portfolio;