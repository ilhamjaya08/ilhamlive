
import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://picsum.photos/400/300",
      description: "A full-stack e-commerce platform built with Next.js and Stripe integration",
      tech: ["React", "Next.js", "Stripe", "TailwindCSS"],
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com",
      type: "Web Application"
    },
    {
      title: "Task Management App",
      image: "https://picsum.photos/400/301",
      description: "Real-time task management application with team collaboration features",
      tech: ["React", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/username/project2",
      liveUrl: "https://project2-demo.com",
      type: "Web Application"
    },
    {
      title: "Weather Dashboard",
      image: "https://picsum.photos/400/302",
      description: "Weather forecast application with interactive maps",
      tech: ["React", "OpenWeather API", "Leaflet"],
      githubUrl: "https://github.com/username/project3",
      liveUrl: "https://project3-demo.com",
      type: "Web Application"
    },
    {
      title: "Social Media API",
      image: "https://picsum.photos/400/303",
      description: "RESTful API for social media platform",
      tech: ["Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/username/project4",
      type: "Backend API"
    },
    {
      title: "Portfolio Website",
      image: "https://picsum.photos/400/304",
      description: "Personal portfolio website with blog functionality",
      tech: ["Next.js", "MDX", "TailwindCSS"],
      githubUrl: "https://github.com/username/project5",
      liveUrl: "https://project5-demo.com",
      type: "Website"
    },
    {
      title: "Chat Application",
      image: "https://picsum.photos/400/305",
      description: "Real-time chat application with WebSocket",
      tech: ["React", "Socket.io", "Express"],
      githubUrl: "https://github.com/username/project6",
      liveUrl: "https://project6-demo.com",
      type: "Web Application"
    },
    {
      title: "Recipe Finder",
      image: "https://picsum.photos/400/306",
      description: "Recipe search and save application",
      tech: ["React", "Spoonacular API", "Redux"],
      githubUrl: "https://github.com/username/project7",
      liveUrl: "https://project7-demo.com",
      type: "Web Application"
    },
    {
      title: "Fitness Tracker",
      image: "https://picsum.photos/400/307",
      description: "Workout tracking and progress monitoring app",
      tech: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com/username/project8",
      type: "Mobile App"
    },
    {
      title: "Blog Platform",
      image: "https://picsum.photos/400/308",
      description: "Multi-user blog platform with CMS",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/username/project9",
      liveUrl: "https://project9-demo.com",
      type: "Web Application"
    },
    {
      title: "Movie Database",
      image: "https://picsum.photos/400/309",
      description: "Movie information and review platform",
      tech: ["React", "TMDB API", "TailwindCSS"],
      githubUrl: "https://github.com/username/project10",
      liveUrl: "https://project10-demo.com",
      type: "Web Application"
    }
  ];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-8 bg-[#ffba79]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto my-12 p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <motion.h2 
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="text-4xl font-black mb-8 uppercase border-b-4 border-black pb-4"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFE4E1] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover border-b-4 border-black"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-white px-3 py-1 text-sm border-2 border-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-black text-white px-3 py-1.5 text-sm hover:bg-gray-800 transition-colors"
                    >
                      <Icon icon="mdi:github" className="w-4 h-4" />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#4CAF50] text-white px-3 py-1.5 text-sm hover:bg-[#45a049] transition-colors"
                      >
                        <Icon icon="mdi:web" className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                ${currentPage === 0 ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#FFB6C1] hover:bg-[#FF69B4]'}`}
            >
              <Icon icon="mdi:chevron-left" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </motion.button>
            <div className="text-sm sm:text-base md:text-lg font-medium">
              Showing {currentPage * 4 + 1}-{Math.min((currentPage + 1) * 4, projects.length)} of {projects.length}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                ${currentPage === totalPages - 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#FFB6C1] hover:bg-[#FF69B4]'}`}
            >
              <Icon icon="mdi:chevron-right" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </motion.button>          </div>        </motion.div>
      </div>
    </motion.section>
  );
};

