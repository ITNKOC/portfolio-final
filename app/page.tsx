"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import DemoModal from "@/components/DemoModal";
import ScrollToTop from "@/components/ScrollToTop";
import StarField from "@/components/StarField";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiBriefcase, FiPackage, FiAward, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend, FiTwitter, FiInstagram, FiUser, FiBookOpen, FiGlobe, FiMousePointer } from "react-icons/fi";
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiMongodb, SiDocker, SiGit } from "react-icons/si";
import { HiSparkles, HiCode, HiDatabase, HiCloud } from "react-icons/hi";
import { skills } from "@/lib/data";
import { getTranslatedPersonalInfo, getTranslatedExperience, getTranslatedProjects, getTranslatedEducation, getTranslatedLanguages } from "@/lib/translatedData";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  professionalCard,
  staggerContainer,
  staggerItem,
  viewportSettings,
  cardViewportSettings,
} from "@/lib/animations";

export default function Home() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [demoModal, setDemoModal] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: "",
    title: "",
  });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Get translated data based on current language
  const personalInfo = getTranslatedPersonalInfo(language);
  const experience = getTranslatedExperience(language);
  const projects = getTranslatedProjects(language);
  const education = getTranslatedEducation(language);
  const languages = getTranslatedLanguages(language);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate sending (integrate EmailJS here later)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen relative">
      {/* Matrix Rain Background Effect */}
      <MatrixRain />

      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gradient-to-b dark:from-[#1a2332] dark:to-[#0f1820] relative overflow-hidden z-10">
        <div className="absolute inset-0 subtle-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <div className="relative inline-block mb-16 xs:mb-20 md:mb-24">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center text-gray-900 dark:text-white relative z-10 tracking-tight">
                {t.about.title} <span className="gradient-text dark:text-sky-400">{t.about.subtitle}</span>
              </h2>
              {/* Premium underline with animation */}
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-nbc-red dark:via-sky-400 to-transparent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-nbc-red/10 dark:bg-sky-400/10 blur-3xl opacity-0"
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <div className="space-y-6 md:space-y-8">
              <motion.div
                className="professional-card professional-glow p-6 md:p-8"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={cardViewportSettings}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <FiUser size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display font-bold text-nbc-red dark:text-sky-400 tracking-tight">{t.about.whoAmI}</h3>
                </div>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3 md:mb-4 font-sans">{personalInfo.bio}</p>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                  Passionné par l'innovation, j'apporte <span className="text-nbc-red dark:text-sky-400 font-bold">{t.about.bioHighlight}</span> {t.about.bioEnd}
                </p>
              </motion.div>

              <motion.div
                className="professional-card professional-glow p-6 md:p-8"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={cardViewportSettings}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <FiBookOpen size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display font-bold text-nbc-red dark:text-sky-400 tracking-tight">{t.about.education}</h3>
                </div>
                {education.map((edu, index) => (
                  <div key={index} className={`${index !== 0 ? "mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700" : ""}`}>
                    <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-xs xs:text-sm sm:text-base text-nbc-red dark:text-sky-400 font-mono font-semibold">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-[10px] xs:text-xs sm:text-sm font-mono">{edu.location} | {edu.period}</p>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2 font-sans leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="professional-card professional-glow corner-accent p-6 md:p-8"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={cardViewportSettings}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <FiGlobe size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display font-bold text-nbc-red dark:text-sky-400 tracking-tight">{t.about.languages}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3">
                  {languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-[10px] xs:text-xs sm:text-sm font-mono cursor-default"
                    >
                      {lang.language} <span className="text-gray-600 dark:text-gray-400">({lang.level})</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 lg:py-40 bg-nbc-red dark:bg-gradient-to-b dark:from-[#0a1929] dark:via-[#0c2d48] dark:to-[#0a1f3a] relative overflow-hidden z-10">
        {/* Starfield for Dark Mode */}
        <div className="absolute inset-0 z-0 dark:block hidden">
          <StarField />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <div className="relative inline-block mb-16 xs:mb-20 md:mb-24">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center text-white relative z-10 tracking-tight">
                {t.experience.title} <span className="text-white drop-shadow-2xl">{t.experience.subtitle}</span>
              </h2>
              {/* Premium underline with animation */}
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full shadow-lg shadow-white/50"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-nbc-red/10 dark:bg-sky-400/10 blur-3xl opacity-0"
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* Animated Timeline Line */}
              <motion.div
                className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-sky-400/60 dark:via-sky-400/30 dark:to-transparent"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "100%", opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Experience Cards with Timeline */}
              <motion.div
                className="space-y-8 md:space-y-12 ml-8 md:ml-12"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={staggerItem}
                  >
                    {/* Timeline Dot with Icon and Pulse Animation */}
                    <motion.div
                      className="absolute -left-[38px] md:-left-[52px] top-6 md:top-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 border-2 md:border-4 border-white dark:border-gray-900 shadow-lg z-10 flex items-center justify-center"
                      initial={{ scale: 0, opacity: 0, rotate: -180 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 200 }}
                    >
                      <FiBriefcase className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      {/* Pulse Ring Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-nbc-red dark:bg-sky-400"
                        animate={{
                          scale: [1, 1.8, 1.8],
                          opacity: [0.5, 0, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                      className="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-nbc-red dark:hover:border-sky-400 transition-all duration-500 shadow-lg hover:shadow-2xl group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Elegant Corner Accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-nbc-red/10 dark:from-sky-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Header with Company/Role/Date */}
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-5">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white group-hover:text-nbc-red dark:group-hover:text-sky-400 transition-colors duration-300 mb-2 tracking-tight leading-tight">
                              {exp.title}
                            </h3>
                            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-nbc-red dark:text-sky-400 font-sans font-semibold mb-1">
                              {exp.company}
                            </p>
                            <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono">
                              {exp.location}
                            </p>
                          </div>
                          <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                            <span className="px-2 xs:px-3 sm:px-4 py-0.5 xs:py-1 sm:py-1.5 bg-nbc-red/10 dark:bg-sky-400/20 text-nbc-red dark:text-sky-400 text-[10px] xs:text-xs sm:text-sm font-mono font-bold rounded-full border border-nbc-red/30 dark:border-sky-400/40 whitespace-nowrap">
                              {exp.period}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-[10px] xs:text-xs font-mono">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description List */}
                      <ul className="space-y-2 md:space-y-3 mb-4 md:mb-5">
                        {exp.description.map((desc, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start space-x-2 md:space-x-3 text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 font-sans leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <span className="text-nbc-red dark:text-sky-400 mt-0.5 md:mt-1.5 font-bold text-sm xs:text-base md:text-lg flex-shrink-0">
                              ▹
                            </span>
                            <span>{desc.replace(/[🚀💻🤖☁️]/g, '').trim()}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                        {exp.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 bg-gradient-to-r from-nbc-red/10 to-nbc-red/5 dark:from-sky-400/20 dark:to-sky-500/10 border border-nbc-red/30 dark:border-sky-400/40 rounded-full text-[10px] xs:text-xs text-nbc-red dark:text-sky-400 font-mono font-semibold transition-all hover:scale-110 hover:border-nbc-red dark:hover:border-sky-400 cursor-default hover:shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                            whileHover={{ scale: 1.15, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gradient-to-b dark:from-[#1a2332] dark:to-[#0f1820] relative overflow-hidden z-10">
        <div className="absolute inset-0 subtle-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <div className="text-center mb-16 xs:mb-20 md:mb-24">
              <div className="relative inline-block mb-6">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center text-gray-900 dark:text-white relative z-10 tracking-tight">
                  {t.projects.title} <span className="gradient-text dark:text-sky-400">{t.projects.subtitle}</span>
                </h2>
                {/* Premium underline with animation */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-nbc-red dark:via-sky-400 to-transparent rounded-full shadow-lg shadow-nbc-red/50 dark:shadow-sky-400/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "65%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-nbc-red/10 dark:bg-sky-400/10 blur-3xl opacity-0"
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Call to action text */}
              <motion.p
                className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-flex items-center gap-2 bg-nbc-red/10 dark:bg-sky-400/20 text-nbc-red dark:text-sky-400 px-4 py-2 rounded-full border border-nbc-red/30 dark:border-sky-400/40 font-medium">
                  <FiMousePointer className="w-4 h-4" />
                  {t.projects.clickToView}
                </span>
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={cardViewportSettings}
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-nbc-red dark:hover:border-sky-400 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer hover:-translate-y-2 hover:scale-[1.01]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  onClick={() => {
                    if (project.demo !== "#") {
                      setDemoModal({
                        isOpen: true,
                        url: project.demo,
                        title: project.title,
                      });
                    }
                  }}
                >
                  {/* Card Content */}
                  <div className="p-5 sm:p-6 md:p-8 space-y-4 md:space-y-6">
                    {/* Header with Index and Actions */}
                    <div className="flex items-start justify-between">
                      {/* Project Number */}
                      <span className="text-nbc-red/40 dark:text-sky-400/40 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
                        0{index + 1}
                      </span>

                      {/* Action Buttons */}
                      <div className="flex gap-1.5 sm:gap-2">
                        {/* Demo Button */}
                        {project.demo !== "#" ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDemoModal({
                                isOpen: true,
                                url: project.demo,
                                title: project.title,
                              });
                            }}
                            className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 text-white font-bold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-2"
                          >
                            <FiPackage className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden xs:inline">{t.projects.demo}</span>
                          </button>
                        ) : (
                          <div className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gray-200 dark:bg-nbc-gray-800 text-gray-400 dark:text-gray-600 font-bold text-xs sm:text-sm rounded-lg cursor-not-allowed flex items-center gap-1 sm:gap-2">
                            <FiPackage className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden xs:inline">{t.projects.demo}</span>
                          </div>
                        )}

                        {/* GitHub Button */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <FiGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden xs:inline">{t.projects.code}</span>
                        </a>
                      </div>
                    </div>

                    {/* Project Title and Description */}
                    <div className="space-y-2 md:space-y-3">
                      <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white group-hover:text-nbc-red dark:group-hover:text-sky-400 transition-colors duration-300 tracking-tight leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-nbc-red dark:text-sky-400 font-medium text-[10px] xs:text-xs sm:text-sm">
                        {project.subtitle}
                      </p>

                      <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-[11px] xs:text-xs sm:text-sm"
                        >
                          <span className="text-nbc-red dark:text-sky-400 font-bold mt-0.5 flex-shrink-0">▹</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 bg-gradient-to-r from-nbc-red/10 to-nbc-red/5 dark:from-sky-400/20 dark:to-sky-500/10 text-nbc-red dark:text-sky-400 text-[10px] xs:text-xs sm:text-sm font-medium rounded-full border border-nbc-red/20 dark:border-sky-400/30 hover:border-nbc-red dark:hover:border-sky-400 hover:shadow-md cursor-default transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Gradient Overlay - Simple CSS */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-nbc-red/5 via-transparent to-nbc-red/5 dark:from-sky-400/10 dark:via-transparent dark:to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-nbc-red/5 to-transparent dark:from-sky-400/10 dark:to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 lg:py-40 bg-nbc-red dark:bg-gradient-to-br dark:from-[#0a1929] dark:via-[#0c2d48] dark:to-[#0a1929] relative overflow-hidden z-10">
        {/* Subtle Starfield for Dark Mode */}
        <div className="absolute inset-0 z-0 opacity-30 dark:block hidden">
          <StarField />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <div className="relative inline-block mb-16 xs:mb-20 md:mb-24">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center text-white relative z-10 tracking-tight">
                {t.skills.title} <span className="text-white drop-shadow-2xl">{t.skills.subtitle}</span>
              </h2>
              {/* Premium underline with animation */}
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full shadow-lg shadow-white/50"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-nbc-red/10 dark:bg-sky-400/10 blur-3xl opacity-0"
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={cardViewportSettings}
              variants={staggerContainer}
            >
              {Object.entries(skills).map(([category, items], index) => {
                // Calculate average proficiency for the category
                const avgLevel = Math.round(
                  items.reduce((sum: number, skill: any) => sum + skill.level, 0) / items.length
                );

                // Category display names from translations
                const categoryNames: { [key: string]: string } = {
                  languages: t.skills.languages,
                  frontend: t.skills.frontend,
                  backend: t.skills.backend,
                  ai: t.skills.ai,
                  databases: t.skills.databases,
                  devops: t.skills.devops,
                };

                // Category icons - Professional React Icons
                const categoryIconsMap: { [key: string]: JSX.Element } = {
                  languages: <HiCode className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
                  frontend: <SiReact className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
                  backend: <SiNodedotjs className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
                  ai: <HiSparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
                  databases: <HiDatabase className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
                  devops: <HiCloud className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
                };

                return (
                  <motion.div
                    key={category}
                    className="group relative bg-white dark:bg-gray-900 rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-nbc-red dark:hover:border-sky-400 transition-all duration-500 shadow-lg hover:shadow-2xl"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Category Icon/Badge and Level */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <motion.div
                          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0"
                          whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {categoryIconsMap[category]}
                        </motion.div>
                        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-nbc-red dark:group-hover:text-sky-400 transition-colors capitalize tracking-tight">
                          {categoryNames[category]}
                        </h3>
                      </div>
                      <span className="text-xl xs:text-2xl sm:text-3xl font-bold text-nbc-red/30 dark:text-sky-400/40 group-hover:text-nbc-red/50 dark:group-hover:text-sky-400/60 transition-colors">
                        {avgLevel}%
                      </span>
                    </div>

                    {/* Animated Progress Bar for Category Average */}
                    <div className="relative h-2 sm:h-3 bg-gray-200 dark:bg-gray-700/50 rounded-full overflow-hidden mb-4 md:mb-6">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${avgLevel}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      />
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ["-100%", "300%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      />
                    </div>

                    {/* Technologies List */}
                    <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                      {items.map((skill: any, i: number) => (
                        <motion.span
                          key={i}
                          className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-800/50 hover:bg-nbc-red/10 dark:hover:bg-sky-400/20 text-gray-700 dark:text-gray-300 hover:text-nbc-red dark:hover:text-sky-400 text-[10px] xs:text-xs sm:text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:border-nbc-red dark:hover:border-sky-400 transition-all cursor-default"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-nbc-red/5 via-transparent to-transparent dark:from-sky-400/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-nbc-red/10 to-transparent dark:from-sky-400/20 dark:to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gradient-to-b dark:from-[#1a2332] dark:to-[#0f1820] relative overflow-hidden z-10">
        <div className="absolute inset-0 subtle-grid opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <div className="relative inline-block mb-6 xs:mb-8">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center text-gray-900 dark:text-white relative z-10 tracking-tight">
                {t.contact.title} <span className="gradient-text dark:text-sky-400">{t.contact.subtitle}</span>
              </h2>
              {/* Premium underline with animation */}
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-nbc-red dark:via-sky-400 to-transparent rounded-full shadow-lg shadow-nbc-red/50 dark:shadow-sky-400/50"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-nbc-red/10 dark:bg-sky-400/10 blur-3xl opacity-0"
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <p className="text-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 xs:mb-10 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
              {/* Enhanced Contact Info Card */}
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-7 md:p-8 border-2 border-gray-200 dark:border-gray-700 space-y-6 md:space-y-6 shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={cardViewportSettings}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Elegant heading with icon */}
                <div className="space-y-3 md:space-y-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <FiMail size={20} className="xs:w-6 xs:h-6" />
                    </motion.div>
                    <h3 className="text-base xs:text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white tracking-tight">{t.contact.contactInfo}</h3>
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{t.contact.contactDescription}</p>
                </div>

                {/* Contact items with icons - Mobile Optimized */}
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700 hover:border-nbc-red dark:hover:border-sky-400 transition-all"
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiMail size={18} className="xs:w-[22px] xs:h-[22px] sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">Email</p>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-900 dark:text-white font-semibold group-hover:text-nbc-red dark:group-hover:text-sky-400 transition-colors truncate">
                        {personalInfo.email}
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${personalInfo.phone}`}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700 hover:border-nbc-red dark:hover:border-sky-400 transition-all"
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiPhone size={18} className="xs:w-[22px] xs:h-[22px] sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">{t.contact.phone}</p>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-900 dark:text-white font-semibold group-hover:text-nbc-red dark:group-hover:text-sky-400 transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-nbc-red dark:hover:border-sky-400 transition-all"
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiMapPin size={18} className="xs:w-[22px] xs:h-[22px] sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">{t.contact.location}</p>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-900 dark:text-white font-semibold">
                        {personalInfo.location}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social links - Mobile Optimized */}
                <div className="pt-6 border-t-2 border-gray-200 dark:border-nbc-gray-700">
                  <p className="text-xs xs:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">{t.contact.followMe}</p>
                  <div className="flex gap-3 sm:gap-4">
                    <motion.a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none sm:w-14 sm:h-14 h-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 hover:bg-nbc-red dark:hover:bg-sky-400 hover:text-white dark:hover:text-white transition-all shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <FiGithub size={22} />
                    </motion.a>
                    <motion.a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none sm:w-14 sm:h-14 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:bg-nbc-red dark:hover:bg-sky-400 transition-all shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <FiLinkedin size={22} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      className="flex-1 sm:flex-none sm:w-14 sm:h-14 h-12 rounded-xl bg-gradient-to-br from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 flex items-center justify-center text-white hover:from-red-600 hover:to-nbc-red dark:hover:from-cyan-500 dark:hover:to-sky-400 transition-all shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <FiMail size={22} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Modern Form with Floating Labels - Mobile Optimized */}
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-7 md:p-8 border-2 border-gray-200 dark:border-gray-700 space-y-6 shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={cardViewportSettings}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Success/Error Messages */}
                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.div
                      className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3 text-green-700 dark:text-green-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs xs:text-sm font-semibold">{t.contact.successMessage}</span>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-xs xs:text-sm font-semibold">{t.contact.errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name Input with Floating Label - Mobile Optimized */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full px-3 xs:px-4 py-3 xs:py-4 text-sm xs:text-base bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-nbc-red dark:focus:border-nbc-red focus:ring-4 focus:ring-nbc-red/10 dark:focus:ring-nbc-red/20 outline-none transition-all placeholder-transparent text-gray-900 dark:text-gray-100 font-medium"
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 xs:left-4 -top-2.5 px-2 bg-white dark:bg-gray-900 text-xs xs:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 xs:peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm xs:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs xs:peer-focus:text-sm peer-focus:text-nbc-red dark:peer-focus:text-nbc-red transition-all font-semibold"
                  >
                    {t.contact.namePlaceholder}
                  </label>
                </div>

                {/* Email Input with Floating Label - Mobile Optimized */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full px-3 xs:px-4 py-3 xs:py-4 text-sm xs:text-base bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-nbc-red dark:focus:border-nbc-red focus:ring-4 focus:ring-nbc-red/10 dark:focus:ring-nbc-red/20 outline-none transition-all placeholder-transparent text-gray-900 dark:text-gray-100 font-medium"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 xs:left-4 -top-2.5 px-2 bg-white dark:bg-gray-900 text-xs xs:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 xs:peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm xs:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs xs:peer-focus:text-sm peer-focus:text-nbc-red dark:peer-focus:text-nbc-red transition-all font-semibold"
                  >
                    {t.contact.emailPlaceholder}
                  </label>
                </div>

                {/* Message Textarea with Floating Label - Mobile Optimized */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows={6}
                    className="peer w-full px-3 xs:px-4 py-3 xs:py-4 text-sm xs:text-base bg-white dark:bg-nbc-gray-800 border-2 border-gray-200 dark:border-nbc-gray-700 rounded-xl focus:border-nbc-red dark:focus:border-nbc-red focus:ring-4 focus:ring-nbc-red/10 dark:focus:ring-nbc-red/20 outline-none transition-all placeholder-transparent resize-none text-gray-900 dark:text-white font-medium"
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 xs:left-4 -top-2.5 px-2 bg-white dark:bg-gray-900 text-xs xs:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 xs:peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm xs:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs xs:peer-focus:text-sm peer-focus:text-nbc-red dark:peer-focus:text-nbc-red transition-all font-semibold"
                  >
                    {t.contact.messagePlaceholder}
                  </label>
                </div>

                {/* Modern Submit Button - Mobile Optimized */}
                <motion.button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-4 xs:px-6 py-3 xs:py-4 sm:py-5 bg-gradient-to-r from-nbc-red to-red-600 dark:from-sky-400 dark:to-cyan-500 text-white font-bold text-sm xs:text-base sm:text-lg rounded-xl hover:from-red-600 hover:to-nbc-red shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 active:scale-95"
                  whileHover={{ scale: formStatus === "sending" ? 1 : 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {formStatus === "sending" ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>{t.contact.send}</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Premium Red Design */}
      <footer className="relative z-10 bg-nbc-red dark:bg-gradient-to-t dark:from-[#0a0e27] dark:via-[#16213e] dark:to-[#0f1b35] overflow-hidden">
        {/* Starfield for Dark Mode */}
        <div className="absolute inset-0 z-0 dark:block hidden">
          <StarField />
        </div>
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0 subtle-grid"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Main Content - Centered Layout */}
          <div className="text-center mb-12">
            {/* Brand Name */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                {t.footer.taglineAlt}
              </p>
            </motion.div>

            {/* Social Links - Large & Prominent */}
            <motion.div
              className="flex justify-center gap-4 sm:gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all group"
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={24} className="group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all group"
                whileHover={{ scale: 1.15, y: -5, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin size={24} className="group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all group"
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail size={24} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Quick Navigation */}
            <motion.nav
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { label: t.nav.about, href: '#about' },
                { label: t.nav.experience, href: '#experience' },
                { label: t.nav.projects, href: '#projects' },
                { label: t.nav.skills, href: '#skills' },
                { label: t.nav.contact, href: '#contact' },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </motion.nav>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/80 text-sm sm:text-base mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <FiMail size={18} />
                <span className="font-medium">{personalInfo.email}</span>
              </a>
              <span className="hidden sm:block text-white/40">•</span>
              <div className="flex items-center gap-2">
                <FiMapPin size={18} />
                <span className="font-medium">{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar - Copyright */}
          <motion.div
            className="pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center">
              <p className="text-sm text-white/70">
                © 2025 {personalInfo.name}. {t.footer.rights}
              </p>
              <span className="hidden sm:block text-white/40">•</span>
              <p className="text-sm text-white/70">
                {t.footer.designedWith} <motion.span
                  className="inline-block text-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >❤️</motion.span> {t.footer.using} <span className="font-semibold text-white">Next.js</span> {t.footer.and} <span className="font-semibold text-white">Tailwind CSS</span>
              </p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal
        isOpen={demoModal.isOpen}
        onClose={() => setDemoModal({ isOpen: false, url: "", title: "" })}
        demoUrl={demoModal.url}
        projectTitle={demoModal.title}
      />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </main>
  );
}
