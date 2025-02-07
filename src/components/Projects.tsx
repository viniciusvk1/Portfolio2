import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Code2,
  Database,
  Globe,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Tech Innovator Portfolio",
      description: "Portfolio pessoal com tema terminal, apresentando minhas habilidades e projetos de forma única e interativa.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      type: "Frontend",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      links: {
        github: "https://github.com/viniciusvk1",
        live: "#"
      }
    },
    {
      title: "API RESTful Spring Boot",
      description: "API robusta construída com Spring Boot, implementando boas práticas de desenvolvimento e padrões REST.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
      type: "Backend",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      links: {
        github: "https://github.com/viniciusvk1"
      }
    },
    {
      title: "Automação RPA Python",
      description: "Sistema de automação para processos repetitivos, aumentando a eficiência operacional e reduzindo erros humanos.",
      tech: ["Python", "Selenium", "Pandas", "PyAutoGUI"],
      type: "Automation",
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
      links: {
        github: "https://github.com/viniciusvk1"
      }
    },
    {
      title: "Sistema Full Stack",
      description: "Aplicação web completa com autenticação, CRUD e integrações de API.",
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      type: "Full Stack",
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      links: {
        github: "https://github.com/viniciusvk1",
        live: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-mono text-green-500 mb-4 sm:mb-6">[ PROJETOS ]</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="terminal-button border border-green-500 p-4 sm:p-6 hover:bg-green-500/5 transition-all"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500">
                    {project.icon}
                  </span>
                  <h3 className="font-mono text-green-500 text-base sm:text-lg">{project.title}</h3>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-green-500 hover:text-green-400 transition-colors"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-green-500 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <p className="text-green-500/70 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[10px] sm:text-xs font-mono px-1.5 sm:px-2 py-0.5 sm:py-1 border border-green-500/30 text-green-500/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-2">
                <span className="text-[10px] sm:text-xs font-mono text-cyan-300/70">
                  Tipo: {project.type}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 sm:mt-8 p-3 sm:p-4 border border-green-500/30 rounded">
          <p className="text-green-500/70 text-xs sm:text-sm font-mono">
            <span className="text-cyan-300">$</span> Mais projetos em desenvolvimento...
            <span className="cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;