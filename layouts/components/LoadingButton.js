"use client";

import { motion } from "framer-motion";

const LoadingButton = ({ 
  children, 
  isLoading = false, 
  className = "", 
  disabled = false,
  ...props 
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className} ${
        disabled || isLoading ? 'opacity-70 cursor-not-allowed' : ''
      }`}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      {...props}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Button Content */}
      <motion.span
        className={`block transition-opacity duration-200 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default LoadingButton;
