"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";
import { getTranslatedPersonalInfo } from "@/lib/translatedData";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import StarField from "./StarField";

const Hero = () => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const personalInfo = getTranslatedPersonalInfo(language);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex md:items-center items-end justify-center overflow-hidden bg-nbc-red dark:bg-gradient-to-b dark:from-[#0a1929] dark:via-[#0c2d48] dark:to-[#0a1f3a]"
    >
      {/* Starfield for Dark Mode */}
      {theme === "dark" && (
        <div className="absolute inset-0 z-0">
          <StarField />
        </div>
      )}

      {/* Background Image - Desktop SVG (Morning/Night versions) */}
      <div className="absolute inset-0 z-[5]" style={{ isolation: "isolate" }}>
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top] xs:bg-[center_10%] sm:bg-center md:!bg-[center_20%]"
          style={{
            backgroundImage:
              theme === "dark"
                ? "url('/hero/hero night.svg')"
                : "url('/hero/hero morning.svg')",
            backgroundSize: "cover",
            mixBlendMode: "normal",
            opacity: 1,
          }}
        />
      </div>

      {/* Gradient Overlay - Only for light mode to make text readable */}
      <div className="absolute inset-0 z-[6] bg-gradient-to-b from-transparent via-black/30 to-black/80 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none transition-all duration-500" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 xs:pb-16 sm:pb-20 pt-[35vh] xs:pt-[40vh] sm:pt-32 md:pt-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with Professional Animation */}
        <motion.div
          variants={itemVariants}
          className="mb-4 xs:mb-6 md:mb-8 relative"
        >
          <motion.p
            className="text-white text-sm xs:text-base md:text-lg md:hidden font-semibold mb-3 xs:mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.hero.greeting}
          </motion.p>

          {/* Main Name - Split for Desktop, Centered for Mobile */}
          <div className="relative w-full md:mt-40">
            {/* Desktop: Split Name Layout */}
            <div className="hidden md:flex md:justify-between md:items-center md:w-full md:px-0 lg:px-0">
              {/* First Name - Left with Fixed Offset */}
              <motion.h1
                className="text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white drop-shadow-2xl"
                style={{ transform: "translateX(-120px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                KOCEILA
              </motion.h1>

              {/* Last Name - Right with Fixed Offset */}
              <motion.h1
                className="text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white drop-shadow-2xl"
                style={{ transform: "translateX(250px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                DJABALLAH
              </motion.h1>
            </div>

            {/* Mobile: Centered Name - Optimized for small phones */}
            <div className="md:hidden flex flex-col items-center justify-center space-y-1 xs:space-y-2 sm:space-y-3 px-4">
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                KOCEILA
              </motion.h1>
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                }}
              >
                DJABALLAH
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Short Description - Optimized for small phones */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-white/95 text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed px-4 xs:px-6 mb-4 xs:mb-6 sm:mb-8 md:mb-10 md:mt-[200px] drop-shadow-lg text-center"
        >
          {t.hero.description}{" "}
          <span className="text-white font-bold">{t.hero.descriptionBold}</span>
        </motion.p>

        {/* Premium CTA Buttons - Desktop Only */}
        <motion.div
          variants={itemVariants}
          className="hidden md:flex flex-wrap justify-center gap-6 mb-12"
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 rounded-2xl overflow-hidden shadow-premium-hover"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-nbc-red via-nbc-redLight to-nbc-red dark:from-sky-400 dark:via-cyan-400 dark:to-sky-500 bg-[length:200%_100%] animate-gradient-shift" />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Button content */}
            <div className="relative flex items-center space-x-3 text-white font-bold tracking-wide">
              <FiMail className="group-hover:animate-bounce" size={20} />
              <span>{t.hero.cta1}</span>
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-nbc-red/50 dark:bg-sky-400/50 blur-xl opacity-0 group-hover:opacity-50"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Button content */}
            <div className="relative flex items-center space-x-3 text-white font-bold tracking-wide">
              <span>{t.hero.cta2}</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </motion.a>
        </motion.div>

        {/* Premium Social Links - Optimized for small phones */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6 mb-6 xs:mb-8 sm:mb-12 px-4"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white group shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiGithub
              size={24}
              className="relative z-10 text-white transition-colors"
            />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white group shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: -5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiLinkedin
              size={24}
              className="relative z-10 text-white transition-colors"
            />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="relative p-3 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white group shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiMail
              size={24}
              className="relative z-10 text-white transition-colors"
            />
          </motion.a>
          <motion.a
            href="/cv/CV_KOCEILA_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-3 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: -5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 text-white text-xl font-bold">
              CV
            </span>
          </motion.a>
        </motion.div>

        {/* Premium Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 xs:gap-3"
        >
          <motion.p
            className="text-[10px] xs:text-xs sm:text-sm text-white/70 font-medium tracking-wider uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t.hero.scrollDown}
          </motion.p>
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="relative p-2 xs:p-3 sm:p-4 rounded-xl xs:rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white shadow-lg hover:shadow-2xl overflow-hidden group"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiArrowDown
              size={20}
              className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 relative z-10 text-white"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
