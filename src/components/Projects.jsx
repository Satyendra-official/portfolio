import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    name: "LifeOps",
    description: "A productivity and wellness dashboard for tracking habits, tasks, and reflections in one place.",
    tech: ["React", "Tailwind", "Vercel"],
    github: "https://github.com/Satyendra-official/lifeOps",
  },
  {
    name: "React Weather App",
    description: "Real-time weather app built in React using the OpenWeatherMap API to display weather conditions dynamically.",
    tech: ["React", "API", "Tailwind"],
    github: "https://github.com/Satyendra-official/react-weather-app",
  }, 
  {
    name: "Finance Tracker (Backend)",
    description: "Backend service for tracking income and expenses. Built using Node.js and Express.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Satyendra-official/finance-tracker-backend",
  }
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-4 dark:bg-gray-800 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">🚀 Projects</h2>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md p-15 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-blue-200 text-blue-800 dark:text-blue-600 text-xs px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
