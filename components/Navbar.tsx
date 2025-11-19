"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
// Choisissez votre switcher préféré en décommentant une ligne:
import LanguageSwitcher from "./LanguageSwitcherToggle"; // ⭐ RECOMMANDÉ: Toggle élégant
// import LanguageSwitcher from "./LanguageSwitcherDropdown"; // Dropdown sophistiqué
// import LanguageSwitcher from "./LanguageSwitcherTabs"; // Tabs modernes
// import LanguageSwitcher from "./LanguageSwitcher"; // Original (simple)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
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
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.contact, href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      style={{
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative text-2xl font-bold font-mono group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white drop-shadow-lg">
              &lt;KD /&gt;
            </span>
            <motion.div
              className="absolute inset-0 bg-white/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition-all relative group font-semibold px-3 py-2 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 rounded-full bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 -z-10 bg-white/10"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/ITNKOC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/koceila-djaballah-295716221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:koceila.djaballah@gmail.com"
              className="text-white hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FiMail size={20} />
            </motion.a>
            <LanguageSwitcher />
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2.5 rounded-xl overflow-hidden group bg-white/20 dark:bg-white/10 text-white border-2 border-white/30 hover:border-white shadow-lg"
              style={{
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative z-10"
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-lg bg-nbc-polar dark:bg-nbc-gray-800 hover:bg-nbc-red/10 dark:hover:bg-nbc-red/20 text-nbc-red border-2 border-nbc-gray-200 dark:border-nbc-gray-700 hover:border-nbc-red"
              style={{
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-nbc-gray-100 dark:bg-nbc-gray-800 border-2 border-nbc-gray-300 dark:border-nbc-gray-700 text-nbc-text-secondary hover:text-nbc-red hover:border-nbc-red transition-colors"
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
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-nbc-red/95 dark:bg-nbc-gray-900/95 backdrop-blur-sm border-t-2 border-white/20 shadow-xl"
          >
            <div className="px-6 py-8 space-y-3 h-full overflow-y-auto">
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
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }, 300);
                  }}
                  className="block bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 border-l-4 border-transparent hover:border-white rounded-r-lg px-6 py-4 font-semibold text-white transition-all group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base">{item.name}</span>
                    <motion.span
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                className="pt-6 mt-6 border-t-2 border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-mono text-white/70 mb-4 tracking-wider uppercase">
                  Connect
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <motion.a
                    href="https://github.com/ITNKOC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white rounded-xl transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub
                      size={24}
                      className="text-white group-hover:text-white/80 transition-colors"
                    />
                    <span className="text-xs font-mono text-white/70">
                      GitHub
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/koceila-djaballah-295716221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white rounded-xl transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiLinkedin
                      size={24}
                      className="text-white group-hover:text-white/80 transition-colors"
                    />
                    <span className="text-xs font-mono text-white/70">
                      LinkedIn
                    </span>
                  </motion.a>
                  <motion.a
                    href="mailto:koceila.djaballah@gmail.com"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white rounded-xl transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiMail
                      size={24}
                      className="text-white group-hover:text-white/80 transition-colors"
                    />
                    <span className="text-xs font-mono text-white/70">
                      Email
                    </span>
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
