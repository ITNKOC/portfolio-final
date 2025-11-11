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
            className="relative w-full h-full max-w-[95vw] max-h-[90vh] bg-white dark:bg-cyber-darker rounded-2xl overflow-hidden shadow-2xl border-4 border-light-rose dark:border-cyber-primary"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-cyber-black/95 backdrop-blur-md border-b-2 border-light-roseSoft dark:border-cyber-primary/30">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-light-rose dark:bg-cyber-primary"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(30, 58, 138, 0.5)",
                      "0 0 20px rgba(30, 58, 138, 0.8)",
                      "0 0 10px rgba(30, 58, 138, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="text-lg font-orbitron font-bold text-gray-900 dark:text-white">
                  {projectTitle} <span className="text-light-rose dark:text-cyber-primary">// Live Demo</span>
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                {/* View Mode Toggle */}
                <div className="flex items-center bg-light-roseLight dark:bg-cyber-gray rounded-lg p-1 border-2 border-light-roseSoft dark:border-cyber-gray">
                  <motion.button
                    onClick={() => setViewMode("desktop")}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === "desktop"
                        ? "bg-light-rose dark:bg-cyber-primary text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-light-rose dark:hover:text-cyber-primary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Desktop View"
                  >
                    <FiMonitor size={18} />
                  </motion.button>
                  <motion.button
                    onClick={() => setViewMode("mobile")}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === "mobile"
                        ? "bg-light-rose dark:bg-cyber-primary text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-light-rose dark:hover:text-cyber-primary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Mobile View"
                  >
                    <FiSmartphone size={18} />
                  </motion.button>
                </div>

                {/* Open in new tab */}
                <motion.a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-light-roseLight dark:bg-cyber-gray hover:bg-light-roseSoft dark:hover:bg-cyber-primary/20 text-light-rose dark:text-cyber-primary border-2 border-light-roseSoft dark:border-cyber-gray transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Open in new tab"
                >
                  <FiExternalLink size={18} />
                </motion.a>

                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  className="p-2.5 rounded-lg bg-light-roseLight dark:bg-cyber-gray hover:bg-red-100 dark:hover:bg-red-900/20 text-light-rose dark:text-cyber-primary hover:text-red-600 dark:hover:text-red-500 border-2 border-light-roseSoft dark:border-cyber-gray hover:border-red-500 dark:hover:border-red-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  title="Close (ESC)"
                >
                  <FiX size={20} />
                </motion.button>
              </div>
            </div>

            {/* Loading Animation */}
            <div className="absolute inset-0 flex items-center justify-center pt-16 bg-gray-100 dark:bg-cyber-black">
              <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 border-4 border-light-roseSoft dark:border-cyber-gray rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-light-rose dark:border-t-cyber-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="text-gray-700 dark:text-white font-mono text-sm">Loading demo<motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >...</motion.span></p>
              </motion.div>
            </div>

            {/* Iframe Container */}
            <div className="absolute inset-0 pt-16 overflow-auto bg-gray-200 dark:bg-cyber-black/50">
              {viewMode === "desktop" ? (
                <motion.iframe
                  key="desktop-view"
                  src={demoUrl}
                  className="w-full h-full border-0"
                  title={`${projectTitle} Demo`}
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
                        title={`${projectTitle} Demo - Mobile View`}
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

            {/* Corner Decorations - Dark Mode Only */}
            <div className="absolute top-16 left-0 w-8 h-8 border-l-2 border-t-2 border-cyber-primary dark:opacity-30 opacity-0 pointer-events-none" />
            <div className="absolute top-16 right-0 w-8 h-8 border-r-2 border-t-2 border-cyber-primary dark:opacity-30 opacity-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyber-primary dark:opacity-30 opacity-0 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyber-primary dark:opacity-30 opacity-0 pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
