"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LanguageSwitcherToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const languages = [
    { code: "fr", flag: "🇫🇷", label: "Français", shortLabel: "FR" },
    { code: "en", flag: "🇬🇧", label: "English", shortLabel: "EN" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);
  const otherLang = languages.find((lang) => lang.code !== language);

  // Particle effect on click
  const handleClick = () => {
    setLanguage(language === "fr" ? "en" : "fr");

    // Create particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);

    // Remove particles after animation
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.button
        onClick={handleClick}
        className="relative group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-gray-800/60 dark:via-gray-800/40 dark:to-gray-800/60 backdrop-blur-2xl border-2 border-white/30 dark:border-gray-700/50 hover:border-white dark:hover:border-nbc-red shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-visible"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95, rotate: [0, -5, 5, 0] }}
        aria-label={`Switch to ${otherLang?.label}`}
      >
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-nbc-red/20 via-purple-500/10 to-nbc-red/20"
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />

        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />

        {/* Content Container */}
        <div className="relative z-10 flex items-center gap-3">
          {/* Flag Circle with Rotation */}
          <motion.div
            className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
            animate={{ rotate: language === "fr" ? 0 : 180 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-nbc-red/20 to-purple-500/20 rounded-full blur-sm sm:blur-md" />
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                className="text-lg sm:text-2xl relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {currentLang?.flag}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Vertical Divider - Hidden on mobile */}
          <motion.div
            className="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-white/40 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          />

          {/* Language Code with Slide Animation */}
          <div className="relative overflow-hidden w-6 sm:w-8 h-5 sm:h-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-black text-white tracking-wider"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {currentLang?.shortLabel}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Arrow Indicator - Hidden on mobile */}
          <motion.div
            className="hidden sm:block text-white/70 text-xs"
            animate={{ x: isHovered ? 2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ⇄
          </motion.div>
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl sm:rounded-2xl overflow-hidden"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{
            x: "200%",
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        />

        {/* Multiple Glow Layers - Desktop Only */}
        <motion.div
          className="hidden sm:block absolute -inset-2 bg-gradient-to-r from-nbc-red/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 -z-10"
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
            rotate: isHovered ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Inner Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-nbc-red/20 via-purple-500/20 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 -z-10"
          transition={{ duration: 0.3 }}
        />

        {/* Particles on Click */}
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="hidden sm:block absolute w-2 h-2 bg-gradient-to-br from-nbc-red to-purple-500 rounded-full"
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{
                x: particle.x,
                y: particle.y,
                opacity: 0,
                scale: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
      </motion.button>

      {/* Premium Floating Tooltip - Desktop Only */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="hidden sm:block absolute top-full mt-3 left-1/2 -translate-x-1/2 px-5 py-3 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-50 dark:to-white text-white dark:text-gray-900 text-sm font-bold rounded-2xl shadow-2xl whitespace-nowrap z-50 border-2 border-white/10 dark:border-gray-900/10"
            initial={{ opacity: 0, y: -15, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{ opacity: 0, y: -15, scale: 0.8 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            {/* Glow effect around tooltip */}
            <div className="absolute -inset-1 bg-gradient-to-r from-nbc-red/50 to-purple-500/50 rounded-2xl blur-md -z-10" />

            <div className="relative flex items-center gap-3">
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {otherLang?.flag}
              </motion.span>
              <div>
                <div className="text-xs opacity-70 uppercase tracking-wider">Switch to</div>
                <div>{otherLang?.label}</div>
              </div>
            </div>

            {/* Animated Arrow */}
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-50 rotate-45 border-l-2 border-t-2 border-white/10 dark:border-gray-900/10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcherToggle;
