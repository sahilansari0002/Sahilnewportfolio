import { motion } from 'framer-motion';

const Loader = () => {
  const name = 'SAHIL ALI'.split('');
  
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 4 }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'auto';
      }}
    >
      <div className="flex space-x-1">
        {name.map((letter, index) => (
          <motion.div
            key={index}
            className="relative text-2xl md:text-3xl font-medium overflow-hidden"
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;