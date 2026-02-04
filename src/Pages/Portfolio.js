import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const projects = [
    {
        id: 1,
        title: 'Digital Banner for Travelly',
        type: 'Design',
        image: '/Digital_Banner.jpg',
        about: 'Designed a comprehensive promotional banner for "Travelly" showcasing global destination services through complex image compositing.',
        conceptualization: 'The core concept was "The World in One Place." I wanted to immediately communicate the breadth of Travelly’s offerings by creating a visual journey across continents. I chose an bright, optimistic sky-blue background to evoke the feeling of a clear travel day and used bold, sans-serif white typography to ensure the brand name "TRAVELLY" remained the primary focal point against a busy background.',
        planning: 'Planning involved selecting landmarks that represent diverse travel experiences—from European cityscapes and Asian heritage sites to oceanic architectural wonders. I mapped out a "weighted" composition where the landmarks occupy the bottom half of the frame to provide a stable base, while leaving the top "breathable" for the main headline and service list. This ensures the viewer’s eye follows a logical path: Headline → Services → Visual Landmarks.',
        development: 'In the development phase, I utilized advanced masking and blending techniques to layer nine distinct high-resolution elements—including the Eiffel Tower, Great Wall, and a torii gate—into a single seamless collage. I performed color correction on each landmark to ensure lighting consistency across the composite. Finally, I implemented a bulleted service list with high contrast to clearly outline the business offerings like "Customized Travel Packages" and "Cruise Reservations."',
        tasks: ['Visual Hierarchy Design', 'Photo Manipulation', 'Typography Selection'],
        url: 'N/A'
    },
    {
        id: 2,
        title: 'User Account Management for PetPal',
        type: 'Development',
        image: '/PetPal.jpg',
        conceptualization: 'The goal was to create a secure, user-friendly hub for pet owners to manage their data and pets. We focused on a "safety-first" mindset for pet data privacy.',
        planning: 'I mapped out the User Flow using wireframes, identifying the necessary CRUD operations and defining the hierarchy for Role-Based Access Control (Admin vs. User).',
        development: 'Built with React and Node.js. I implemented keyword-based search using regex and secured user routes with JWT authentication.',
        tasks: ['CRUD functions', 'Role-based access', 'Search functionality'],
        url: 'Currently not available'
    },
    {
        id: 3,
        title: 'Learn @ RP',
        type: 'Design',
        image: '/Learn@RP.png',
        about: 'Developed a mobile app that is easy to use for students to get resources.',
        conceptualization: 'The project originated from a need to centralize student resources into a single, intuitive mobile interface. I focused on "frictionless navigation," aiming to reduce the number of taps required for a student to access their daily schedule or lesson materials. The visual direction was designed to feel academic yet modern, utilizing a clean layout to reduce cognitive load during high-stress periods like exam weeks.',
        planning: 'I began by mapping out a user journey specifically for the student persona at Republic Polytechnic. This involved creating wireframes that prioritized "Quick Links" and a centralized dashboard. I planned a modular UI kit to ensure consistency across different resource modules (grades, schedules, and materials), ensuring that icons and color-coding were used purposefully to guide the user\'s attention to the most urgent tasks.',
        development: 'Using Figma, I developed a high-fidelity interactive prototype. I constructed a comprehensive UI kit featuring reusable components like custom navigation bars, buttons, and status cards. I implemented advanced prototyping features in Figma, such as "Smart Animate" and transition overlays, to simulate a real app experience. The final prototype was tested to ensure the mobile-first design remained legible and touch-friendly for on-the-go student use.',
        tasks: ['UI kit Design', 'Mobile page design'],
        url: 'https://www.figma.com/proto/MC4r2iEs9GrKDtcojZP0es/Chunlin-24037880-Learn-RP-App?node-id=79-16&p=f&t=wSBSCR3r7HNXnu2H-0&scaling=scale-down&content-scaling=fixed&page-id=79%3A15&starting-point-node-id=79%3A16'
    },
    {
        id: 4,
        title: 'Assignment Manager',
        type: 'Development',
        image: '/AssignmentManager.png',
        about: 'Help students to manage their assignments with a clean, easy-to-use interface.',
        conceptualization: 'The project was born from the common student struggle of juggling multiple deadlines across different modules. I conceptualized a "centralized command center" where the primary goal was clarity. I prioritized a clean, distraction-free layout that uses high-contrast visual cues to help students instantly distinguish between completed, pending, and urgent assignments.',
        planning: 'In the planning phase, I architected a database schema that supports secure user authentication and relational assignment data. I mapped out a user flow that allows for rapid entry of new tasks, ensuring the "Due Date" and "Status" fields were the most prominent. I chose a minimalist UI design to ensure that the user’s focus remains entirely on their workload management without unnecessary visual clutter.',
        development: 'I developed this full-stack application using a modern web framework and deployed it on Render. I implemented a secure JWT-based login/logout system to protect student data. For the core functionality, I built a dynamic assignment dashboard that calculates and displays deadlines, along with a dedicated edit page for real-time updates. I used CSS Grid and Flexbox to ensure the assignment list remains organized and fully responsive across all devices.',
        tasks: ['Login/logout system', 'Assignment edit page', 'Styling'],
        url: 'https://ca2assignmentmanager.onrender.com/'
    },
    {
        id: 5,
        title: 'VR Escape Room',
        type: 'AR/VR',
        image: '/VR.png',
        video: 'https://www.youtube.com/embed/Smx21HIJCzA?autoplay=1&mute=1&loop=1&playlist=Smx21HIJCzA',
        pdf: '/Chunlin_GDD.pdf', // Path to your PDF in public folder
        about: 'An immersive VR escape room called Backtracking: Bloodline. Friendly for fresh VR players.',
        tasks: ['Gameflow design', 'Scene building', 'Unity Scripting'],
        url: 'N/A',
        isPDFProject: true // This flag tells the Detail page to show the PDF button instead of text
    },
    {
        id: 6,
        title: "Chunlin's Pizza Kingdom",
        type: 'Development',
        image: '/PizzaApp.png',
        about: 'Built a responsive e-commerce web application for a pizza restaurant featuring an interactive menu and cart system.',
        conceptualization: 'The project was conceived as a streamlined "Digital Menu" to bridge the gap between browsing and ordering. I chose a warm, appetizing color palette—utilizing gold-yellow accents for action buttons to evoke the feeling of melted cheese and crust. The goal was to create a clean, minimalist interface that puts the food photography front and center, minimizing distractions for the hungry user.',
        planning: 'I planned a grid-based card layout to ensure the menu remains organized and scannable. I mapped out the data structure for the pizza items, including names, detailed ingredient descriptions, and dynamic pricing. The user flow was designed for speed: a simple "Add to Cart" interaction on each card allows for rapid selection without leaving the main browsing page.',
        development: 'Developed as a modern web application and deployed on Vercel. I utilized React state management to handle the cart logic and item selection. For the styling, I implemented custom CSS for the shadow effects on the product cards to give the UI depth ("Neumorphism" influence). I ensured the layout was responsive, using a flexible grid that adapts the menu from two columns to one for mobile users.',
        tasks: ['E-commerce Logic', 'Responsive Grid Layout', 'UI/UX Styling'],
        url: 'https://chunlin-pizza-app.vercel.app/'
    },
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

    // Filter logic including the new AR/VR category
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.type === filter);

    // If a project is clicked, show the Detail Page
    if (selectedProject) {
        return (
            <ProjectDetail
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
            />
        );
    }

    return (
        <section id="portfolio" className="portfolio-section">
            <h2 className="portfolio-title">Portfolio</h2>

            {/* Updated Category Filter Tabs including AR/VR */}
            <div className="filter-container">
                {['All', 'Development', 'Design', 'AR/VR'].map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Styled Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-img" />
                            <div className="project-overlay">
                                <span>View Project &rarr;</span>
                            </div>
                        </div>

                        <div className="project-details">
                            <span className="project-category">{project.type}</span>
                            <h3 className="project-card-title">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;