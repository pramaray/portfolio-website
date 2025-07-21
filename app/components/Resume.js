export default function Resume() {
  const educationData = [
    {
      year: "2023-Present",
      title: "Jadavpur University, Kolkata",
      subtitle: "Bachelor of Engineering in Information Technology"
    },
    {
      year: "2021-2023", 
      title: "Bardhaman Bidyarthi Bhavan Girls High School, Purba Bardhaman",
      subtitle: "WBCHSE - Percentage: 88%"
    },
    {
      year: "2010-2021",
      title: "St. Xavier's Collegiate School, Purba Bardhaman",
      subtitle: "ICSE - Percentage: 96.4%"
    }
  ];

  const experienceData = [
    {
      year: "SRIJAN'25",
      title: "Design and Tech Lead",
      subtitle: "Designed the website using Figma, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, React-three-fiber",
      location: "The Annual Technomanagement Fest of Jadavpur University"
    },
    {
      year: "SRIJAN'24",
      title: "Design and Tech Team",
      subtitle: "Designed the website using Figma, React.js, Node.js, Express.js, MongoDB",
      location: "The Annual Technomanagement Fest of Jadavpur University"
    },
    {
      year: "CodeClub",
      title: "Design and Development Lead",
      subtitle: "Led technical team in developing club website, organized 2 coding workshops and 2 inter-college hackathons with 250+ total participants",
      location: "Jadavpur University coding community"
    },
    {
      year: "E-Cell",
      title: "Co-Ordinator",
      subtitle: "Organized events like E-Summit'24 and events in SRIJAN'25 managing around 350 to 500 people, hosting the events and managing the financial planning",
      location: "Entrepreneurship Cell of Jadavpur University"
    },
    {
      year: "GDSC",
      title: "Design Team",
      subtitle: "Part of the design team for Google Developers Student Chapter",
      location: "Google Developers Student Chapter of Jadavpur University"
    }
  ];

  const awardsData = [
    {
      year: "Synchronicity S1",
      title: "Winner of Best Use of APIs",
      subtitle: "ACM,JU Chapter"
    },
    {
      year: "Cypher 3331",
      title: "3rd Position",
      subtitle: "IEEE,JU"
    },
    {
      year: "TechnoKraft",
      title: "2nd Position",
      subtitle: "E-Cell,JU"
    },
    {
      year: "Amazon HackOn 5.0",
      title: "Top 1000 team in 3600+ teams",
      subtitle: ""
    }
  ];

  // Technical Skills - Organized by category
  const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "C"];
  const webDevelopment = ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "React Three Fiber"];
  const databases = ["MongoDB", "SQL"];
  const designTools = ["Figma", "Adobe Illustrator", "Photoshop"];
  const frameworks = ["Django", "Express.js"];
  const devTools = ["Git", "API Integration", "Version Control"];
  
  // Soft Skills and Traits
  const personalTraits = ["#Problem-solving", "#Team-collaboration", "#Innovation", "#Detail-oriented", "#Leadership", "#Event-Management"];
  
  // Languages
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Bengali", level: "Fluent" },
    { name: "Hindi", level: "Proficient" }
  ];
  
  // Academic
  const coursework = ["Object Oriented Programming", "Software Engineering", "Database Management Systems", "Data Structures and Algorithms", "Web Development", "Software Design Patterns"];
  
  // Personal
  const hobbies = ["💻 Coding & Development", "🎨 UI/UX Design", "📚 Learning New Tech", "🎮 Gaming", "🏆 Competitive Programming"];

  return (
    <section id="resume" className="py-20 bg-emerald-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl font-bold text-yellow-400">RESUME</div>
        <div className="absolute bottom-20 right-10 text-6xl font-bold text-yellow-400">RESUME</div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-8 font-display">Education</h2>
              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full transform rotate-45 mt-1 flex-shrink-0"></div>
                    <div>
                      <div className="text-yellow-400 font-semibold">{item.year}</div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-300">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-8 font-display">Experience</h2>
              <div className="bg-orange-500 rounded-lg p-8">
                <div className="space-y-6">
                  {experienceData.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-white rounded-full transform rotate-45 mt-1 flex-shrink-0"></div>
                      <div className="text-black">
                        <div className="font-bold text-lg">{item.year}</div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm">{item.subtitle}</p>
                        {item.location && <p className="text-sm font-medium">{item.location}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Personal traits */}
                <div className="mt-8 pt-6 border-t border-orange-400">
                  <div className="flex flex-wrap gap-2">
                    {personalTraits.map((trait, index) => (
                      <span key={index} className="bg-emerald-800 text-white px-3 py-1 rounded-full text-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Technical Skills */}
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-8 font-display">Technical Skills</h2>
              
              {/* Programming Languages */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                <div className="bg-emerald-700 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {programmingLanguages.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Web Development */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {webDevelopment.map((skill, index) => (
                    <span key={index} className="bg-orange-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((skill, index) => (
                    <span key={index} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design Tools */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {designTools.map((skill, index) => (
                    <span key={index} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development Tools */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {devTools.map((skill, index) => (
                    <span key={index} className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-8 font-display">Language</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-bold text-lg">{lang.name}</h3>
                    <p className="text-gray-300">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Achievements */}
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-8 font-display">Awards & Achievements</h2>
              <div className="grid grid-cols-2 gap-6">
                {awardsData.map((award, index) => (
                  <div key={index} className="text-center bg-emerald-700 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2 text-yellow-400">{award.year}</div>
                    <h4 className="text-sm font-semibold mb-1">{award.title}</h4>
                    {award.subtitle && <p className="text-xs text-gray-300">{award.subtitle}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
