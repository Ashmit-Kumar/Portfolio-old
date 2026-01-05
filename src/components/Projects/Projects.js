import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'AutoShip',
    description: 'A Go-based CI/CD system to automate GitHub repo deployments with DNS proxy and containerized deployments.',
    technologies: ['Go', 'Fiber', 'MongoDB', 'Docker', 'AWS', 'GitHub OAuth'],
    highlights: [
      'Reduced manual effort by 80%',
      'Enforced HTTPS and subdomain routing',
      'Reduced image size by 30% with multistage builds'
    ],
    github: 'https://github.com/Ashmit-Kumar',
    period: 'May 2025 - July 2025'
  },
  {
    title: 'Bin-IT',
    description: 'A civic platform for waste reporting with geotagged photos and AI chatbot support for environmental management.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS S3', 'Clerk'],
    highlights: [
      'Boosted engagement by 40%',
      'Maintained 99.99% uptime for 1K+ uploads',
      'Reduced support requests by 50% with AI chatbot'
    ],
    github: 'https://github.com/Ashmit-Kumar',
    live: 'https://bin-it.vercel.app',
    period: 'Jan 2025 - Mar 2025'
  },
  {
    title: 'TastySearch',
    description: 'A recipe discovery web application that allows users to search for recipes, view ingredients, and find detailed cooking instructions.',
    technologies: ['React', 'CSS', 'JavaScript', 'API Integration'],
    highlights: [
      'Interactive recipe search functionality',
      'Detailed ingredient listings',
      'Step-by-step cooking instructions'
    ],
    github: 'https://github.com/Ashmit-Kumar',
    live: 'https://tastysearch.vercel.app',
    period: '2024'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >
          <h2 className="section-title">Selected Projects</h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
