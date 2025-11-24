"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  // Show button when page is scrolled down and detect current section
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect which section is currently in view
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Check initial state

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Define colors based on section background
  const getButtonColors = () => {
    switch (currentSection) {
      case 'about':
        // White background - Red/Blue button
        return {
          bg: 'from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500',
          text: 'text-white',
          glow: 'bg-nbc-red dark:bg-sky-400',
        };
      case 'experience':
        // Red background (light) / Dark blue (dark) - White button
        return {
          bg: 'from-white to-gray-100 dark:from-gray-800 dark:to-gray-900',
          text: 'text-nbc-red dark:text-sky-400',
          glow: 'bg-white dark:bg-gray-800',
        };
      case 'projects':
        // White background (light) / Dark background (dark) - Red/Blue button
        return {
          bg: 'from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500',
          text: 'text-white',
          glow: 'bg-nbc-red dark:bg-sky-400',
        };
      case 'skills':
        // Red background (light) / Dark blue (dark) - White button
        return {
          bg: 'from-white to-gray-100 dark:from-gray-800 dark:to-gray-900',
          text: 'text-nbc-red dark:text-sky-400',
          glow: 'bg-white dark:bg-gray-800',
        };
      case 'contact':
        // White background (light) / Dark background (dark) - Red/Blue button
        return {
          bg: 'from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500',
          text: 'text-white',
          glow: 'bg-nbc-red dark:bg-sky-400',
        };
      default:
        return {
          bg: 'from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500',
          text: 'text-white',
          glow: 'bg-nbc-red dark:bg-sky-400',
        };
    }
  };

  const colors = getButtonColors();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${colors.bg} ${colors.text} shadow-lg hover:shadow-2xl flex items-center justify-center group overflow-hidden transition-colors duration-500`}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Retour en haut"
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Arrow Icon */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowUp size={22} className="relative z-10" />
          </motion.div>

          {/* Glow effect */}
          <motion.div
            className={`absolute inset-0 ${colors.glow} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 -z-10 transition-colors duration-500`}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
