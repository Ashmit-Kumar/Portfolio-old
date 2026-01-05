import React from 'react';
import { motion } from 'framer-motion';
import './ShimmerText.css';

const ShimmerText = ({ text, className = '' }) => {
  return (
    <div className="shimmer-wrapper">
      <motion.div
        className="shimmer-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h1 className={`shimmer-text ${className}`}>
          {text}
        </h1>
      </motion.div>
    </div>
  );
};

export default ShimmerText;
