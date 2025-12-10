import React from 'react';

// Data structured exactly as requested
const aboutData = {
  role: "Digital Design and Development Student",
  skills: ["digital design", "web development", "immersive technologies"],
  traits: ["motivated", "detail-oriented"],
  education: [
    {
      level: "Diploma",
      school: "Republic Polytechnic",
      duration: "2024–2027 (Expected)",
      major: "Digital Design and Development",
      gpa: 2.83
    },
    {
      level: "O-level",
      school: "Management Development Institute of Singapore",
      duration: "2023"
    }
  ],
  goal: "apply creativity and technical expertise to real-world projects",
  lookingFor: "an internship that supports growth and collaboration"
};

function About() {
  return (
    <section id="about" className="min-h-screen px-8 pt-32 bg-[#2c2c2c] text-white">
      
      {/* Header: <AboutMe /> */}
      <h3 className="text-2xl font-bold mb-8 text-white text-left ml-6">
          &lt;AboutMe /&gt;
      </h3>

      {/* Code-like text container (Uses <pre> for structure, colors applied with <span>) */}
      <pre className="text-left text-lg font-mono ml-6 max-w-4xl leading-relaxed">
        {/* Class Declaration */}
        <span className="text-pink-400">class </span>
        <span className="text-blue-400">LiuChunlin </span>
        <span className="text-white">{`{`}</span>
        <br />
        {/* Constructor */}
        <span className="text-white">  </span>
        <span className="text-pink-400">constructor</span>
        <span className="text-yellow-400">() </span>
        <span className="text-white">{`{`}</span>
        <br />
        {/* Role */}
        <span className="text-white">    this.</span>
        <span className="text-green-400">role </span>
        <span className="text-white">= </span>
        <span className="text-orange-400">"{aboutData.role}"</span>
        <span className="text-white">;</span>
        <br />
        {/* Skills */}
        <span className="text-white">    this.</span>
        <span className="text-green-400">skills </span>
        <span className="text-white">= </span>
        <span className="text-yellow-400">{`[`}</span>
        <br />
        <span className="text-white">      </span>
        <span className="text-orange-400">"{aboutData.skills[0]}",</span>
        <br />
        <span className="text-white">      </span>
        <span className="text-orange-400">"{aboutData.skills[1]}",</span>
        <br />
        <span className="text-white">      </span>
        <span className="text-orange-400">"{aboutData.skills[2]}"</span>
        <br />
        <span className="text-white">    </span>
        <span className="text-yellow-400">{`]`}</span>
        <span className="text-white">;</span>
        <br />
        {/* Traits */}
        <span className="text-white">    this.</span>
        <span className="text-green-400">traits </span>
        <span className="text-white">= </span>
        <span className="text-yellow-400">{`["${aboutData.traits.join('", "')}"]`}</span>
        <span className="text-white">;</span>
        <br />
        {/* Education Array Start */}
        <span className="text-white">    this.</span>
        <span className="text-green-400">education </span>
        <span className="text-white">= </span>
        <span className="text-yellow-400">{`[`}</span>
        <br />
        {/* Education Item 1 */}
        <span className="text-white">      </span>
        <span className="text-yellow-400">{`{`}</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">level</span>
        <span className="text-white">: </span>
        <span className="text-orange-400">"{aboutData.education[0].level}"</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">school</span>
        <span className="text-white">: </span>
        <span className="text-orange-400">"{aboutData.education[0].school}"</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">duration</span>
        <span className="text-white">: </span>
        <span className="text-orange-400">"{aboutData.education[0].duration}"</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">major</span>
        <span className="text-white">: </span>
        <span className="text-orange-400">"{aboutData.education[0].major}"</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">gpa</span>
        <span className="text-white">: </span>
        <span className="text-teal-400">{aboutData.education[0].gpa}</span>
        <br />
        <span className="text-white">      </span>
        <span className="text-yellow-400">{`},`}</span>
        <br />
        {/* Education Item 2 */}
        <span className="text-white">      </span>
        <span className="text-yellow-400">{`{`}</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">level</span>
        <span className="text-white">: </span>
        <span className="text-orange-400">"{aboutData.education[1].level}"</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">school</span>
        <span className="text-white">: </span>
        <span className="text-orange-400">"{aboutData.education[1].school}"</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-white">        </span>
        <span className="text-green-400">duration</span>
        <span className="text-white">: </span>
        <span className="text-orange-400">"{aboutData.education[1].duration}"</span>
        <br />
        <span className="text-white">      </span>
        <span className="text-yellow-400">{`}`}</span>
        <br />
        <span className="text-white">    </span>
        <span className="text-yellow-400">{`]`}</span>
        <span className="text-white">;</span>
        <br />
        {/* Goal */}
        <span className="text-white">    this.</span>
        <span className="text-green-400">goal </span>
        <span className="text-white">= </span>
        <span className="text-orange-400">"{aboutData.goal}"</span>
        <span className="text-white">;</span>
        <br />
        {/* Looking For */}
        <span className="text-white">    this.</span>
        <span className="text-green-400">lookingFor </span>
        <span className="text-white">= </span>
        <span className="text-orange-400">"{aboutData.lookingFor}"</span>
        <span className="text-white">;</span>
        <br />
        {/* Closing Braces */}
        <span className="text-white">  {`}`}</span>
        <br />
        <span className="text-white">{`}`}</span>
      </pre>

      {/* The Skill Sets Section remains removed */}

    </section>
  );
}

export default About;