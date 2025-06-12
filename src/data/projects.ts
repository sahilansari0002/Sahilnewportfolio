import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website for a Friend',
    description: 'A fully responsive and modern portfolio website built using HTML, CSS, and JavaScript.',
    image: '/port.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://sahilansari0002.github.io/Saad/',
    githubUrl: 'https://github.com/sahilansari0002',
    featured: true
  },
  {
    id: '2',
    title: 'My Previous Portfolio',
    description: 'A fully responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase my skills and projects.',
    image: 'https://sahilansari0002.github.io/portfolio-/port1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    category: 'web',
    liveUrl: 'https://sahilansari0002.github.io/portfolio-/',
    githubUrl: 'https://github.com/sahilansari0002',
    featured: true
  },
  {
    id: '3',
    title: 'SkillFirst - Freelancing Platform',
    description: 'A dynamic freelancing platform designed to help new freelancers secure their first project through a skills-based assessment system.',
    image: '/skill first.png',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Firebase', 'Stripe API'],
    category: 'web',
    liveUrl: '',
    githubUrl: 'https://github.com/sahilansari0002',
    featured: false
  },
  {
    id: '4',
    title: 'Weather Forecast Website',
    description: 'A real-time weather forecast website created during a 3-day ReactJS workshop led by Nakul Sir. Implemented API calls using OpenWeather API and learned core concepts of React libraries.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['ReactJS', 'OpenWeather API', 'Axios', 'CSS'],
    category: 'mobile',
    liveUrl: 'https://weathersforecaster.netlify.app/',
    githubUrl: 'https://github.com/sahilansari0002',
    featured: true
  },
  {
    id: '5',
    title: 'Expense Calculator',
    description: 'A simple and efficient expense calculator that helps users track and manage their daily expenses with ease.',
    image: '/expence.jpg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
    category: 'web',
    liveUrl: 'https://rupeestrackerbysahilansari.netlify.app/',
    githubUrl: 'https://github.com/sahilansari0002',
    featured: false
  },
  {
    id: '6',
    title: 'Math & Quiz Game for Children',
    description: 'An interactive and fun learning game that helps children improve their math skills and vocabulary by solving problems and guessing image-based answers.',
    image: '/math and quiz.jpg',
    technologies: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    category: 'design',
    liveUrl: 'https://mathgamebysahil.netlify.app/',
    featured: false
  },
  {
    id: '7',
    title: 'Brain Buzzzz',
    description: 'A React.js quiz app that challenges users with engaging questions across various categories and difficulty levels, making learning fun and interactive.',
    image: '/brainbuzzzz.jpg',
    technologies: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    category: 'design',
    liveUrl: 'https://brain-buzzz.netlify.app/',
    featured: false
  },
  {
    id: '8',
    title: 'Pet’s Zone Akola(Freelancing Project)',
    description: 'A local pet store website for Pet’s Zone in Akola, Maharashtra, showcasing services like pet grooming, boarding, and supplies.',
    image: '/petzone.png',
    technologies: ['HTML', 'CSS', 'JavaScript','typescript'],
    category: 'Web',
    liveUrl: 'https://petzoneakola.netlify.app/',
    featured: false
  }
];