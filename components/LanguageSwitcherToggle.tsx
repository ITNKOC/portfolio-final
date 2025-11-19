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

  const handleClick = () => {
    setLanguage(language === "fr" ? "en" : "fr");
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
        className="relative group flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${otherLang?.label}`}
      >

        {/* Simple Content */}
        <div className="flex items-center gap-2">
          {/* Flag with simple animation */}
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              className="text-xl sm:text-2xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {currentLang?.flag}
            </motion.span>
          </AnimatePresence>

          {/* Language Code */}
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {currentLang?.shortLabel}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.button>

      {/* Simple Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="hidden sm:block absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap z-50"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
          >
            {otherLang?.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcherToggle;
