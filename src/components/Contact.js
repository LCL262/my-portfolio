import React from 'react';

function Contact() {
  return (
    // Background color set to dark grey
    <section id="contact" className="min-h-screen px-8 pt-32 bg-[#2c2c2c] text-white">
      
      {/* Header: <Contact /> */}
      <h3 className="text-2xl font-bold mb-10 text-white text-left ml-6">
          &lt;Contact /&gt;
      </h3>
      
      <p className="text-xl font-light mb-8 ml-6">Find me on:</p>

      <div className="flex flex-col gap-8 ml-6">
          
          {/* LinkedIn Row */}
          <div className="flex items-center gap-6">
              {/* Icon (Using inline style for guaranteed 200px x 200px size) */}
              <img 
                  src="/linkedin-icon.png" 
                  alt="LinkedIn" 
                  className="object-contain"
                  // *** GUARANTEED FIX: Inline style for dimensions ***
                  style={{ width: '200px', height: '200px' }}
              />
              {/* Link */}
              <a 
                  href="https://www.linkedin.com/in/chunlinliu" // Placeholder URL
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-blue-300 hover:text-[#00B4D8] underline font-medium"
              >
                  (15) Chunlin Liu | LinkedIn
              </a>
          </div>

          {/* Email Row (Outlook) */}
          <div className="flex items-center gap-6">
              {/* Icon (Using inline style for guaranteed 200px x 200px size) */}
              <img 
                  src="/outlook-icon.png" 
                  alt="Outlook Email" 
                  className="object-contain"
                  // *** GUARANTEED FIX: Inline style for dimensions ***
                  style={{ width: '200px', height: '200px' }}
              />
              {/* Email Link/Text */}
              <a 
                  href="mailto:24037880@myrp.edu.sg"
                  className="text-xl text-blue-300 hover:text-[#00B4D8] underline font-medium"
              >
                  24037880@myrp.edu.sg
              </a>
          </div>
      </div>
    </section>
  );
}

export default Contact;