"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LanguageSwitcherToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const languages = [
    { code: "fr", flag: "🇫🇷", label: "Français", shortLabel: "FR" },
    { code: "en", flag: "🇬🇧", label: "English", shortLabel: "EN" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);
  const otherLang = languages.find((lang) => lang.code !== language);

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
        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
        className="relative group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-gray-800/60 dark:via-gray-800/40 dark:to-gray-800/60 backdrop-blur-2xl border-2 border-white/30 dark:border-gray-700/50 hover:border-white dark:hover:border-nbc-red shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-hidden"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
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
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{
            x: "200%",
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-nbc-red/30 via-purple-500/30 to-nbc-red/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 -z-10"
          transition={{ duration: 0.5 }}
        />
      </motion.button>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded-xl shadow-2xl whitespace-nowrap z-50"
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <span>{otherLang?.flag}</span>
              <span>{otherLang?.label}</span>
            </div>
            {/* Arrow */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 dark:bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcherToggle;
