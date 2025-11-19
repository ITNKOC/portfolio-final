"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { personalInfo } from "@/lib/data";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
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
    <section id="home" className="relative min-h-screen flex md:items-center items-end justify-center overflow-hidden bg-nbc-red dark:bg-gray-900">
      {/* Background Image - Desktop SVG (No BG versions) */}
      <div className="absolute inset-0 z-0" style={{ isolation: 'isolate' }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: theme === 'dark'
              ? "url('/hero/hero desktop no bg night.svg')"
              : "url('/hero/hero desktop no bg.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'normal',
          }}
        />
      </div>

      {/* Gradient Overlay - Dark from top to bottom */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/20 to-black/60 dark:from-transparent dark:via-black/30 dark:to-black/70 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-24 md:pt-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with Professional Animation */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <motion.p
            className="text-white text-lg md:hidden font-semibold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bonjour, je suis
          </motion.p>

          {/* Main Name - Split for Desktop, Centered for Mobile */}
          <div className="relative w-full">
            {/* Desktop: Split Name Layout */}
            <div className="hidden md:flex md:justify-between md:items-center md:w-full md:px-0 lg:px-0">
              {/* First Name - Left with Fixed Offset */}
              <motion.h1
                className="text-6xl lg:text-8xl font-bold uppercase tracking-tight text-white drop-shadow-2xl"
                style={{ transform: "translateX(-60px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                KOCEILA
              </motion.h1>

              {/* Last Name - Right with Fixed Offset */}
              <motion.h1
                className="text-6xl lg:text-8xl font-bold uppercase tracking-tight text-white drop-shadow-2xl"
                style={{ transform: "translateX(170px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                DJABALLAH
              </motion.h1>
            </div>

            {/* Mobile: Centered Name */}
            <div className="md:hidden flex flex-col items-center justify-center space-y-3 px-4">
              <motion.h1
                className="text-4xl sm:text-5xl font-display font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                KOCEILA
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl font-display font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
              >
                DJABALLAH
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Short Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-white/95 text-sm sm:text-base md:text-xl leading-relaxed px-6 mb-8 md:mb-10 md:mt-[102px] drop-shadow-lg text-center"
        >
          Développeur Full Stack & Expert IA | Je transforme des idées en <span className="text-white font-bold">applications performantes</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-nbc-red via-nbc-redLight to-nbc-red bg-[length:200%_100%] animate-gradient-shift" />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Button content */}
            <div className="relative flex items-center space-x-3 text-white font-bold tracking-wide">
              <FiMail className="group-hover:animate-bounce" size={20} />
              <span>TRAVAILLONS ENSEMBLE</span>
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-nbc-red/50 blur-xl opacity-0 group-hover:opacity-50"
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
                background: "linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Button content */}
            <div className="relative flex items-center space-x-3 text-white font-bold tracking-wide">
              <span>VOIR MES PROJETS</span>
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

        {/* Premium Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-4 sm:space-x-6 mb-12 px-4">
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white group shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiGithub size={24} className="relative z-10 text-white transition-colors" />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white group shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: -5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiLinkedin size={24} className="relative z-10 text-white transition-colors" />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white group shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiMail size={24} className="relative z-10 text-white transition-colors" />
          </motion.a>
          <motion.a
            href="/cv/CV_KOCEILA_1.pdf"
            download="CV_Koceila_Djaballah.pdf"
            className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white group shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.15, rotate: -5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiDownload size={24} className="relative z-10 text-white transition-colors" />
          </motion.a>
        </motion.div>

        {/* Premium Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3"
        >
          <motion.p
            className="text-sm text-white/70 font-medium tracking-wider uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll pour découvrir
          </motion.p>
          <motion.a
            href="#about"
            className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white shadow-lg hover:shadow-2xl overflow-hidden group"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <FiArrowDown size={24} className="relative z-10 text-white" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
