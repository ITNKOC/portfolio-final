"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

const LanguageSwitcherDropdown = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "fr", flag: "🇫🇷", label: "Français", nativeName: "Français" },
    { code: "en", flag: "🇬🇧", label: "English", nativeName: "English" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/60 dark:to-gray-800/40 backdrop-blur-2xl border-2 border-white/30 dark:border-gray-700/50 hover:border-white dark:hover:border-nbc-red shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-nbc-red/10 via-transparent to-nbc-red/10 rounded-2xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          {/* Flag */}
          <motion.span
            className="text-lg sm:text-2xl"
            animate={{ rotate: isOpen ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentLang?.flag}
          </motion.span>

          {/* Language Name - Hidden on very small screens */}
          <span className="hidden xs:block text-xs sm:text-sm font-bold text-white tracking-wide">
            {currentLang?.nativeName}
          </span>

          {/* Short code for very small screens */}
          <span className="xs:hidden text-xs font-bold text-white tracking-wider">
            {currentLang?.code.toUpperCase()}
          </span>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="text-white/70" size={14} />
          </motion.div>
        </div>

        {/* Enhanced Glow - Desktop */}
        <motion.div
          className="hidden sm:block absolute -inset-2 bg-gradient-to-r from-nbc-red/40 via-purple-500/40 to-blue-500/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-80 -z-10"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Mobile Glow */}
        <motion.div
          className="sm:hidden absolute -inset-1 bg-gradient-to-r from-nbc-red/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 -z-10"
          transition={{ duration: 0.5 }}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full mt-2 right-0 min-w-[160px] sm:min-w-[200px] bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Enhanced Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-gray-800/50 dark:via-gray-800/30 dark:to-transparent pointer-events-none" />

            {/* Animated border gradient - Desktop only */}
            <motion.div
              className="hidden sm:block absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(239, 68, 68, 0.2) 50%, transparent 100%)",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "fr" | "en");
                  setIsOpen(false);
                }}
                className={`relative w-full flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 transition-all duration-300 ${
                  language === lang.code
                    ? "bg-gradient-to-r from-nbc-red/20 to-purple-500/10 dark:from-nbc-red/30 dark:to-purple-500/20"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Flag */}
                  <motion.span
                    className="text-lg sm:text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {lang.flag}
                  </motion.span>

                  {/* Language Info */}
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {lang.nativeName}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      {lang.label}
                    </div>
                  </div>
                </div>

                {/* Check Icon */}
                <AnimatePresence>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <FiCheck className="text-nbc-red" size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Enhanced Hover indicator - Desktop */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-nbc-red via-purple-500 to-blue-500"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileHover={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Glow on hover - Desktop only */}
                <motion.div
                  className="hidden sm:block absolute inset-0 bg-gradient-to-r from-nbc-red/10 to-purple-500/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcherDropdown;
