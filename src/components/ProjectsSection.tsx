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
    image: 'https://media-hosting.imagekit.io//84f1cac0fd5942a0/port.jpg?Expires=1835435475&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Rcy-bku-QUTd9pR7OE1QP5ypmTDpOg~kwZkBmG6MrHkloxb-y74JBFoWcyCMf2JUl3iqtG7jOGybc910z47I9dAl1iInXa1CWqi~oiqmK3snwc0IjKUC964~I2EVWprF3v8IB37o3nEzMwSkSVemNJ32fewt-3k~6v8uSW1-R-5XLte03XPxgoUaHlPce6hH4uLp3Ju9-5rbMs3-ZS4g34LAoKwBoVLv0vEsz8xrJ7UPq38j7~D1dv4jKfhCL3ScUEHbruFMrotpf1dHrnq3fNEirSYpexFD-eRsSnq2KpNkJfsLVmvUtVg5j-Ct-2a3wd-WGDQevDwcT~C9qMePlQ__', 
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
  image: 'https://media-hosting.imagekit.io//c16155ccc1a7432f/student.jpg?Expires=1835435956&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mcLjCUzateFO7DwN9NY4KXA4pfcfQWrs~GAgP7LnPlXP2RcA~RMM6FosN6NahQnnkyKEOoTEfmWvxNZRfYY0EoeaMF3mq9iFO6gGgihfo~u1MPUsPC3LxErahFh6eYVSG23cpzA~6I~WRVuUD7YtVhmb9RTfo3-CjVELHYjZncYiLVXzA~Ett0AfhrgmYqzeLDGxHoKiELEXZC4Y9sQOZZst8iaAPDk7mOt9zFg-FTg8ciZf23oTP6F-LKv8n2Di11EAgMFcmxP9v-NA786OLDAb0RK0VTnQ8vgxG4N7-D1CAV2Pd5WoePg5UCdMzO73Xk9Ma-h2CpWigHPZ8g6ZPA__', 
  category: 'Web App',
  technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Firebase', 'Stripe API'],
  liveUrl: '',
  githubUrl: 'https://github.com/sahilansari0002/SkillFirst',
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
    title: 'Fitness Tracker Mobile App',
    description: 'A mobile application for tracking workouts, nutrition, and fitness progress.',
    image: 'https://media-hosting.imagekit.io//de2afb5587584ae2/tracker.jpg?Expires=1835438911&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jcPCj-RfeDesm5YBZafsvZQLpWmARFn~j6lOTQ8XFVr5mhZZC2Qj2hd60W0-mD6maVvxjaQw887nyAqozSe-zRwwrMTzBdcgQ4sv5Jr76Oh0vB9t~~QE0-F--RUllFgeoWjZvEmeVhaPWlJFBs-VnJEhafGHRXJFZ7bWBqpy1SO0dO-CWbBpFPYhc2qJrz7cjepDTnnk61QjNef0DXpW56-nQ0WLwm-xaL3E4S7pxHhkjukGQbYrFz9rH~R9UJsigaA327lc1syyLQXRLZTsLyIASgH6znMHr843GO7ynbKEIXRa6W-c9JbPFuSa3o4zv476zdY6xJ9wj5AHMpHxNA__',
    category: 'Mobile App',
    technologies: ['React Native', 'Redux', 'Firebase', 'Health API'],
    githubUrl: 'https://github.com',
    features: [
      'Workout tracking and planning',
      'Nutrition logging and analysis',
      'Progress photos and measurements',
      'Goal setting and achievement tracking',
      'Integration with health devices',
      'Community challenges and sharing'
    ]
  },
  {
    id: 5,
    title: 'Expense Calculator',
    description: 'A simple and efficient expense calculator that helps users track and manage their daily expenses with ease.',
    image: 'https://media-hosting.imagekit.io//62e246a551bc437e/expence.jpg?Expires=1835439016&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ah2Sf24LDgYEKv~Qm~6Aao0YpdJ6vqxFt4SvdUqI9TQQqIuioRHihWLwkyMb2lH35BEX9EXA-fUHxGMPHxiuwq-fCRciYpi69si8IcXSPLSIMmENlShDGn~PWko7L~Xy0kEplRm3WDmWF06iPNxa47yCHM6Es6aCklQu-b8qoggelGTi7r-COEgcLpqayJBcPLx8~g5sXo8cVLUogJr3y3JekKbSzkeFeT1w-jblC1v9XNWe5s4WaY4JgEvFRX2JudPJrTWMLm7-LZRHHYkNPXZWFQy7Fzh4U9Tlq0QrykCSeamekBKLDuAZJVhXA2so1UW~w6XDqBo~9EAI05Q8BA__',
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
    image: 'https://media-hosting.imagekit.io//f2e535f5e89a4a70/math%20and%20quiz.jpg?Expires=1835439365&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Cns5F3TbjlEdYPsPK7F8vUOZM1ayA9JfF2wU7eyhl6RZYTZbNP8e9PoLGi6hcQH2p39pg0jmKdRYP1K-fDj7m45NZmIQ7ebO~fgdfa3fB5fRgafe2tOALcjW96z06fj7ROKBtqj4zZ91aN7Wja9JQMNHNqO13ofU8TEkhl2zym8hNm-9QWwVaphnGZlNzvWeMVRhYPBZpzeMV50ZAu4PrOeXFHqDujowPl4PuoHAZAsxsW6pHbrwL1InpoLG8KUCqNVi1xfTLTtJYqWbQjtrCiwbwmIVmD9~aNEc09uiTpLx7esuv3yz6YXhF4T40WKQBb1zKQAl09WeiR6bEIjTdA__',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
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
  className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
  onClick={() => setSelectedProject(null)}
/>

              
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white dark:bg-dark-100 
                rounded-xl shadow-2xl z-50 p-6 border border-gray-200 dark:border-dark-300 flex flex-col">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-200 transition-colors duration-300 hover:rotate-90 transform"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;