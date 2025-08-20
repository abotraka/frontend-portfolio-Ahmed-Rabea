import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      layout
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
            aria-label="Open live demo"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
            aria-label="Open source code on GitHub"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center">Live Demo</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center">Source Code</a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;



