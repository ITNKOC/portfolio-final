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
        className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Select language"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">{currentLang?.flag}</span>
          <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase">
            {currentLang?.code}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown className="text-gray-700 dark:text-gray-300" size={14} />
          </motion.div>
        </div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full mt-2 right-0 min-w-[140px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >

            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "fr" | "en");
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2.5 transition-colors ${
                  language === lang.code
                    ? "bg-gray-100 dark:bg-gray-700"
                    : "hover:bg-gray-50 dark:hover:bg-gray-750"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {lang.nativeName}
                </span>
                {language === lang.code && (
                  <FiCheck className="ml-auto text-nbc-red" size={16} />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcherDropdown;
