import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './HeroSection.css';
import ShimmerText from './ShimmerText';
import PulseBadge from './PulseBadge';
import TechStack from './TechStack';

const HeroSection = () => {
  const email = "ashmitkumar1020@gmail.com";

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ashmit_Resume.pdf';
    link.download = 'Ashmit_Kumar_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-badge-wrapper"
        >
          <div className="hero-badge">
            <PulseBadge />
            <span className="badge-text">10+ Projects Completed</span>
          </div>
        </motion.div>

        {/* Name with Shimmer Effect */}
        <ShimmerText text="Ashmit Kumar" />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hero-description"
        >
          <p className="description-line">
            I'm currently 4th year undergrad at PSIT, Kanpur.
          </p>
          <p className="description-line">
            I have expertise in building scalable, cloud-native systems and high-performance backends!
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="hero-buttons-container"
        >
          <div className="hero-buttons-row">
            <button
              onClick={() => window.location.href = `mailto:${email}`}
              className="btn btn-primary"
            >
              Contact Me <FiArrowRight className="btn-icon" />
            </button>
            <button
              onClick={scrollToProjects}
              className="btn btn-secondary"
            >
              View Projects <FiArrowRight className="btn-icon" />
            </button>
          </div>
          <div className="hero-buttons-row">
            <button
              onClick={downloadResume}
              className="btn btn-secondary btn-resume"
            >
              Resume <FiDownload className="btn-icon" />
            </button>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="tech-stack-section"
        >
          <h3 className="tech-stack-title">My Tech Stack:</h3>
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
