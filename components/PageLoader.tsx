"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Simulation de chargement non-linéaire (plus réaliste pour un portfolio)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Accélération aléatoire pour simuler le chargement d'assets réels
        const diff = Math.random() * 10;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const bgMain = isDark ? "#0a1929" : "#ffffff";
  const fgMain = isDark ? "#ffffff" : "#1f2937";
  const gridColor = isDark ? "rgba(56, 189, 248, 0.05)" : "rgba(228, 28, 35, 0.05)";

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: bgMain }}
          initial={{ opacity: 1 }}
          exit={{
            y: -50,
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }, // Courbe de Bézier "Cinema"
          }}
        >
          {/* 1. Grille d'arrière-plan technique (Subtile) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(circle at center, black 40%, transparent 100%)", // Vignette douce
            }}
          />

          {/* 2. Conteneur Principal */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6">
            {/* SVG Logo : Style "Architectural" (Remplissage solide et précis) */}
            <div className="relative w-full max-w-[600px] aspect-[5/2]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 240"
                className="overflow-visible"
              >
                <defs>
                  {/* Masque de découpe du texte */}
                  <clipPath id="textClip">
                    <text
                      x="300"
                      y="160"
                      textAnchor="middle"
                      className="font-sans font-extrabold text-[140px] tracking-tighter"
                      style={{ letterSpacing: "-0.05em" }} // Tracking serré moderne
                    >
                      &lt;KD/&gt;
                    </text>
                  </clipPath>
                </defs>

                {/* A. Texte "Fantôme" (Outline gris très clair) */}
                <text
                  x="300"
                  y="160"
                  textAnchor="middle"
                  className="font-sans font-extrabold text-[140px] tracking-tighter opacity-10"
                  fill={fgMain}
                  style={{ letterSpacing: "-0.05em" }}
                >
                  &lt;KD/&gt;
                </text>

                {/* B. Le Remplisseur (Shutter) */}
                <g clipPath="url(#textClip)">
                  {/* Le bloc solide qui monte */}
                  <motion.rect
                    x="0"
                    y="0"
                    width="600"
                    height="240"
                    fill={fgMain}
                    initial={{ y: 240 }}
                    animate={{ y: 240 - progress * 2.4 }} // Conversion % en pixels
                    transition={{
                      type: "spring",
                      stiffness: 40,
                      damping: 15,
                      mass: 1,
                    }}
                  />

                  {/* La ligne de "scan" brillante en haut du remplissage */}
                  <motion.rect
                    x="0"
                    height="2"
                    width="600"
                    fill={isDark ? "#38bdf8" : "#e41c23"} // Accent sky-400 ou nbc-red
                    initial={{ y: 240 }}
                    animate={{ y: 240 - progress * 2.4 }}
                    transition={{
                      type: "spring",
                      stiffness: 40,
                      damping: 15,
                      mass: 1,
                    }}
                    style={{ opacity: 0.8, filter: "blur(2px)" }}
                  />
                </g>
              </svg>
            </div>

            {/* 3. Informations Techniques (Style Terminal / Minimaliste) */}
            <div
              className="absolute bottom-[-80px] w-full flex justify-between items-end border-t border-gray-500/10 pt-4 mt-8 font-mono text-xs uppercase tracking-widest opacity-60"
              style={{ color: fgMain }}
            >
              {/* Gauche : Status */}
              <div className="flex flex-col gap-1">
                <span>System Check</span>
                <span className="text-[10px] opacity-50">Est. 2025</span>
              </div>

              {/* Droite : Le Compteur Précis */}
              <div className="flex items-end gap-2">
                <span className="mb-1 hidden sm:inline-block">
                  Loading assets
                </span>
                <motion.span className="text-4xl font-light tabular-nums">
                  {Math.round(progress).toString().padStart(3, "0")}
                </motion.span>
                <span className="mb-1">%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
