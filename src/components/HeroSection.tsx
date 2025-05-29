import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TextTransition, { presets } from 'react-text-transition';
import { ChevronDown, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast', 'Problem Solver'];

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Sahil Ali</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6 flex items-center">
            <span className="mr-2">I'm a</span>
            <TextTransition springConfig={presets.wobbly} className="text-primary-600 dark:text-primary-400">
              {roles[roleIndex]}
            </TextTransition>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            Specializing in building exceptional websites, applications, and everything in between.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </div>
          
          <div className="flex items-center mt-8 space-x-4">
            <a
              href="https://github.com/sahilansari0002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sahilansari0002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/sahilansari0002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full filter blur-md"></div>
            <img
              src="/achievement/sahil google.jpg"
              alt="Sahil Ali"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-dark-100 shadow-xl animate-float z-10 relative"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/30 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-500/30 rounded-full animate-pulse-slow"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
      >
        <span className="text-sm mb-2"></span>
        <ChevronDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;