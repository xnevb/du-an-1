"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-theme-light/20 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-white text-2xl font-bold">GS</span>
          </motion.div>
          
          <motion.h2
            className="text-2xl font-bold text-dark mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Gia Sư Sinh Viên
          </motion.h2>
          
          <motion.p
            className="text-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Đang tải nội dung...
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 mx-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 256, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          
          <motion.div
            className="text-sm text-text font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            {progress}%
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0
                  ? 'rgba(10, 168, 167, 0.3)'
                  : i % 3 === 1
                  ? 'rgba(255, 107, 107, 0.3)'
                  : 'rgba(78, 205, 196, 0.3)',
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Rotating Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-32 h-32 border-2 border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-24 h-24 border-2 border-secondary/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
