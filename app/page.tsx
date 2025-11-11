"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import DemoModal from "@/components/DemoModal";
import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiPackage, FiAward, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { experience, projects, skills, education, languages, personalInfo } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [demoModal, setDemoModal] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: "",
    title: "",
  });

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
    <main className="bg-white dark:bg-cyber-black text-gray-900 dark:text-white min-h-screen relative">
      {/* Matrix Rain Background Effect */}
      <MatrixRain />

      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-gray-900 dark:text-white">
              About <span className="text-light-rose dark:text-cyber-primary matrix-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-light-rose via-light-roseSoft to-light-rose dark:from-cyber-primary dark:via-cyber-primary dark:to-cyber-primary mx-auto mb-12 animate-pulse"></div>

            <div className="grid md:grid-2 gap-8">
              <motion.div
                className="matrix-card card-glow scanline"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-chakra font-bold text-light-rose dark:text-cyber-primary mb-4 tracking-wide">WHO I AM</h3>
                <p className="text-gray-600 dark:text-white leading-relaxed mb-4 font-chakra">{personalInfo.bio}</p>
                <p className="text-gray-600 dark:text-white leading-relaxed font-chakra">
                  Passionné par l'innovation, j'apporte <span className="text-light-rose dark:text-cyber-primary font-bold matrix-text">autonomie, créativité et orientation résultats</span> pour transformer les défis techniques en produits impactants.
                </p>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  className="matrix-card card-glow scanline"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-chakra font-bold text-light-rose dark:text-cyber-primary mb-4 tracking-wide">EDUCATION</h3>
                  {education.map((edu, index) => (
                    <div key={index} className={`${index !== 0 ? "mt-6 pt-6 border-t border-gray-300 dark:border-cyber-gray" : ""}`}>
                      <h4 className="text-xl font-chakra font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-light-rose dark:text-cyber-primary font-mono font-semibold">{edu.school}</p>
                      <p className="text-gray-500 dark:text-white text-sm font-mono">{edu.location} | {edu.period}</p>
                      <p className="text-gray-600 dark:text-white mt-2 font-chakra">{edu.description}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  className="matrix-card card-glow corner-brackets"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-chakra font-bold text-light-accent dark:text-cyber-primary mb-4 tracking-wide">LANGUAGES</h3>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-cyber-black border border-gray-300 dark:border-cyber-gray rounded-full text-sm font-mono hover:scale-105 transition-transform cursor-default hover:border-light-primary dark:hover:border-cyber-primary"
                      >
                        {lang.flag} {lang.language} <span className="text-gray-500 dark:text-white">({lang.level})</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-cyber-darker relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-gray-900 dark:text-white">
              Professional <span className="text-light-rose dark:text-cyber-primary matrix-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-light-rose via-light-roseSoft to-light-rose dark:from-cyber-primary dark:via-cyber-primary dark:to-cyber-primary mx-auto mb-12"></div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="matrix-card card-glow scanline corner-brackets"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-chakra font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                      <p className="text-light-rose dark:text-cyber-primary font-chakra font-semibold text-lg mb-1">{exp.company}</p>
                      <p className="text-gray-600 dark:text-white text-sm font-mono">{exp.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-light-rose dark:text-cyber-primary font-mono font-medium">{exp.period}</p>
                      <p className="text-gray-600 dark:text-white text-sm font-mono">{exp.duration}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-white font-chakra">
                        <span className="text-light-rose dark:text-cyber-primary mt-1 font-bold">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-light-roseLight dark:bg-cyber-black border border-light-roseSoft dark:border-cyber-primary/30 rounded-full text-sm text-light-rose dark:text-cyber-primary font-mono transition-all hover:scale-105 hover:border-light-rose dark:hover:border-cyber-primary cursor-default"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-gray-900 dark:text-white">
              Featured <span className="text-light-rose dark:text-cyber-primary matrix-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-light-rose via-light-roseSoft to-light-rose dark:from-cyber-primary dark:via-cyber-primary dark:to-cyber-primary mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="matrix-card card-glow scanline group corner-brackets cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
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
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-light-roseLight dark:bg-cyber-primary/20 text-light-rose dark:text-cyber-primary text-xs font-mono font-bold rounded-full mb-4 border-2 border-light-roseSoft dark:border-cyber-primary/30 animate-pulse">
                      <span className="hidden dark:inline">⚡ </span>FEATURED
                    </span>
                  )}
                  <h3 className="text-xl font-chakra font-bold text-gray-900 dark:text-white mb-2 group-hover:text-light-rose dark:group-hover:text-cyber-primary transition-colors">{project.title}</h3>
                  <p className="text-light-rose dark:text-cyber-primary font-chakra font-medium text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-700 dark:text-white text-sm mb-4 font-chakra leading-relaxed">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <p key={i} className="text-gray-600 dark:text-white text-xs flex items-start space-x-2 font-chakra">
                        <span className="text-light-rose dark:text-cyber-primary font-bold">•</span>
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-light-roseLight dark:bg-cyber-black border border-light-roseSoft dark:border-cyber-gray rounded text-xs text-gray-700 dark:text-white font-mono hover:border-light-rose dark:hover:border-cyber-primary transition-colors cursor-default"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="text-light-rose dark:text-cyber-primary hover:text-gray-900 dark:hover:text-white transition-colors flex items-center space-x-1 text-sm font-mono font-semibold"
                      whileHover={{ x: 3 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub />
                      <span>Code</span>
                    </motion.a>
                    {project.demo !== "#" ? (
                      <motion.div
                        className="text-light-rose dark:text-cyber-primary hover:text-gray-900 dark:hover:text-white transition-colors flex items-center space-x-1 text-sm font-mono font-semibold"
                        whileHover={{ x: 3 }}
                      >
                        <FiPackage />
                        <span>Live Demo</span>
                      </motion.div>
                    ) : (
                      <motion.span
                        className="text-gray-400 dark:text-gray-600 flex items-center space-x-1 text-sm font-mono font-semibold cursor-not-allowed"
                      >
                        <FiPackage />
                        <span>Demo</span>
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-cyber-darker relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-gray-900 dark:text-white">
              Technical <span className="text-light-rose dark:text-cyber-primary matrix-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-light-rose via-light-roseSoft to-light-rose dark:from-cyber-primary dark:via-cyber-primary dark:to-cyber-primary mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="matrix-card card-glow scanline corner-brackets"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, rotateY: 2 }}
                >
                  <h3 className="text-xl font-chakra font-bold text-light-rose dark:text-cyber-primary mb-4 capitalize tracking-wide">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div className="space-y-3">
                    {items.map((skill: any, i: number) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-white font-chakra font-medium">{skill.name}</span>
                          <span className="text-light-rose dark:text-cyber-primary text-sm font-mono font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-light-roseLight dark:bg-cyber-black rounded-full h-2 overflow-hidden border border-light-roseSoft dark:border-cyber-gray/30">
                          <motion.div
                            className="bg-gradient-to-r from-light-rose via-light-roseSoft to-light-rose dark:from-cyber-primary dark:via-cyber-primary dark:to-cyber-primary h-2 rounded-full relative overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-right"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-gray-900 dark:text-white">
              Get In <span className="text-light-rose dark:text-cyber-primary matrix-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-light-rose via-light-roseSoft to-light-rose dark:from-cyber-primary dark:via-cyber-primary dark:to-cyber-primary mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                className="matrix-card card-glow scanline corner-brackets"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FiMail className="text-light-rose dark:text-cyber-primary animate-pulse" size={24} />
                  <div>
                    <p className="text-gray-500 dark:text-white text-sm font-mono">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-light-rose dark:text-cyber-primary hover:text-gray-900 dark:hover:text-white hover:underline font-chakra font-semibold transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-6">
                  <FiPhone className="text-light-rose dark:text-cyber-primary animate-pulse" size={24} />
                  <div>
                    <p className="text-gray-500 dark:text-white text-sm font-mono">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-light-rose dark:text-cyber-primary hover:text-gray-900 dark:hover:text-white hover:underline font-chakra font-semibold transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-light-rose dark:text-cyber-primary animate-pulse" size={24} />
                  <div>
                    <p className="text-gray-500 dark:text-white text-sm font-mono">Location</p>
                    <p className="text-gray-900 dark:text-white font-chakra font-semibold">{personalInfo.location}</p>
                  </div>
                </div>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="matrix-card card-glow scanline corner-brackets"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-cyber-black border-2 border-gray-300 dark:border-cyber-gray rounded-lg px-4 py-3 mb-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 font-chakra focus:border-light-rose dark:focus:border-cyber-primary focus:outline-none focus:ring-2 focus:ring-light-rose/20 dark:focus:ring-cyber-primary/20 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-cyber-black border-2 border-gray-300 dark:border-cyber-gray rounded-lg px-4 py-3 mb-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 font-chakra focus:border-light-rose dark:focus:border-cyber-primary focus:outline-none focus:ring-2 focus:ring-light-rose/20 dark:focus:ring-cyber-primary/20 transition-all"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-gray-50 dark:bg-cyber-black border-2 border-gray-300 dark:border-cyber-gray rounded-lg px-4 py-3 mb-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 font-chakra focus:border-light-primary dark:focus:border-cyber-primary focus:outline-none focus:ring-2 focus:ring-light-primary/20 dark:focus:ring-cyber-primary/20 transition-all resize-none"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-light-rose dark:bg-cyber-primary text-white dark:text-cyber-black font-chakra font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 neon-border relative overflow-hidden group"
                  disabled={formStatus === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{formStatus === "sending" ? "Sending..." : formStatus === "success" ? "✓ Sent!" : "Send Message"}</span>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-cyber-darker border-t-2 border-gray-300 dark:border-cyber-gray relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-white text-sm font-mono mb-4 md:mb-0">
              © 2025 {personalInfo.name}. Built with <span className="text-light-rose dark:text-cyber-primary font-bold">Next.js</span> & <span className="text-light-rose dark:text-cyber-primary font-bold">Tailwind CSS</span>
            </p>
            <div className="flex space-x-6">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white hover:text-light-rose dark:hover:text-cyber-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white hover:text-light-rose dark:hover:text-cyber-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-500 dark:text-white hover:text-light-rose dark:hover:text-cyber-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal
        isOpen={demoModal.isOpen}
        onClose={() => setDemoModal({ isOpen: false, url: "", title: "" })}
        demoUrl={demoModal.url}
        projectTitle={demoModal.title}
      />
    </main>
  );
}
