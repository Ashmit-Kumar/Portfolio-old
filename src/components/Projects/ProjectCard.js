import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card"
    >
      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-period">{project.period}</span>
        </div>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Highlights */}
        <div className="highlights-section">
          <h4 className="highlights-title">Key Highlights:</h4>
          <ul className="highlights-list">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="highlight-item">
                <span className="highlight-dot"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="card-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live-link"
            >
              <FiExternalLink />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
