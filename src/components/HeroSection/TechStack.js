import React, { useState } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiExpress, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGo,
  SiPython
} from 'react-icons/si';
import './TechStack.css';

const techData = [
  { title: 'React', icon: SiReact, color: '#61DAFB' },
  { title: 'Next', icon: SiNextdotjs, color: '#000000' },
  { title: 'Node', icon: SiNodedotjs, color: '#339933' },
  { title: 'Express', icon: SiExpress, color: '#000000' },
  { title: 'Go', icon: SiGo, color: '#00ADD8' },
  { title: 'Python', icon: SiPython, color: '#3776AB' },
  { title: 'TS', icon: SiTypescript, color: '#3178C6' },
  { title: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { title: 'Mongo', icon: SiMongodb, color: '#47A248' },
  { title: 'Postgres', icon: SiPostgresql, color: '#4169E1' },
  { title: 'Redis', icon: SiRedis, color: '#DC382D' },
  { title: 'Docker', icon: SiDocker, color: '#2496ED' },
  { title: 'K8s', icon: SiKubernetes, color: '#326CE5' },
  { title: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' }
];

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.3;
    if (distance === 2) return 1.15;
    return 1;
  };

  const getTranslateY = (index) => {
    if (hoveredIndex === null) return 0;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return -16;
    if (distance === 1) return -10;
    if (distance === 2) return -5;
    return 0;
  };

  return (
    <div className="tech-stack-dock">
      <div className="dock-container">
        {techData.map((item, idx) => {
          const Icon = item.icon;
          const scale = getScale(idx);
          const translateY = getTranslateY(idx);
          
          return (
            <div
              key={idx}
              className="dock-item"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="dock-icon-wrapper">
                <Icon className="dock-icon" style={{ color: item.color }} />
              </div>
              {hoveredIndex === idx && (
                <div className="dock-label">
                  {item.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
