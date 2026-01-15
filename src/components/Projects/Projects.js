import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'AssessAI',
    description: 'AI-powered interview practice platform that runs live voice interviews with an AI interviewer, captures transcripts and code edits, and generates structured evaluations.',
    technologies: ['Next.js', 'Express', 'TypeScript', 'Python', 'Redis', 'LiveKit'],
    highlights: [
      'Run live voice interviews with an AI interviewer',
      'Capture transcripts and candidate code edits during interviews',
      'Generate structured evaluations and a 5-stage interview pipeline; reduced feedback turnaround by over 50%'
    ],
    github: 'https://github.com/Ashmit-Kumar/Interviewer-agent',
    period: 'Dec 2025 – Jan 2026'
  },
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
    title: 'Medicure',
    description: 'Web application for X-ray medical report analysis. Users upload X-ray images which are analyzed by a deployed deep learning backend to provide predictions and insights.',
    technologies: ['React', 'Flask', 'TensorFlow/Keras', 'Python', 'Vercel'],
    highlights: [
      'Upload X-ray images for automated medical analysis',
      'Integrated pre-trained .h5 CNN model exposed via backend API',
      'Deployed frontend and backend live for real-time predictions'
    ],
    github: 'https://github.com/Ashmit-Kumar/Medicure',
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
