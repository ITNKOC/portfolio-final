"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiMonitor, FiSmartphone } from "react-icons/fi";
import { useEffect, useState } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoUrl: string;
  projectTitle: string;
}

const DemoModal = ({ isOpen, onClose, demoUrl, projectTitle }: DemoModalProps) => {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Detect if user is on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset view mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setViewMode("desktop");
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full h-full max-w-[95vw] max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-nbc-red dark:border-sky-400"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b-2 border-nbc-red/30 dark:border-sky-400/30">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-nbc-red dark:bg-sky-400"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(228, 28, 35, 0.5)",
                      "0 0 20px rgba(228, 28, 35, 0.8)",
                      "0 0 10px rgba(228, 28, 35, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="text-lg font-bold text-nbc-text-primary">
                  {projectTitle} <span className="text-nbc-red dark:text-sky-400">// Démo en Direct</span>
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                {/* View Mode Toggle - Only show on desktop */}
                {!isMobileDevice && (
                  <div className="flex items-center bg-nbc-red/10 dark:bg-gray-700 rounded-lg p-1 border-2 border-nbc-red/20 dark:border-sky-400/30">
                    <motion.button
                      onClick={() => setViewMode("desktop")}
                      className={`p-2 rounded-md transition-all ${
                        viewMode === "desktop"
                          ? "bg-nbc-red dark:bg-sky-400 text-white"
                          : "text-nbc-text-secondary hover:text-nbc-red dark:hover:text-sky-400"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Vue Bureau"
                    >
                      <FiMonitor size={18} />
                    </motion.button>
                    <motion.button
                      onClick={() => setViewMode("mobile")}
                      className={`p-2 rounded-md transition-all ${
                        viewMode === "mobile"
                          ? "bg-nbc-red dark:bg-sky-400 text-white"
                          : "text-nbc-text-secondary hover:text-nbc-red"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Vue Mobile"
                    >
                      <FiSmartphone size={18} />
                    </motion.button>
                  </div>
                )}

                {/* Open in new tab */}
                <motion.a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-nbc-red/10 dark:bg-gray-700 hover:bg-nbc-red/20 dark:hover:bg-sky-400/20 text-nbc-red dark:text-sky-400 border-2 border-nbc-red/20 dark:border-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Ouvrir dans un nouvel onglet"
                >
                  <FiExternalLink size={18} />
                </motion.a>

                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  className="p-2.5 rounded-lg bg-nbc-red/10 dark:bg-nbc-gray-700 hover:bg-red-100 dark:hover:bg-sky-900/20 text-nbc-red hover:text-red-600 dark:hover:text-sky-400 border-2 border-nbc-red/20 dark:border-gray-600 hover:border-red-500 dark:hover:border-sky-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  title="Fermer (ESC)"
                >
                  <FiX size={20} />
                </motion.button>
              </div>
            </div>

            {/* Loading Animation */}
            <div className="absolute inset-0 flex items-center justify-center pt-16 bg-nbc-gray-50 dark:bg-nbc-gray-900">
              <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 border-4 border-nbc-red/20 dark:border-gray-700 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-nbc-red rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="text-nbc-text-secondary font-mono text-sm">Chargement de la démo<motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >...</motion.span></p>
              </motion.div>
            </div>

            {/* Iframe Container */}
            <div className="absolute inset-0 pt-16 overflow-auto bg-nbc-gray-100 dark:bg-nbc-gray-900/50">
              {isMobileDevice || viewMode === "desktop" ? (
                <motion.iframe
                  key="desktop-view"
                  src={demoUrl}
                  className="w-full h-full border-0"
                  title={`${projectTitle} Démo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <div className="flex items-start justify-center min-h-full p-8">
                  <motion.div
                    key="mobile-view"
                    className="relative bg-gray-900 rounded-[3rem] shadow-2xl border-[14px] border-gray-900"
                    style={{ width: "375px", height: "812px" }}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  >
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl z-10 pointer-events-none"></div>

                    {/* Screen Container with overflow hidden to hide scrollbar */}
                    <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden">
                      <motion.iframe
                        src={demoUrl}
                        className="border-0 bg-white rounded-[2.3rem]"
                        style={{
                          width: "calc(100% + 30px)",
                          height: "100%",
                        }}
                        title={`${projectTitle} Démo - Vue Mobile`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy"
                        scrolling="yes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      />
                    </div>

                  </motion.div>
                </div>
              )}
            </div>

            {/* Corner Decorations - Elegant NBC Accent */}
            <div className="absolute top-16 left-0 w-8 h-8 border-l-2 border-t-2 border-nbc-red dark:border-sky-400 opacity-20 pointer-events-none" />
            <div className="absolute top-16 right-0 w-8 h-8 border-r-2 border-t-2 border-nbc-red dark:border-sky-400 opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-nbc-red dark:border-sky-400 opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-nbc-red dark:border-sky-400 opacity-20 pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
