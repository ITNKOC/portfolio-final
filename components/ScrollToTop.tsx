"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-nbc-red dark:to-red-600 text-white shadow-lg hover:shadow-2xl flex items-center justify-center group overflow-hidden"
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
            className="absolute inset-0 bg-nbc-red rounded-2xl blur-lg opacity-0 group-hover:opacity-50 -z-10"
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
