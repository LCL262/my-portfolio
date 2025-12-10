import React from 'react';

function Navbar() {
  // Define colors
  const LINK_BG_COLOR = 'bg-[gold]'; 
  const NAV_COLOR = '#00B4D8';

  return (
    <nav 
      // Fixed position setup remains correct
      className={`w-full justify-between items-center px-10 py-5 fixed top-0 left-0 z-50 shadow-md border-b border-gray-500`}
      style={{ 
        display: 'flex', 
        backgroundColor: NAV_COLOR
      }}
    >
      
      {/* LEFT SIDE: Logo Container */}
      <a href="#home" className="flex items-center gap-3">
        <img 
          src="/logo.png" 
          alt="logo" 
          className="w-12 h-12" 
          style={{ width: '100px', height: '100px' }} 
        />
      </a>

      {/* RIGHT SIDE: DESKTOP LINKS */}
      <div 
        // === GUARANTEED FIX: Using standard 'space-x-8' for 32px gap between links ===
        className="flex space-x-8 text-lg items-center" 
      > 
        {['HOME', 'PORTFOLIO', 'ABOUT', 'CONTACT'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`px-6 py-2 rounded-xl font-semibold text-black hover:bg-[#ffd700cc] ${LINK_BG_COLOR}`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;