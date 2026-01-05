import React from 'react';
import './PulseBadge.css';

const PulseBadge = () => {
  return (
    <span className="pulse-badge">
      <span className="pulse-ring"></span>
      <span className="pulse-dot"></span>
    </span>
  );
};

export default PulseBadge;
