// ProjectDetailPetPal.js

import React from 'react';

const ProjectDetailPetPal = ({ onBack }) => {
    const project = {
        name: 'PetPal',
        about: 'This project is to develop a website for pet owners or sellers to share resources and knowledge.',
        tasks: 'I developed the user account management system with basic CRUD functions and role-base access. I also allowed users to search usernames by keywords.',
        url: 'Currently not available',
        imageUrl: '/petpal.jpg' // Using the image path from your portfolio data
    };

    return (
        // Reduced top padding
        <div className="bg-[#2c2c2c] min-h-screen pt-24 p-8 text-white">
            
            {/* Back Button */}
            <button 
                onClick={onBack} 
                className="text-lg mb-6 p-3 rounded bg-gray-700 hover:bg-gray-600 transition duration-200"
            >
                &larr; Back to Portfolio
            </button>

            <div className="max-w-4xl mx-auto">
                {/* Project Header */}
                <h2 className="text-4xl font-extrabold mb-3 text-[#00B4D8]">
                    {project.name}
                </h2>
                <div className="h-1 bg-gray-700 w-24 mb-6"></div>

                {/* --- PROJECT IMAGE --- */}
                <div className="mb-10"> 
                    <img 
                        src={project.imageUrl} 
                        alt={`Preview of ${project.name}`} 
                        className="w-full h-auto rounded-lg shadow-xl object-cover" 
                    />
                </div>
                
                {/* --- ABOUT SECTION (Simplified) --- */}
                <h3 className="text-2xl font-bold mb-3">
                    <span className="text-yellow-400">/</span> About the Project
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                    {project.about}
                </p>

                {/* --- WHAT I'VE DONE SECTION (Simplified) --- */}
                <h3 className="text-2xl font-bold mb-3">
                    <span className="text-yellow-400">/</span> What I’ve Done
                </h3>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300 mb-8">
                    {/* Using the detailed list for clean presentation */}
                    <li>Developed user account management system (CRUD)</li>
                    <li>Implemented role-based access control</li>
                    <li>Allowed users to search usernames by keywords</li>
                </ul>

                {/* --- URL SECTION (Simplified) --- */}
                <h3 className="text-2xl font-bold mb-3">
                    <span className="text-yellow-400">/</span> Project URL
                </h3>
                <p className="text-red-400 font-semibold">
                    {project.url}
                </p>

            </div>
        </div>
    );
};

export default ProjectDetailPetPal;