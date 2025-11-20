"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "fr", label: "FR", fullLabel: "Français" },
    { code: "en", label: "EN", fullLabel: "English" },
  ];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border-2 border-gray-200 dark:border-gray-700">
        {/* Animated background slider */}
        <motion.div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-br from-nbc-red to-red-700 dark:from-white dark:to-gray-100 rounded-full shadow-lg"
          animate={{
            x: language === "fr" ? "4px" : "calc(100% + 4px)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* Language buttons */}
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => setLanguage(lang.code as "fr" | "en")}
            className={`relative z-10 px-4 py-2 rounded-full font-bold text-sm transition-colors duration-300 ${
              language === lang.code
                ? "text-white dark:text-gray-900"
                : "text-gray-700 dark:text-gray-300 hover:text-nbc-red dark:hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${lang.fullLabel}`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={language === lang.code ? "active" : "inactive"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {lang.label}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        ))}

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            boxShadow: "0 0 20px rgba(228, 28, 35, 0.3)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;
