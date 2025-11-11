"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiMapPin, FiZap, FiShoppingCart } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Grid Background - Dark mode only */}
      <div className="absolute inset-0 cyber-grid opacity-0 dark:opacity-20 transition-opacity duration-500"></div>

      {/* Glowing Orbs - Dark mode only */}
      <div className="hidden dark:block absolute top-20 left-10 w-72 h-72 bg-cyber-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="hidden dark:block absolute bottom-20 right-10 w-96 h-96 bg-cyber-primary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      <div className="hidden dark:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with Spectacular Animation */}
        <motion.div variants={itemVariants} className="mb-6 relative">
          <motion.p
            className="text-light-rose dark:text-cyber-primary text-lg md:text-xl font-mono mb-2 matrix-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            &gt; Yo! Je suis
          </motion.p>

          {/* Main Name with Multiple Effects */}
          <div className="relative inline-block preserve-3d">
            {/* Light Mode: Elegant Gradient Waves */}
            <div className="absolute -inset-10 overflow-hidden pointer-events-none dark:hidden">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`light-wave-${i}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 90, 180]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 2,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: `conic-gradient(from ${i * 120}deg, transparent, rgba(30, 58, 138, 0.1), transparent)`,
                    borderRadius: "50%"
                  }}
                />
              ))}
            </div>

            {/* Light Mode: Elegant Blue Glow */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-20 dark:hidden"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "radial-gradient(ellipse, rgba(30, 58, 138, 0.3) 0%, transparent 70%)"
              }}
            />

            {/* Light Mode: Particles Floating */}
            <div className="absolute -inset-20 overflow-hidden pointer-events-none dark:hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`light-particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-light-rose"
                  initial={{
                    x: `${20 + (i * 10)}%`,
                    y: "100%",
                    opacity: 0
                  }}
                  animate={{
                    y: ["-20%", "-100%"],
                    opacity: [0, 0.6, 0],
                    x: `${20 + (i * 10) + Math.sin(i) * 10}%`
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>

            {/* Matrix Rain Particles - Dark Mode Only */}
            <div className="absolute -inset-20 overflow-hidden pointer-events-none hidden dark:block">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-cyber-primary font-mono text-xs opacity-30"
                  initial={{
                    x: `${Math.random() * 100}%`,
                    y: -20,
                    opacity: 0
                  }}
                  animate={{
                    y: "120%",
                    opacity: [0, 0.6, 0.3, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "linear"
                  }}
                  style={{
                    left: `${(i * 8) % 100}%`
                  }}
                >
                  {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
                </motion.div>
              ))}
            </div>

            {/* Animated Background Glow - Dark Mode Only */}
            <motion.div
              className="absolute inset-0 blur-2xl hidden dark:block pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.5, 0.3, 0.5],
                scale: [0.8, 1.2, 1, 1.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                background: "radial-gradient(circle, rgba(0,255,65,0.4) 0%, transparent 70%)"
              }}
            />

            {/* Scan Line Effect */}
            <motion.div
              className="absolute inset-0 hidden dark:block pointer-events-none"
              initial={{ y: "-100%" }}
              animate={{ y: "200%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1
              }}
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(0,255,65,0.3), transparent)",
                height: "20%"
              }}
            />

            {/* Name - Letter by Letter Animation */}
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-4 uppercase tracking-tight">
              {personalInfo.name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-gray-900 dark:text-white relative"
                  initial={{
                    opacity: 0,
                    y: -50,
                    rotateX: -90,
                    scale: 0
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    display: char === ' ' ? 'inline' : 'inline-block',
                    width: char === ' ' ? '0.3em' : 'auto'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}

                  {/* Light Mode: Elegant Blue Gradient Shimmer */}
                  <motion.span
                    className="absolute inset-0 dark:hidden bg-gradient-to-r from-transparent via-light-rose to-transparent bg-clip-text text-transparent opacity-0"
                    animate={{
                      opacity: [0, 0.7, 0],
                      backgroundPosition: ["-200%", "200%"]
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.05 + 0.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    style={{
                      backgroundSize: "200% 100%"
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>

                  {/* Dark Mode: Individual Letter Glow */}
                  <motion.span
                    className="absolute inset-0 hidden dark:block text-cyber-primary opacity-0"
                    animate={{
                      opacity: [0, 0.8, 0],
                      textShadow: [
                        "0 0 5px #00FF41",
                        "0 0 20px #00FF41, 0 0 40px #00FF41",
                        "0 0 5px #00FF41"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.05 + 1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </motion.span>
              ))}

              {/* Light Mode: Elegant Underline Animation */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 dark:hidden"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: personalInfo.name.length * 0.05 + 0.3,
                  ease: "easeOut"
                }}
                style={{
                  background: "linear-gradient(90deg, transparent, #1E3A8A, #3B82F6, #1E3A8A, transparent)",
                  transformOrigin: "left"
                }}
              />
            </h1>

            {/* Light Mode: Elegant Border Shine */}
            <motion.div
              className="absolute -inset-3 rounded-xl dark:hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                boxShadow: [
                  "0 0 0px rgba(30, 58, 138, 0)",
                  "0 0 30px rgba(30, 58, 138, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)",
                  "0 0 0px rgba(30, 58, 138, 0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
              style={{
                border: "2px solid transparent",
                background: "linear-gradient(90deg, transparent, rgba(30, 58, 138, 0.2), transparent) border-box",
                WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude"
              }}
            />

            {/* Light Mode: Soft Wave Rings */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`light-wave-ring-${index}`}
                className="absolute inset-0 rounded-xl border-2 dark:hidden pointer-events-none"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 1.3, 1.6],
                  opacity: [0.3, 0.15, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 1,
                  ease: "easeOut"
                }}
                style={{
                  borderColor: "rgba(30, 58, 138, 0.3)"
                }}
              />
            ))}

            {/* Glitch Clone Layers - Dark Mode Only */}
            <motion.div
              className="absolute inset-0 hidden dark:block pointer-events-none text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-cyber-primary uppercase tracking-tight"
              animate={{
                x: [0, -2, 2, -2, 0],
                opacity: [0, 0.5, 0.3, 0.7, 0]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3,
                times: [0, 0.2, 0.4, 0.6, 1]
              }}
              style={{ mixBlendMode: "screen" }}
            >
              {personalInfo.name.toUpperCase()}
            </motion.div>

            {/* Electric Border Pulse - Dark Mode Only */}
            <motion.div
              className="absolute -inset-4 rounded-lg border-2 border-cyber-primary hidden dark:block pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.95, 1.05, 1.15]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />

            {/* Energy Wave Rings - Dark Mode Only */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`wave-${index}`}
                className="absolute inset-0 rounded-lg border border-cyber-primary/30 hidden dark:block pointer-events-none"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.5, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.6,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Light Mode: Corner Accent Dots */}
            <div className="absolute inset-0 pointer-events-none dark:hidden">
              {[
                { top: -4, left: -4 },
                { top: -4, right: -4 },
                { bottom: -4, left: -4 },
                { bottom: -4, right: -4 }
              ].map((pos, i) => (
                <motion.div
                  key={`light-dot-${i}`}
                  className="absolute w-3 h-3 bg-light-rose rounded-full"
                  style={pos}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                    boxShadow: [
                      "0 0 5px rgba(30, 58, 138, 0.3)",
                      "0 0 15px rgba(59, 130, 246, 0.5)",
                      "0 0 5px rgba(30, 58, 138, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Light Mode: Elegant Light Sweep */}
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none dark:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(30, 58, 138, 0.15) 50%, transparent 100%)",
                width: "40%"
              }}
            />

            {/* Corner Energy Sparks - Dark Mode Only */}
            <div className="absolute inset-0 pointer-events-none hidden dark:block">
              {[
                { top: -2, left: -2 },
                { top: -2, right: -2 },
                { bottom: -2, left: -2 },
                { bottom: -2, right: -2 }
              ].map((pos, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute w-2 h-2 bg-cyber-primary rounded-full"
                  style={pos}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                    boxShadow: [
                      "0 0 5px #00FF41",
                      "0 0 15px #00FF41, 0 0 25px #00FF41",
                      "0 0 5px #00FF41"
                    ]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.25
                  }}
                />
              ))}
            </div>

            {/* Holographic Shimmer Overlay - Dark Mode Only */}
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none hidden dark:block"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(0,255,65,0.2) 50%, transparent 100%)",
                width: "30%"
              }}
            />
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-white font-mono text-sm">
            <FiMapPin className="text-light-secondary dark:text-cyber-primary animate-pulse" />
            <span className="tracking-wider">{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Title with Neon Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-chakra font-bold mb-4 animate-fade-in">
            <span className="text-gray-900 dark:text-cyber-primary">
              Dev Full Stack & <span className="hidden dark:inline">Magicien de l'IA 🪄</span><span className="inline dark:hidden text-light-rose">Expert IA</span>
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base mb-6">
            <motion.span
              className="px-4 py-2 bg-light-roseLight dark:bg-cyber-darker border-2 border-light-roseSoft dark:border-cyber-primary/50 rounded-full text-gray-900 dark:text-cyber-primary font-mono font-semibold hover:scale-105 hover:border-light-rose transition-all cursor-default corner-brackets"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden dark:inline">💼 </span>1 An d'Expérience
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-light-roseLight dark:bg-cyber-darker border-2 border-light-roseSoft dark:border-cyber-primary/50 rounded-full text-gray-900 dark:text-cyber-primary font-mono font-semibold hover:scale-105 hover:border-light-rose transition-all cursor-default corner-brackets"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden dark:inline">🚀 </span>2 Apps en Production
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-light-roseLight dark:bg-cyber-darker border-2 border-light-roseSoft dark:border-cyber-primary/50 rounded-full text-gray-900 dark:text-cyber-primary font-mono font-semibold hover:scale-105 hover:border-light-rose transition-all cursor-default corner-brackets"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden dark:inline">🤖 </span>AI Specialist
            </motion.span>
          </div>

          {/* Featured Projects - Di Menna Apps */}
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-light-secondary dark:text-cyber-primary text-sm font-mono mb-4 font-bold tracking-widest animate-pulse">⚡ PROJETS EN LIVE ⚡</p>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                className="matrix-card card-glow text-left group cursor-pointer scanline"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-chakra font-bold text-light-rose dark:text-cyber-primary flex items-center gap-2">
                    <FiShoppingCart className="animate-pulse" /> Di Menna E-Commerce
                  </h3>
                  <span className="text-xs bg-light-roseLight dark:bg-cyber-primary/20 text-light-rose dark:text-cyber-primary px-2 py-1 rounded font-mono font-bold border-2 border-light-roseSoft dark:border-cyber-primary/30 animate-pulse">LIVE</span>
                </div>
                <p className="text-gray-600 dark:text-white text-sm mb-3 leading-relaxed">
                  Plateforme e-commerce complète avec intégration POS Lightspeed, gestion RH et sync en temps réel<span className="hidden dark:inline"> 🔥</span>
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-cyber-black/50 text-light-primary dark:text-cyber-primary rounded font-mono border border-light-primary/20 dark:border-cyber-primary/20">Next.js 15</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-cyber-black/50 text-light-secondary dark:text-cyber-primary rounded font-mono border border-light-secondary/20 dark:border-cyber-primary/20">OAuth2</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-cyber-black/50 text-light-accent dark:text-cyber-primary rounded font-mono border border-light-accent/20 dark:border-cyber-primary/20">PostgreSQL</span>
                </div>
              </motion.div>

              <motion.div
                className="matrix-card card-glow text-left group cursor-pointer scanline"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-chakra font-bold text-light-rose dark:text-cyber-primary flex items-center gap-2">
                    <FiZap className="animate-pulse" /> Image4Marketing AI
                  </h3>
                  <span className="text-xs bg-light-roseLight dark:bg-cyber-primary/20 text-light-rose dark:text-cyber-primary px-2 py-1 rounded font-mono font-bold border-2 border-light-roseSoft dark:border-cyber-primary/30 animate-pulse">LIVE</span>
                </div>
                <p className="text-gray-600 dark:text-white text-sm mb-3 leading-relaxed">
                  SaaS de transformation d'images par IA - Génère 4 versions pro de tes photos alimentaires<span className="hidden dark:inline"> ! 📸</span><span className="inline dark:hidden">.</span>
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-cyber-black/50 text-light-primary dark:text-cyber-primary rounded font-mono border border-light-primary/20 dark:border-cyber-primary/20">Gemini AI</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-cyber-black/50 text-light-secondary dark:text-cyber-primary rounded font-mono border border-light-secondary/20 dark:border-cyber-primary/20">NextAuth</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-cyber-black/50 text-light-accent dark:text-cyber-primary rounded font-mono border border-light-accent/20 dark:border-cyber-primary/20">Cloudinary</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-gray-600 dark:text-white text-lg md:text-xl leading-relaxed mb-12 font-chakra"
        >
          Je transforme des idées en <span className="text-light-rose dark:text-cyber-primary font-bold matrix-text">apps qui cartonnent</span><span className="hidden dark:inline"> 💥</span>.{" "}
          Spécialisé dans les <span className="text-light-rose dark:text-cyber-primary font-bold matrix-text">SaaS dopés à l'IA</span>, je code avec{" "}
          <span className="text-gray-900 dark:text-white font-bold">Next.js, React, TypeScript & Python</span>.
          Mon truc ? <span className="text-light-rose dark:text-cyber-primary">Créer des solutions qui font la différence</span><span className="hidden dark:inline"> ! 🚀</span><span className="inline dark:hidden">.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-light-rose dark:bg-cyber-primary text-white dark:text-cyber-black font-chakra font-bold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 neon-border relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="group-hover:animate-bounce" />
            <span className="tracking-wide">TRAVAILLONS ENSEMBLE</span>
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-transparent border-2 border-light-rose dark:border-cyber-primary text-light-rose dark:text-cyber-primary font-chakra font-bold rounded-lg hover:bg-light-roseLight dark:hover:bg-cyber-primary/10 transition-all flex items-center space-x-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tracking-wide">VOIR MES PROJETS</span>
            <span className="group-hover:translate-x-1 transition-transform"><span className="hidden dark:inline">⚡</span><span className="inline dark:hidden">→</span></span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-cyber-darker border border-gray-300 dark:border-cyber-gray rounded-lg hover:border-light-rose dark:hover:border-cyber-primary hover:shadow-lg hover:shadow-light-rose/20 dark:hover:shadow-cyber-primary/50 transition-all group corner-brackets"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={24} className="text-gray-600 dark:text-white group-hover:text-light-rose dark:group-hover:text-cyber-primary transition-colors" />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-cyber-darker border border-gray-300 dark:border-cyber-gray rounded-lg hover:border-light-rose dark:hover:border-cyber-primary hover:shadow-lg hover:shadow-light-rose/20 dark:hover:shadow-cyber-primary/50 transition-all group corner-brackets"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin size={24} className="text-gray-600 dark:text-white group-hover:text-light-rose dark:group-hover:text-cyber-primary transition-colors" />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="p-4 bg-gray-100 dark:bg-cyber-darker border border-gray-300 dark:border-cyber-gray rounded-lg hover:border-light-rose dark:hover:border-cyber-primary hover:shadow-lg hover:shadow-light-rose/20 dark:hover:shadow-cyber-primary/50 transition-all group corner-brackets"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail size={24} className="text-gray-600 dark:text-white group-hover:text-light-rose dark:group-hover:text-cyber-primary transition-colors" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-light-rose dark:text-cyber-primary hover:text-gray-900 dark:hover:text-white transition-colors">
            <FiArrowDown size={32} />
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Code Snippets (Decorative) - Dark mode only */}
      <motion.div
        className="absolute top-20 right-20 text-cyber-primary/30 font-mono text-sm hidden dark:lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {'{ "developer": "full-stack" }'}
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-cyber-primary/30 font-mono text-sm hidden dark:lg:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        {'<AI specialist />'}
      </motion.div>
    </section>
  );
};

export default Hero;
