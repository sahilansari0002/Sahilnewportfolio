import { useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LoadingImage = ({ src, alt, className = '' }: LoadingImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <motion.div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-gray-300 dark:text-gray-600 animate-spin" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
                fill="none"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </motion.div>
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default LoadingImage;