import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Coffee, Code, Lightbulb, Heart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import LoadingImage from '../ui/LoadingImage';

const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '5+' },
    { label: 'Awards', value: '8+' }
  ];

  const funFacts = [
    { icon: <Coffee size={20} />, fact: 'Fueled by 3 cups of coffee daily' },
    { icon: <Code size={20} />, fact: '10,000+ lines of code written' },
    { icon: <Lightbulb size={20} />, fact: 'Love solving complex problems' },
    { icon: <Heart size={20} />, fact: 'Passionate about open source' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me"
          subtitle="Get to know me and my journey in the world of web development."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <LoadingImage 
              src="/sahil google.jpg"
              alt="Sahil working"
              className="rounded-lg shadow-xl w-full object-cover max-h-[500px]"
            />
            
            <motion.div 
              className="absolute -bottom-6 -right-6 md:-right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Full Stack Developer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Freelancer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Crafting digital experiences with code and creativity
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                👋 Hello! I'm Sahil Ali, a passionate Full Stack Developer with a strong foundation in building dynamic and interactive web applications. My journey in tech started during my college years, where I quickly developed a deep interest in software development, leading me to work on impactful projects and participate in competitive hackathons.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
               💻 With hands-on experience in web and mobile development, I've worked on a variety of projects, ranging from 🚀 freelancing platforms to 🔐 cybersecurity awareness applications. I specialize in 💡 JavaScript ecosystems, particularly ⚛️ React.js for frontend and 🖥️ Node.js for backend, while also having a strong grasp of ☕ Java, 🔣 C, and 🐍 Python.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  🎤 My journey took a transformational turn when I joined Aspire Institute 🇮🇳, India’s largest personal and professional human development institute. Through Aspire, I enhanced my 🗣️ communication, 💪 confidence, and 🌟 leadership skills, which played a crucial role in my personal and professional growth. I also had the honor of 🎙️ anchoring the Felicitation Ceremony, a milestone that strengthened my public speaking abilities. With dedication and continuous learning, I was 📈 promoted to Level 4, marking significant progress in my Aspire journey.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  🔥 What excites me most about development is solving real-world problems through technology. I thrive on challenges that push me to explore new frameworks, optimize performance, and enhance user experiences. My work is driven by a mission to create 🎯 intuitive and accessible digital solutions that make an impact.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                🏆 Beyond development, I actively participate in hackathons, where I have secured 🏅 top rankings in national competitions. I'm also engaged in 🌍 open-source contributions, 🧑‍🏫 mentoring, and ✍️ technical writing, aiming to empower aspiring developers. When I’m not coding, I enjoy 📚 learning about AI advancements, 🔐 cybersecurity, and 🚀 startup innovations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                    <Calendar size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Born on Jan 06, 2005</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                    <MapPin size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Based in Akola, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                    <GraduationCap size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">B.C.A( Bachelor of Computer Applications )</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: index * 0.1 + 0.2
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Fun Facts About Me
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.fact}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                    {fact.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {fact.fact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;