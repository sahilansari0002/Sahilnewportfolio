import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { achievements } from '../../data/achievements';
import Card from '../ui/Card';
import { ExternalLink, X } from 'lucide-react';
import Button from '../ui/Button';
import LoadingImage from '../ui/LoadingImage';
import { register } from 'swiper/element/bundle';

register();

const AchievementsSection = () => {
  const swiperRef = useRef<HTMLDivElement & { 
    initialize: () => void;
    swiper: { 
      slideNext: () => void;
      slideTo: (index: number) => void;
      activeIndex: number;
      slides: { length: number };
    };
  }>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null);

  useEffect(() => {
    // Initialize swiper
    const swiperContainer = swiperRef.current;
    if (swiperContainer) {
      const params = {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: true,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        autoplay: {
          delay: 13000,
          disableOnInteraction: false,
        },
      };

      // Apply parameters
      Object.assign(swiperContainer, params);
      
      // Initialize Swiper
      swiperContainer.initialize();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        const isLastSlide = swiper.activeIndex === swiper.slides.length - 1;
        
        if (isLastSlide) {
          swiper.slideTo(0);
          setActiveIndex(0);
        } else {
          swiper.slideNext();
          setActiveIndex(prev => prev + 1);
        }
      }
    }, 13000);

    return () => clearInterval(interval);
  }, []);

  const selectedAchievementData = achievements.find(a => a.id === selectedAchievement);

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Achievements"
          subtitle="Certifications, awards, and milestones from my professional journey."
        />
        
        <div className="relative">
          <swiper-container
            ref={swiperRef}
            init="false"
            class="!overflow-visible"
          >
            {achievements.map((achievement, index) => (
              <swiper-slide key={achievement.id} class="!h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="h-full"
                >
                  <Card className="h-full">
                    <div className="h-48 overflow-hidden">
                      <LoadingImage 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                      </div>
                      
                      <div className="flex flex-col space-y-2 mb-4">
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {achievement.organization}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {achievement.date}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {achievement.description}
                      </p>
                      
                      <div className="flex space-x-3">
                        <Button 
                          variant="primary"
                          size="sm"
                          onClick={() => setSelectedAchievement(achievement.id)}
                        >
                          View Achievement
                        </Button>
                        
                        {achievement.url && (
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(achievement.url, '_blank')}
                          >
                            View Post
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>

      {/* Achievement Modal */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievementData && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <LoadingImage 
                  src={selectedAchievementData.image} 
                  alt={selectedAchievementData.title}
                  className="w-full h-[400px] object-contain bg-gray-100 dark:bg-gray-700 rounded-t-lg"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white/70 dark:bg-gray-800/70 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setSelectedAchievement(null)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedAchievementData.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {selectedAchievementData.organization}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {selectedAchievementData.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedAchievementData.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;