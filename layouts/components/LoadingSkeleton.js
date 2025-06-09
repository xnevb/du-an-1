"use client";

import { motion } from "framer-motion";

const LoadingSkeleton = ({ type = "default" }) => {
  const shimmer = {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  };

  if (type === "card") {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <motion.div
          className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
          style={{
            backgroundSize: "200% 100%",
          }}
          {...shimmer}
        />
        <motion.div
          className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4"
          style={{
            backgroundSize: "200% 100%",
          }}
          {...shimmer}
        />
        <motion.div
          className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2"
          style={{
            backgroundSize: "200% 100%",
          }}
          {...shimmer}
        />
      </div>
    );
  }

  if (type === "image") {
    return (
      <motion.div
        className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"
        style={{
          backgroundSize: "200% 100%",
        }}
        {...shimmer}
      />
    );
  }

  return (
    <div className="space-y-3">
      <motion.div
        className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
        style={{
          backgroundSize: "200% 100%",
        }}
        {...shimmer}
      />
      <motion.div
        className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6"
        style={{
          backgroundSize: "200% 100%",
        }}
        {...shimmer}
      />
      <motion.div
        className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-4/6"
        style={{
          backgroundSize: "200% 100%",
        }}
        {...shimmer}
      />
    </div>
  );
};

export default LoadingSkeleton;
