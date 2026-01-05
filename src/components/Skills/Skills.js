import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiJenkins,
  SiSupabase,
  SiRabbitmq
} from 'react-icons/si';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'NSQ', icon: SiNodedotjs, color: '#00BCD4' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Neon', icon: SiPostgresql, color: '#00E599' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'CI/CD', icon: SiJenkins, color: '#6366F1' }
    ]
  }
];

const Skills = () => {
  const handleMouseMove = (e, element) => {
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="skill-category"
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={idx} 
                      className="skill-item"
                      onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    >
                      <div className="skill-icon-wrapper">
                        <Icon className="skill-icon" style={{ color: skill.color }} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
