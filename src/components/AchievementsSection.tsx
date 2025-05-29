import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const achievements: Achievement[] = [

   {
    id: 13,
    title: 'Top 1000 - SBI Youth Ideathon 2025',
    description: 'Selected among the Top 1000 teams out of 44,000+ participants across India for the SBI Youth Ideathon 2025. Represented our team with the slogan "Nayi Soch, Naya Bharat" at the Grand Finale held at the IIT Delhi campus.',
    image: '/achievement/iit with cert.jpg',
    date: '2025',
    category: 'Innovation & Ideathons'
  },

  {
    id: 14,
    title: 'Google Cloud Arcade Champion',
    description: 'Achieved the Champion Milestone in the Google Cloud Arcade event. Received exclusive gifts and recognition from Google Cloud for outstanding performance and completing all tasks successfully.',
    image: '/achievement/champinion.jpg',
    date: '2025',
    category: 'Cloud & Certifications'
  },
  

  {
    id: 15,
    title: 'Best Performer of the Batch - Aspire Institute',
    description: 'Honored as the Best Performer of the Batch at Aspire: The Institute of Human Development for outstanding growth, active participation, and leadership throughout the personality development journey. Recognized for excellence in communication, confidence, and contribution to peer learning.',
    image: '/achievement/aspire medel.jpg', // Replace this with actual hosted image URL
    date: '2024',
    category: 'Leadership & Personality'
  },

  
  {
    id: 12,
    title: 'Best Achiever Award - AIM Institute',
    description: 'Honored with the Best Achiever Award at AIM Institute by CEO Bhupendra Jogi Sir, recognizing consistent performance and dedication towards personal and professional growth.',
    image: '/achievement/jogisir.jpg',
    date: '2025',
    category: 'Awards'
  },
  
  {
    id: 1,
    title: 'Reliance Foundation Scholar',
    description: 'Awarded the prestigious Reliance Foundation Scholarship for academic excellence and contributions to technology and innovation.',
    image: '/achievement/reliance.jpg',
    date: '2022',
    category: 'Scholarship'
  },
  {
    id: 2,
    title: 'Winner - MSINS Startup Innovation Challenge',
    description: 'Secured ₹1 Lakh prize at the Maharashtra State Innovation Society (MSINS) Startup Innovation Challenge for developing a tech-driven solution.',
    image: '/achievement/1 lakh.jpg',
    date: '2023',
    category: 'Startup'
  },
  {
    id: 3,
    title: 'Top 15 - National Hackathon (Pune)',
    description: 'Achieved a Top 15 rank in a national-level hackathon in Pune, showcasing innovative problem-solving skills in software development.',
    image: '/achievement/hackethong 2.jpg',
    date: '2023',
    category: 'Hackathon'
  },
  {
    id: 4,
    title: 'Selected for TiE Global Summit 2024',
    description: 'Chosen among the Top 300 students from the Futurepreneur Course to attend the TiE Global Summit 2024 at Bangalore International Exhibition Center (BIEC).',
    image: '/achievement/tie.jpg',
    date: '2024',
    category: 'Entrepreneurship'
  },

  {
    id: 10,
    title: 'Selected for Startup Mahakumbh 2024',
    description: 'Sponsored by the Government of Maharashtra to attend Startup Mahakumbh in New Delhi, gaining exposure to India’s top entrepreneurial ecosystem.',
    image: '/achievement/startup.jpg',
    date: '2024',
    category: 'Entrepreneurship'
  },

    {
    id: 11,
    title: 'Attended Startup Mahakumbh 2.0 (2025)',
    description: 'Represented at Startup Mahakumbh 2.0 held at Bharat Mandapam, New Delhi from April 3rd to 5th, 2025. Gained exposure to India’s top entrepreneurial ecosystem and innovations.',
    image: '/achievement/startup maha25.jpg',
    date: '2025',
    category: 'Entrepreneurship'
  },  

  {
    id: 5,
    title: 'Google Cloud Gen AI Quiz Winner',
    description: 'Secured a top 5 rank in the Google Cloud Gen AI Quiz, demonstrating expertise in cloud computing and generative AI technologies.',
    image: '/achievement/quiz.png',
    date: '2024',
    category: 'Certification'
  },
  {
    id: 6,
    title: 'Volunteer - ISRO Bharatiya Antariksh Hackathon 2024',
    description: 'Selected as a volunteer for the ISRO Bharatiya Antariksh Hackathon, contributing to space-tech innovation and mentorship.',
    image: '/achievement/isro 1.jpg',
    date: '2024',
    category: 'Hackathon'
  },
  {
    id: 7,
    title: 'Best Modal Presentation Award',
    description: 'Awarded for outstanding performance in a model presentation competition at Smt. Maherbano College in 2023.',
    image: '/achievement/project.jpg',
    date: '2024',
    category: 'Competition'
  },
  {
    id: 8,
    title: 'Social Media Contest Winner - Google Cloud Community Day Pune',
    description: 'Won the social media contest at Google Cloud Community Day Pune 2024 for engagement and contributions to cloud computing awareness.',
    image: '/achievement/pune.jpg',
    date: '2024',
    category: 'Community'
  },
  {
    id: 9,
    title: 'DevFest Pune 2024 Ticket Giveaway Winner',
    description: 'Selected as a lucky winner for the DevFest Pune 2024 ticket giveaway, gaining an opportunity to attend one of the biggest developer conferences.',
    image: '/achievement/devfest.jpg',
    date: '2024',
    category: 'Event'
  }
];

const AchievementsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const swiperRef = useRef<any>(null);

  return (
    <section id="achievements" ref={ref} className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions, awards, and milestones that highlight my journey and expertise in the tech industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {achievements.map((achievement) => (
              <SwiperSlide key={achievement.id}>
                <div className="card h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {achievement.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start mb-4">
                      <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3">
                        {achievement.category === 'Hackathon' ? (
                          <Trophy size={20} />
                        ) : (
                          <Award size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.date}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 flex-grow">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-dark-200 rounded-full p-3 shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors duration-300 hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 translate-x-1/2 bg-white dark:bg-dark-200 rounded-full p-3 shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors duration-300 hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;