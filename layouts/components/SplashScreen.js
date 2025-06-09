"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "Khởi tạo hệ thống...",
    "Tải dữ liệu gia sư...",
    "Chuẩn bị giao diện...",
    "Hoàn tất!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="text-center text-white relative z-10">
        {/* Main Logo Animation */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/30"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.6)",
                "0 0 20px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span 
              className="text-4xl font-bold"
              animate={{ 
                scale: [1, 1.1, 1],
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              GS
            </motion.span>
          </motion.div>
          
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Gia Sư Sinh Viên
          </motion.h1>
          
          <motion.p
            className="text-xl opacity-90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Kết nối tri thức - Nâng tầm tương lai
          </motion.p>
        </motion.div>

        {/* Loading Steps */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-center space-x-3 ${
                index <= currentStep ? 'opacity-100' : 'opacity-40'
              }`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: index <= currentStep ? 1 : 0.4 
              }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  index < currentStep 
                    ? 'bg-green-400' 
                    : index === currentStep 
                    ? 'bg-white' 
                    : 'bg-white/30'
                }`}
                animate={index === currentStep ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                } : {}}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <span className="text-lg">{step}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-8 w-80 mx-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 320, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="bg-white/20 rounded-full h-1 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="bg-white h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.5, 1],
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
      </div>
    </motion.div>
  );
};

export default SplashScreen;
