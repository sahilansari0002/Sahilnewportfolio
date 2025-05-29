import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website for a Friend',
    description: 'A fully responsive and modern portfolio website built using HTML, CSS, and JavaScript.',
    image: '/achievement/port.jpg', 
    category: 'Web App',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://sahilansari0002.github.io/Saad/',
    githubUrl: 'https://github.com/sahilansari0002/portfolio-project',
    features: [
      'Responsive and mobile-friendly design',
      'Elegant UI with smooth animations',
      'Custom fonts and icon integrations',
      'Optimized for performance and SEO',
      'Hosted on GitHub Pages',
      'Showcases work, skills, and projects'
    ]
},

{
  id: 2,
  title: 'My Previous Portfolio',
  description: 'A fully responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase my skills and projects.',
  image: 'https://sahilansari0002.github.io/portfolio-/port1.jpg', 
  category: 'Web App',
  technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
  liveUrl: 'https://sahilansari0002.github.io/portfolio-/',
  githubUrl: 'https://github.com/sahilansari0002/portfolio-',
  features: [
    'Fully responsive and optimized for all devices',
    'Modern and clean UI with animations',
    'Project showcase section with interactive elements',
    'Custom SCSS styling for better maintainability',
    'Dedicated blog section with articles',
    'Contact form integration'
  ]
},

{
  id: 3,
  title: 'SkillFirst - Freelancing Platform',
  description: 'A dynamic freelancing platform designed to help new freelancers secure their first project through a skills-based assessment system.',
  image: '/achievement/skill first.png', 
  category: 'Web App',
  technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Firebase', 'Stripe API'],
  liveUrl: '',
  githubUrl: 'https://github.com/sahilansari0002',
  features: [
    'Skills-based assessment to qualify for projects',
    'Secure payments and transaction handling',
    'User-friendly dashboard for freelancers and clients',
    'Real-time chat and project tracking',
    'Automated skill verification system'
  ]
},

{
  
    id: 4,
    title: 'Weather Forecast Website',
    description: 'A real-time weather forecast website created during a 3-day ReactJS workshop led by Nakul Sir. Implemented API calls using OpenWeather API and learned core concepts of React libraries.',
    image: '/achievement/weathwer.jpeg',
    category: 'Web Development',
    technologies: ['ReactJS', 'OpenWeather API', 'Axios', 'CSS'],
    liveUrl: 'https://weathersforecaster.netlify.app/',
    githubUrl: 'https://github.com/sahilansari0002/weatherforecast',
    features: [
      'Real-time weather updates for any city',
      'Search functionality with dynamic results',
      'API integration using Axios',
      'Responsive UI design',
      'Current temperature, humidity, and wind data',
      'Clean and intuitive user interface'
    ]
  
  
  },
  {
    id: 5,
    title: 'Expense Calculator',
    description: 'A simple and efficient expense calculator that helps users track and manage their daily expenses with ease.',
    image: '/achievement/expence.jpg',
    category: 'Web App',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
    liveUrl: 'https://rupeestrackerbysahilansari.netlify.app/',
    githubUrl: 'https://github.com/sahilansari0002/Rupee',
    features: [
      'User-friendly expense tracking interface',
      'Real-time total expense calculation',
      'Category-based expense organization',
      'Data persistence using Local Storage',
      'Interactive UI with smooth animations',
      'Dark & Light mode support'
    ]

  },
  {
    id: 6,
    title: 'Math & Quiz Game for Children',
    description: 'An interactive and fun learning game that helps children improve their math skills and vocabulary by solving problems and guessing image-based answers.',
    image: '/achievement/math and quiz.jpg',
    category: 'Educational Game',
    technologies: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://mathgamebysahil.netlify.app/',
    githubUrl: 'https://github.com/sahilansari0002/ChildMathGame',
    features: [
      'Engaging math quizzes with different difficulty levels',
      'Image-based guessing game for learning new words',
      'Real-time scoring and progress tracking',
      'Interactive animations to make learning fun',
      'User-friendly interface for children',
      'Dark & Light mode support for better usability'
    ]
}

];
const categories = ['All', 'Web App', 'Mobile App', 'AI Tool'];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0,
      y: -50,
      transition: { duration: 0.3 }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleViewDetails = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProject(project);
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-100 dark:to-dark-200">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore a selection of my recent work, showcasing my skills and expertise in various domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group hover:shadow-2xl dark:shadow-primary-900/10 transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="skill-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <button
                  className="btn-primary w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700"
                  onClick={(e) => handleViewDetails(project, e)}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
              >
                <motion.div
                  className="bg-white dark:bg-dark-100 rounded-xl shadow-2xl 
                            w-full max-w-2xl max-h-[90vh] overflow-y-auto 
                            border border-gray-200 dark:border-dark-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="sticky top-0 w-full h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-t-xl z-10"></div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-200 transition-colors duration-300 hover:rotate-90 transform cursor-pointer z-10"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="p-6">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-2 gradient-text">{selectedProject.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-primary-600 dark:text-primary-400">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map(tech => (
                              <span key={tech} className="skill-tag bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-4 mb-4">
                          {selectedProject.liveUrl && (
                            <a
                              href={selectedProject.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700"
                            >
                              <ExternalLink size={18} className="mr-2" /> Live Demo
                            </a>
                          )}
                          
                          {selectedProject.githubUrl && (
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline flex items-center"
                            >
                              <Github size={18} className="mr-2" /> GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-gray-50 dark:bg-dark-200 p-4 rounded-lg">
                      <h4 className="font-semibold mb-4 text-primary-600 dark:text-primary-400 text-lg">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-2 mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;