"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress with smooth acceleration
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Smooth exponential curve
        const increment = prev < 60 ? 8 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    // Hide loader after progress reaches 100%
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#000000]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Circular filling loader */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.1
            }}
          >
            {/* Circle container */}
            <div className="relative w-32 h-32">
              {/* Background circle - subtle border */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-800" />

              {/* Filling effect - uses clip-path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
                <defs>
                  {/* Gradient for the fill */}
                  <linearGradient id="fillGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#e41c23" />
                    <stop offset="100%" stopColor="#ff4d52" />
                  </linearGradient>

                  {/* Clip path that fills from bottom to top */}
                  <clipPath id="fillClip">
                    <motion.rect
                      x="0"
                      y="0"
                      width="128"
                      height="128"
                      initial={{ y: 128 }}
                      animate={{ y: 128 - (128 * progress) / 100 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    />
                  </clipPath>
                </defs>

                {/* Circle that gets filled */}
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="url(#fillGradient)"
                  clipPath="url(#fillClip)"
                />
              </svg>

              {/* Center content - percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.p
                  className="text-2xl font-semibold tabular-nums transition-colors duration-300"
                  style={{
                    color: progress > 50 ? "#ffffff" : "#e41c23",
                  }}
                  key={progress}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Loading text below */}
          <motion.p
            className="mt-8 text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            Chargement en cours
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
