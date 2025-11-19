"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitcherTabs = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "fr", flag: "🇫🇷", label: "FR" },
    { code: "en", flag: "🇬🇧", label: "EN" },
  ];

  return (
    <div className="relative">
      <motion.div
        className="relative flex items-center gap-1 p-1 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Simple Animated Indicator */}
        <motion.div
          className="absolute top-1 h-[calc(100%-8px)] rounded-md bg-white dark:bg-gray-700"
          animate={{
            left: language === "fr" ? "4px" : "50%",
            width: "calc(50% - 4px)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Tabs */}
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => setLanguage(lang.code as "fr" | "en")}
            className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{lang.flag}</span>
            <span
              className={`text-xs font-bold uppercase transition-colors ${
                language === lang.code
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {lang.label}
            </span>
          </motion.button>
        ))}

      </motion.div>
    </div>
  );
};

export default LanguageSwitcherTabs;
