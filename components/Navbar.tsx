"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white/90 dark:bg-cyber-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-cyber-gray shadow-lg shadow-cyber-primary/10"
          : "bg-transparent"
      }`}
      style={{
        transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-light-rose dark:text-cyber-primary hover:text-gray-900 dark:hover:text-glow transition-all font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;KD /&gt;
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-light-rose dark:hover:text-cyber-primary transition-colors relative group font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-rose dark:bg-cyber-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/ITNKOC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-light-rose dark:hover:text-cyber-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/koceila-djaballah-295716221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white hover:text-light-rose dark:hover:text-cyber-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:koceila.djaballah@gmail.com"
              className="text-gray-600 dark:text-white hover:text-light-rose dark:hover:text-cyber-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FiMail size={20} />
            </motion.a>
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-light-roseLight dark:bg-cyber-gray hover:bg-light-roseSoft dark:hover:bg-cyber-primary/20 text-light-rose dark:text-white border-2 border-light-roseSoft dark:border-cyber-gray hover:border-light-rose"
              style={{
                transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-lg bg-light-roseLight dark:bg-cyber-gray hover:bg-light-roseSoft dark:hover:bg-cyber-primary/20 text-light-rose dark:text-white border-2 border-light-roseSoft dark:border-cyber-gray hover:border-light-rose"
              style={{
                transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-cyber-darker border-2 border-gray-300 dark:border-cyber-gray text-gray-700 dark:text-gray-300 hover:text-light-rose dark:hover:text-cyber-primary hover:border-light-rose dark:hover:border-cyber-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 dark:bg-cyber-darker/98 backdrop-blur-xl border-t-2 border-gray-200 dark:border-cyber-gray shadow-xl"
          >
            <div className="px-6 py-8 space-y-3 max-h-[70vh] overflow-y-auto">
              {/* Menu Items */}
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 300);
                  }}
                  className="block bg-gray-50 dark:bg-cyber-black/50 hover:bg-light-roseLight dark:hover:bg-cyber-primary/10 border-l-4 border-transparent hover:border-light-rose dark:hover:border-cyber-primary rounded-r-lg px-6 py-4 font-chakra font-semibold text-gray-800 dark:text-gray-200 transition-all group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base">{item.name}</span>
                    <motion.span
                      className="text-light-rose dark:text-cyber-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.a>
              ))}

              {/* Social Links Section */}
              <motion.div
                className="pt-6 mt-6 border-t-2 border-gray-200 dark:border-cyber-gray"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4 tracking-wider uppercase">Connect</p>
                <div className="grid grid-cols-3 gap-3">
                  <motion.a
                    href="https://github.com/ITNKOC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-cyber-black/50 hover:bg-light-roseLight dark:hover:bg-cyber-primary/10 border-2 border-gray-200 dark:border-cyber-gray hover:border-light-rose dark:hover:border-cyber-primary rounded-xl transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={24} className="text-gray-600 dark:text-white group-hover:text-light-rose dark:group-hover:text-cyber-primary transition-colors" />
                    <span className="text-xs font-mono text-gray-500 dark:text-white">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/koceila-djaballah-295716221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-cyber-black/50 hover:bg-light-roseLight dark:hover:bg-cyber-primary/10 border-2 border-gray-200 dark:border-cyber-gray hover:border-light-rose dark:hover:border-cyber-primary rounded-xl transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiLinkedin size={24} className="text-gray-600 dark:text-white group-hover:text-light-rose dark:group-hover:text-cyber-primary transition-colors" />
                    <span className="text-xs font-mono text-gray-500 dark:text-white">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="mailto:koceila.djaballah@gmail.com"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-cyber-black/50 hover:bg-light-roseLight dark:hover:bg-cyber-primary/10 border-2 border-gray-200 dark:border-cyber-gray hover:border-light-rose dark:hover:border-cyber-primary rounded-xl transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiMail size={24} className="text-gray-600 dark:text-white group-hover:text-light-rose dark:group-hover:text-cyber-primary transition-colors" />
                    <span className="text-xs font-mono text-gray-500 dark:text-white">Email</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
