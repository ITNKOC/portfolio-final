"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700 hover:border-nbc-red dark:hover:border-nbc-red transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Switch language"
    >
      {/* Flag icons */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        <motion.span
          className="absolute text-xl"
          initial={{ opacity: language === "fr" ? 1 : 0, scale: language === "fr" ? 1 : 0 }}
          animate={{ opacity: language === "fr" ? 1 : 0, scale: language === "fr" ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          🇫🇷
        </motion.span>
        <motion.span
          className="absolute text-xl"
          initial={{ opacity: language === "en" ? 1 : 0, scale: language === "en" ? 1 : 0 }}
          animate={{ opacity: language === "en" ? 1 : 0, scale: language === "en" ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          🇬🇧
        </motion.span>
      </div>

      {/* Language code */}
      <span className="text-sm font-semibold text-gray-800 dark:text-white uppercase">
        {language}
      </span>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-nbc-red/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
      />
    </motion.button>
  );
};

export default LanguageSwitcher;
