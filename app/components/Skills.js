export default function Skills() {
  const skills = [
    // Programming Languages
    { name: "JavaScript", level: "Advanced", category: "Programming" },
    { name: "Python", level: "Intermediate", category: "Programming" },
    { name: "Java", level: "Intermediate", category: "Programming" },
    { name: "C++", level: "Intermediate", category: "Programming" },
    { name: "C", level: "Basic", category: "Programming" },
    
    // Web Development
    { name: "React.js", level: "Advanced", category: "Web Development" },
    { name: "Node.js", level: "Advanced", category: "Web Development" },
    { name: "Express.js", level: "Advanced", category: "Web Development" },
    { name: "Next.js", level: "Advanced", category: "Web Development" },
    { name: "HTML", level: "Expert", category: "Web Development" },
    { name: "CSS", level: "Advanced", category: "Web Development" },
    { name: "Tailwind CSS", level: "Advanced", category: "Web Development" },
    { name: "React Three Fiber", level: "Intermediate", category: "Web Development" },
    
    // Databases
    { name: "MongoDB", level: "Advanced", category: "Database" },
    { name: "SQL", level: "Intermediate", category: "Database" },
    
    // Design Tools
    { name: "Figma", level: "Advanced", category: "Design" },
    { name: "Adobe Illustrator", level: "Intermediate", category: "Design" },
    { name: "Photoshop", level: "Intermediate", category: "Design" },
    
    // Frameworks & Others
    { name: "Django", level: "Intermediate", category: "Framework" },
    { name: "API Integration", level: "Advanced", category: "Development" },
    { name: "Version Control (Git)", level: "Advanced", category: "Development" },
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "bg-green-500";
      case "Advanced": return "bg-blue-500";
      case "Intermediate": return "bg-yellow-500";
      case "Basic": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-emerald-800 font-display mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">
            A summary of my technical skills and coding abilities.
          </p>
        </div>

        {/* Skills organized by category */}
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="">
              <h3 className="text-3xl font-bold text-emerald-800 mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{skill.name}</h4>
                    <div className="flex justify-center mb-3">
                      <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                        style={{
                          width: skill.level === "Expert" ? "100%" : 
                                 skill.level === "Advanced" ? "85%" : 
                                 skill.level === "Intermediate" ? "70%" : "50%"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
