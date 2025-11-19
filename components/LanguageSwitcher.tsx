"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe } from "react-icons/fi";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "fr", flag: "🇫🇷", label: "Français" },
    { code: "en", flag: "🇬🇧", label: "English" },
  ];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
        className="relative group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 dark:bg-gray-800/60 backdrop-blur-xl border-2 border-white/30 dark:border-gray-700/50 hover:border-white dark:hover:border-nbc-red shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch language"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-nbc-red/20 via-transparent to-nbc-red/20 opacity-0 group-hover:opacity-100"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Globe icon with rotation animation */}
        <motion.div
          className="relative z-10 text-white dark:text-white"
          animate={{ rotate: language === "fr" ? 0 : 180 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <FiGlobe size={18} />
        </motion.div>

        {/* Flag with flip animation */}
        <div className="relative w-7 h-7 flex items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            {languages.map(
              (lang) =>
                language === lang.code && (
                  <motion.span
                    key={lang.code}
                    className="absolute text-2xl"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {lang.flag}
                  </motion.span>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Language code with slide animation */}
        <div className="relative overflow-hidden h-5 w-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              className="absolute text-sm font-bold text-white dark:text-white uppercase tracking-wider"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {language}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-nbc-red/20 blur-xl opacity-0 group-hover:opacity-60 rounded-xl -z-10"
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Tooltip on hover */}
      <motion.div
        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50"
        initial={{ opacity: 0, y: -5 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {languages.find((lang) => lang.code !== language)?.label}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
      </motion.div>
    </motion.div>
  );
};

export default LanguageSwitcher;
