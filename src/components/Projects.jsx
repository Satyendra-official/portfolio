const projects = [
    {
      name: "Weather App",
      description: "Fetches real-time weather using APIs. Learned how to handle APIs and display data dynamically.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Satyendra-official/react-weather-app", // Replace with your GitHub repo link
      //demo: "#",   // Replace with live demo if available
    },
    {
      name: "Todo App",
      description: "Built with React using hooks for state management. Helps manage tasks with add/remove functionality.",
      tech: ["React", "Tailwind", "Hooks"],
      github: "https://github.com/Satyendra-official/react-todo-app",
      //demo: "#",
    }
  ];
  
  function Projects() {
    return (
      <section id="projects" className="py-16 px-4 dark:bg-gray-800 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">🚀 Projects</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-blue-200 text-blue-800 dark:text-blue-600 text-xs px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                {/* <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Live Demo
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  