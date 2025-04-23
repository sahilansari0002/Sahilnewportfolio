import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tooltip } from 'react-tooltip';
import { 
  Code, Database, Layout, Server, 
  Smartphone, Terminal, Figma, GitBranch 
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
  description: string;
  years: number;
}

const skills: Skill[] = [
  // Frontend
  {
    name: 'React.js',
    level: 85,
    icon: <Code size={24} />,
    category: 'Frontend',
    description: 'Building complex, interactive UIs with React hooks, context API, and Redux',
    years: 1,
  },
  {
    name: 'JavaScript',
    level: 80,
    icon: <Code size={24} />,
    category: 'Frontend',
    description: 'ES6+, TypeScript, functional programming, and modern JS patterns',
    years: 1,
  },
  {
    name: 'CSS',
    level: 85,
    icon: <Layout size={24} />,
    category: 'Frontend',
    description: 'Creating responsive layouts, animations, and custom design systems',
    years: 2,
  },
  {
    name: 'Tailwind CSS',
    level: 80,
    icon: <Layout size={24} />,
    category: 'Frontend',
    description: 'Utility-first CSS framework for rapid UI development',
    years: 1.5,
  },
  {
    name: 'HTML',
    level: 95,
    icon: <Code size={24} />,
    category: 'Frontend',
    description: 'Structuring web pages with semantic HTML elements',
    years: 2.5,
  },
  {
    name: 'XML',
    level: 80,
    icon: <Code size={24} />,
    category: 'Frontend',
    description: 'Working with structured data and configurations in XML',
    years: 2,
  },

  // Backend
  {
    name: 'Node.js',
    level: 85,
    icon: <Server size={24} />,
    category: 'Backend',
    description: 'Building RESTful APIs, microservices, and server-side applications',
    years: 1,
  },
  {
    name: 'PHP',
    level: 75,
    icon: <Server size={24} />,
    category: 'Backend',
    description: 'Developing dynamic web applications with PHP and MySQL',
    years: 1,
  },
  {
    name: 'Python',
    level: 55,
    icon: <Code size={24} />,
    category: 'Backend',
    description: 'Building scripts, automation, and backend applications with Python',
    years: 1,
  },
  {
    name: 'Java',
    level: 80,
    icon: <Code size={24} />,
    category: 'Backend',
    description: 'Developing object-oriented applications and backend systems',
    years: 2,
  },
  {
    name: 'C',
    level: 95,
    icon: <Code size={24} />,
    category: 'Backend',
    description: 'Low-level programming and algorithm implementation',
    years: 3,
  },

  // Other
  {
    name: 'GitHub',
    level: 85,
    icon: <GitBranch size={24} />,
    category: 'Tools',
    description: 'Version control, collaboration, CI/CD workflows',
    years: 3,
  },


];

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Design', 'Mobile'];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

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

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-200 dark:to-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and expertise across various domains.
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

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-dark-300"
              data-tooltip-id={`skill-tooltip-${index}`}
              data-tooltip-content={skill.description}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-600 dark:text-primary-400 mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.years} {skill.years === 1 ? 'year' : 'years'} of experience
              </p>
              
              <Tooltip id={`skill-tooltip-${index}`} className="z-50 !bg-white dark:!bg-dark-100 !text-gray-800 dark:!text-gray-200 !opacity-100 !shadow-xl !border !border-gray-200 dark:!border-dark-300 !px-4 !py-2 !rounded-lg !max-w-xs" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;