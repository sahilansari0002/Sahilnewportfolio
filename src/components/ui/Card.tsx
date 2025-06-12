import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hoverEffect ? { y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;