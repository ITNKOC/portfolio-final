"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  // Colors based on theme - soft and fluid
  const fillColor = theme === "dark" ? "#1a2f4d" : "#e41c23";
  const fillColorDark = theme === "dark" ? "#0f1b35" : "#c01017";
  const fillColorLight = theme === "dark" ? "#2a4a6f" : "#ff6b6f";
  const backgroundColor = theme === "dark" ? "#0a0a0a" : "#ffffff";
  const outlineColor = theme === "dark" ? "#1a2332" : "#ffcdd0";

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            backgroundColor: backgroundColor,
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Main container with overflow hidden to prevent any bleeding */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Logo container with strict boundaries */}
            <div className="relative" style={{ width: "600px", height: "300px" }}>
              {/* SVG with proper viewBox and overflow hidden */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 300"
                style={{ overflow: "hidden" }}
              >
                <defs>
                  {/* Liquid gradient for filled portion */}
                  <linearGradient id="liquidGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor={fillColorDark} stopOpacity="1" />
                    <stop offset="30%" stopColor={fillColor} stopOpacity="1" />
                    <stop offset="60%" stopColor={fillColorLight} stopOpacity="1" />
                    <stop offset="100%" stopColor={fillColor} stopOpacity="1" />
                  </linearGradient>

                  {/* Mask for the text shape */}
                  <mask id="textMask">
                    <rect x="0" y="0" width="600" height="300" fill="black" />
                    <text
                      x="300"
                      y="180"
                      textAnchor="middle"
                      fontFamily="'Fira Code', 'Monaco', 'Courier New', monospace"
                      fontWeight="800"
                      fontSize="140"
                      fill="white"
                    >
                      &lt;KD/&gt;
                    </text>
                  </mask>

                  {/* Clip path for filling effect - strictly contained */}
                  <clipPath id="fillClip">
                    <rect
                      x="0"
                      y={300 - (progress * 3)}
                      width="600"
                      height={progress * 3}
                    />
                  </clipPath>

                  {/* Subtle inner glow - no overflow */}
                  <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                    <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                    <feFlood floodColor={fillColorLight} floodOpacity="0.5" />
                    <feComposite in2="offsetBlur" operator="in" />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background outline - unfilled */}
                <text
                  x="300"
                  y="180"
                  textAnchor="middle"
                  fontFamily="'Fira Code', 'Monaco', 'Courier New', monospace"
                  fontWeight="800"
                  fontSize="140"
                  fill="none"
                  stroke={outlineColor}
                  strokeWidth="3"
                  opacity="0.4"
                />

                {/* Container for liquid fill - strictly masked */}
                <g mask="url(#textMask)" clipPath="url(#fillClip)">
                  {/* Main liquid fill */}
                  <rect
                    x="0"
                    y="0"
                    width="600"
                    height="300"
                    fill="url(#liquidGradient)"
                  />

                  {/* Animated liquid wave surface - smooth and contained */}
                  <g>
                    {/* First wave layer */}
                    <motion.path
                      initial={{ d: "M0,0 Q150,-8 300,0 T600,0 L600,300 L0,300 Z" }}
                      animate={{
                        d: [
                          "M0,0 Q150,-8 300,0 T600,0 L600,300 L0,300 Z",
                          "M0,0 Q150,8 300,0 T600,0 L600,300 L0,300 Z",
                          "M0,0 Q150,-8 300,0 T600,0 L600,300 L0,300 Z",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      fill={fillColorLight}
                      opacity="0.6"
                      style={{
                        transform: `translateY(${300 - (progress * 3)}px)`,
                      }}
                    />

                    {/* Second wave layer - offset for depth */}
                    <motion.path
                      initial={{ d: "M0,5 Q150,0 300,5 T600,5 L600,300 L0,300 Z" }}
                      animate={{
                        d: [
                          "M0,5 Q150,0 300,5 T600,5 L600,300 L0,300 Z",
                          "M0,5 Q150,10 300,5 T600,5 L600,300 L0,300 Z",
                          "M0,5 Q150,0 300,5 T600,5 L600,300 L0,300 Z",
                        ],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      fill={fillColor}
                      opacity="0.4"
                      style={{
                        transform: `translateY(${300 - (progress * 3)}px)`,
                      }}
                    />

                    {/* Subtle shimmer on liquid surface */}
                    <motion.ellipse
                      cx="300"
                      cy="0"
                      rx="80"
                      ry="8"
                      fill="white"
                      opacity="0"
                      animate={{
                        opacity: progress > 5 && progress < 95 ? [0, 0.3, 0] : 0,
                        rx: [60, 100, 60],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        transform: `translateY(${300 - (progress * 3)}px)`,
                      }}
                    />
                  </g>
                </g>

                {/* Crisp text outline on top for definition */}
                <text
                  x="300"
                  y="180"
                  textAnchor="middle"
                  fontFamily="'Fira Code', 'Monaco', 'Courier New', monospace"
                  fontWeight="800"
                  fontSize="140"
                  fill="none"
                  stroke={fillColor}
                  strokeWidth="1"
                  opacity="0.2"
                />
              </svg>
            </div>

            {/* Progress percentage below - clean and simple */}
            <motion.div
              className="mt-12 flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {/* Percentage */}
              <motion.div
                key={progress}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                <p
                  className="text-5xl font-bold tabular-nums"
                  style={{
                    fontFamily: "'Fira Code', 'Monaco', 'Courier New', monospace",
                    color: fillColor,
                    textShadow: `0 2px 12px ${fillColor}40`,
                  }}
                >
                  {progress}%
                </p>
              </motion.div>

              {/* Loading text */}
              <motion.p
                className="text-sm font-medium tracking-wider uppercase"
                style={{
                  fontFamily: "'Fira Code', 'Monaco', 'Courier New', monospace",
                  color: fillColor,
                  opacity: 0.7,
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Chargement en cours
              </motion.p>

              {/* Minimal animated dots */}
              <div className="flex space-x-2">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: fillColor,
                    }}
                    animate={{
                      scale: [0.7, 1, 0.7],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: dot * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Bottom progress bar - clean and contained */}
            <motion.div
              className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-96 h-1 rounded-full overflow-hidden"
              style={{
                backgroundColor: theme === "dark" ? "#1a1a1a" : "#f0f0f0",
              }}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "384px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${fillColorDark}, ${fillColor}, ${fillColorLight}, ${fillColor}, ${fillColorDark})`,
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
