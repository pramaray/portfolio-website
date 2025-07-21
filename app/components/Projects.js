export default function Projects() {
  const projects = [
    {
      title: "Shut the Box",
      description: "A browser-based game implementation with dynamic gameplay logic and efficient DOM manipulation for an interactive user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://pramaray.github.io/shutthebox/",
      githubUrl: "https://github.com/pramaray/shutthebox"
    },
    {
      title: "Hangman Game",
      description: "A browser-based Hangman Game with dynamic game logic and real-time updates for guessed letters and hangman visuals.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://pramaray.github.io/hangman/",
      githubUrl: "https://github.com/pramaray/hangman"
    },
    {
      title: "SRIJAN'25 Website",
      description: "Led the design and development of the official website for Jadavpur University's Annual Technomanagement Fest using modern tech stack.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Figma"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "CodeClub Website",
      description: "Developed the official website for Jadavpur University's coding community as part of leading the technical team.",
      technologies: ["React.js", "Node.js", "CSS"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-emerald-800 font-display mb-4">
            Projects
          </h2>
          <div className="text-lg text-gray-600">
            Below are some of the projects I've crafted over time.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-t from-gray-200 to-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">Project Image</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-orange-600 hover:text-orange-800 font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
