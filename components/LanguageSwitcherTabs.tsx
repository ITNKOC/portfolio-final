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
        className="relative flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/60 dark:to-gray-800/40 backdrop-blur-2xl border-2 border-white/30 dark:border-gray-700/50 shadow-lg sm:shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Indicator */}
        <motion.div
          className="absolute top-1 sm:top-1.5 h-[calc(100%-8px)] sm:h-[calc(100%-12px)] rounded-lg sm:rounded-xl bg-gradient-to-r from-nbc-red to-purple-500 shadow-lg"
          animate={{
            left: language === "fr" ? "4px" : "50%",
            width: language === "fr" ? "calc(50% - 4px)" : "calc(50% - 4px)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Tabs */}
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => setLanguage(lang.code as "fr" | "en")}
            className="relative z-10 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${lang.label}`}
          >
            {/* Flag */}
            <motion.span
              className="text-base sm:text-xl"
              animate={{
                scale: language === lang.code ? 1.2 : 1,
                rotate: language === lang.code ? [0, -10, 10, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: language === lang.code ? Infinity : 0,
                repeatDelay: 2,
              }}
            >
              {lang.flag}
            </motion.span>

            {/* Label */}
            <motion.span
              className={`text-xs sm:text-sm font-black tracking-wider transition-colors duration-300 ${
                language === lang.code
                  ? "text-white"
                  : "text-white/50 dark:text-gray-400"
              }`}
            >
              {lang.label}
            </motion.span>

            {/* Active indicator dot */}
            {language === lang.code && (
              <motion.div
                className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}

        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-nbc-red/30 via-purple-500/30 to-nbc-red/30 rounded-2xl blur-xl opacity-50 -z-10" />
      </motion.div>
    </div>
  );
};

export default LanguageSwitcherTabs;
