import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  // Create refs for each section
  const sectionRefs = navLinks.map(() => useInView({ threshold: 0.5 }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find the section that is currently in view
      const currentSection = sectionRefs.findIndex(({ inView }) => inView);
      if (currentSection !== -1) {
        setActiveSection(navLinks[currentSection].name.toLowerCase());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/80 dark:bg-dark-200/80 backdrop-blur-md shadow-md' : 'py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-text">
          Sahil Ali
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-dark-100 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-300 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a
            href="https://media-hosting.imagekit.io//361b258c504743a4/sahil google.jpg?Expires=1835432378&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g272EbZK9wQMbotJUeL-f3kxZdEm4MTyzLZwYr1e4eayFjS6M7EK3cGkrbPtWLKrjpUsEfK5TWirD288U-e4Hu0NKIYageYEQIVYqJz70LDoOGlitP6SNHXIFOmZykXisL4vPLk7JoeesSvzyfWiT-TG0pV87wFdrr4mGpSJUEG0rUA9z~-xJTsU59FnEiRFA8o4eXePc~8XaERW3tpclc2lZxGZbbGs3vKNSkoSe~Wj4b~dxz8~sBU5t80cVI7y5aymhMwwgkwTDxi7Iy1K3puIYR-Gh-~sWM2yqAisxYMYhMX5eOJlFNP3jCfyU8h11R0d2i0RshyY3jPdHh1DOA__"
            className="ml-4 btn-primary flex items-center"
            download
          >
            <Download size={18} className="mr-2" /> Resume
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-dark-100 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-300 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-primary-500 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
        className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-dark-100 shadow-xl p-6 flex flex-col md:hidden"
      >
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-primary-500 text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col space-y-4 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="https://media-hosting.imagekit.io//361b258c504743a4/sahil google.jpg?Expires=1835432378&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g272EbZK9wQMbotJUeL-f3kxZdEm4MTyzLZwYr1e4eayFjS6M7EK3cGkrbPtWLKrjpUsEfK5TWirD288U-e4Hu0NKIYageYEQIVYqJz70LDoOGlitP6SNHXIFOmZykXisL4vPLk7JoeesSvzyfWiT-TG0pV87wFdrr4mGpSJUEG0rUA9z~-xJTsU59FnEiRFA8o4eXePc~8XaERW3tpclc2lZxGZbbGs3vKNSkoSe~Wj4b~dxz8~sBU5t80cVI7y5aymhMwwgkwTDxi7Iy1K3puIYR-Gh-~sWM2yqAisxYMYhMX5eOJlFNP3jCfyU8h11R0d2i0RshyY3jPdHh1DOA__"
            className="btn-primary flex items-center justify-center mt-4"
            download
          >
            <Download size={18} className="mr-2" /> Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;