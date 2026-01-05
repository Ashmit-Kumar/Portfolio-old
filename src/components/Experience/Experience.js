import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: 'Goismo India Pvt Ltd',
      role: 'FullStack Developer Intern',
      period: 'Sept 2025 - Present',
      location: 'Remote',
      achievements: [
        'Developed microservices using Go and Fiber framework for scalable architecture',
        'Integrated AWS services (S3, Lambda) for cloud storage and serverless computing',
        'Implemented RESTful APIs and optimized database queries for performance'
      ]
    },
    {
      id: 2,
      company: 'DtoDstint Service',
      role: 'Software Engineering Intern',
      period: 'Dec 2024 - Mar 2025',
      location: 'Remote',
      achievements: [
        'Implemented Redis caching strategy reducing API response time by 40%',
        'Built CI/CD pipelines using Jenkins for automated testing and deployment',
        'Collaborated with team to develop RESTful APIs using Node.js and Express'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="experience-box"
            >
              {/* Corner Plus Decorations */}
              <div className="corner-decoration corner-tl"></div>
              <div className="corner-decoration corner-tr"></div>
              <div className="corner-decoration corner-bl"></div>
              <div className="corner-decoration corner-br"></div>

              <div className="experience-item">
                <div className="item-header">
                  <div>
                    <h3 className="item-title">{item.company}</h3>
                    <p className="item-detail">{item.role}</p>
                  </div>
                  <div className="item-info">
                    <span className="period-badge">{item.period}</span>
                    <span className="location">{item.location}</span>
                  </div>
                </div>

                <ul className="achievements-list">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      <FiArrowRight className="achievement-icon" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
