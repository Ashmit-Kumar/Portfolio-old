import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = {
    institution: 'Pranveer Singh Institute of Technology',
    location: 'Kanpur, India',
    degree: 'Bachelor of Technology in Computer Science',
    period: '2022 - 2026',
    cgpa: '7.5 CGPA'
  };

  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="education-content"
        >
          <div className="corner-decoration top-left"></div>
          <div className="corner-decoration top-right"></div>
          <div className="corner-decoration bottom-left"></div>
          <div className="corner-decoration bottom-right"></div>

          <div className="education-item">
            <div className="education-header">
              <div>
                <h3 className="institution-name">{educationData.institution}</h3>
                <p className="degree">{educationData.degree}</p>
              </div>
              <div className="education-details">
                <span className="period-badge">{educationData.period}</span>
              </div>
            </div>
            <div className="education-meta">
              <span className="location">{educationData.location}</span>
              <span className="cgpa">{educationData.cgpa}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
