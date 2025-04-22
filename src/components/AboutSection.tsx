import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Code, Coffee, Laptop, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me better - my background, education, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <motion.div variants={itemVariants} className="card p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2 text-primary-500" size={24} />
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
  👋 Hello! I'm Sahil Ali, a passionate Full Stack Developer with a strong foundation in building dynamic and interactive web applications. My journey in tech started during my college years, where I quickly developed a deep interest in software development, leading me to work on impactful projects and participate in competitive hackathons.
</p>

<p>
  💻 With hands-on experience in web and mobile development, I've worked on a variety of projects, ranging from 🚀 freelancing platforms to 🔐 cybersecurity awareness applications. I specialize in 💡 JavaScript ecosystems, particularly ⚛️ React.js for frontend and 🖥️ Node.js for backend, while also having a strong grasp of ☕ Java, 🔣 C, and 🐍 Python.
</p>

<p>
  🎤 My journey took a transformational turn when I joined Aspire Institute 🇮🇳, India’s largest personal and professional human development institute. Through Aspire, I enhanced my 🗣️ communication, 💪 confidence, and 🌟 leadership skills, which played a crucial role in my personal and professional growth. I also had the honor of 🎙️ anchoring the Felicitation Ceremony, a milestone that strengthened my public speaking abilities. With dedication and continuous learning, I was 📈 promoted to Level 4, marking significant progress in my Aspire journey.
</p>

<p>
  🔥 What excites me most about development is solving real-world problems through technology. I thrive on challenges that push me to explore new frameworks, optimize performance, and enhance user experiences. My work is driven by a mission to create 🎯 intuitive and accessible digital solutions that make an impact.
</p>

<p>
  🏆 Beyond development, I actively participate in hackathons, where I have secured 🏅 top rankings in national competitions. I'm also engaged in 🌍 open-source contributions, 🧑‍🏫 mentoring, and ✍️ technical writing, aiming to empower aspiring developers. When I’m not coding, I enjoy 📚 learning about AI advancements, 🔐 cybersecurity, and 🚀 startup innovations.
</p>


              </div>
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="mr-2 text-primary-500" size={20} />
                Education
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Bachelor of Computer Applications</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sant Gadge Baba Amravati University, 2022-2025</p>
                </div>
                

              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 text-primary-500" size={20} />
                Achievements
              </h3>
              
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>💻 Open Source Contributor (React, Node.js)</li>
<li>🏆 Top 15 Rank in National Hackathon (Pune)</li>
<li>🚀 Winner of MSINS Startup Innovation Challenge (₹1 Lakh Prize)</li>
<li>🎤 Selected by Govt. of Maharashtra for Startup Mahakumbh (New Delhi)</li>
<li>📜 Reliance Foundation Scholar</li>
<li>🔍 Volunteer Selection for ISRO Bharatiya Antariksh Hackathon 2024</li>
<li>🏅 Google Cloud Gen AI Quiz Winner (Top 5)</li>
<li>📢 Social Media Contest Winner - Google Cloud Community Day Pune 2024</li>
<li>🎖️ Awarded for Best Modal Presentation at Smt. Maherbano College (2023)</li>
<li>🌟 Selected among the 🔝 300 in the Futurepreneur Course for 🏆 TiE Global Summit 2024 at 📍 BIEC</li>
<li>🧠 Selected among Top 1000 Teams - SBI Youth Ideathon 2025 (IIT Delhi)</li>
<li>🏅 Google Cloud Arcade Champion - Completed All Tasks with Recognition</li>
<li>🏆 Best Performer of the Batch - Aspire Institute</li>
<li>🎓 Best Achiever Award - AIM Institute by CEO Bhupendra Jogi Sir</li>



              </ul>
            </motion.div>

            {/* Fun Facts */}
            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="mr-2 text-primary-500" size={20} />
                Fun Facts
              </h3>
              
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <Coffee className="mr-2 text-secondary-500" size={16} />
                  <span>Fueled by tea and curiosity ☕🍵</span>
                </li>
                <li className="flex items-center">
                  <Laptop className="mr-2 text-secondary-500" size={16} />
                  <span>Built 50+ websites and applications</span>
                </li>
                <li className="flex items-center">
                  <Code className="mr-2 text-secondary-500" size={16} />
                  <span>Love solving algorithm challenges</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;