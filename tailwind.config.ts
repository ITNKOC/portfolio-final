import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Matrix Hacker - Dark Mode (Cyberpunk) - Green Only
        cyber: {
          black: "#0a0a0a",       // Deep Black
          darker: "#111111",      // Dark Void
          dark: "#1a1a1a",        // Slightly lighter
          gray: "#2a2a2a",        // Dark Gray
          primary: "#00FF41",     // Matrix Green (neon) - Main accent color
          secondary: "#00FF41",   // Same as primary (legacy compatibility)
          accent: "#00FF41",      // Same as primary (legacy compatibility)
        },
        // Light Mode colors - Clean Professional with Midnight Blue
        light: {
          primary: "#000000",     // Pure Black
          secondary: "#1a1a1a",   // Charcoal
          accent: "#404040",      // Medium Gray
          rose: "#1E3A8A",        // Deep Midnight Blue
          roseSoft: "#3B82F6",    // Medium Blue
          roseLight: "#DBEAFE",   // Very Light Blue
          bg: "#FFFFFF",          // Pure White
          bgAlt: "#F8F9FA",       // Soft White
          border: "#E5E7EB",      // Light Border
        },
      },
      fontFamily: {
        sans: ["var(--font-chakra-petch)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        chakra: ["var(--font-chakra-petch)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "glow-cyan": "glow-cyan 2s ease-in-out infinite alternate",
        "glow-pink": "glow-pink 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "matrix-scan": "matrixScan 2s ease-in-out infinite",
        "typing": "typing 3.5s steps(40, end)",
        "glitch-1": "glitch1 0.3s cubic-bezier(.25,.46,.45,.94) both infinite",
        "glitch-2": "glitch2 0.3s cubic-bezier(.25,.46,.45,.94) reverse both infinite",
        "border-beam": "borderBeam 2s linear infinite",
        "hero-pulse": "heroNamePulse 3s ease-in-out infinite",
        "neon-flicker": "neonFlicker 3s infinite",
        "shimmer": "shimmer 3s infinite",
        "electric-static": "electricStatic 0.1s infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00FF41, 0 0 10px #00FF41" },
          "100%": { boxShadow: "0 0 20px #00FF41, 0 0 30px #00FF41, 0 0 40px #00FF41" },
        },
        "glow-cyan": {
          "0%": { boxShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF" },
          "100%": { boxShadow: "0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF" },
        },
        "glow-pink": {
          "0%": { boxShadow: "0 0 5px #FF0080, 0 0 10px #FF0080" },
          "100%": { boxShadow: "0 0 20px #FF0080, 0 0 30px #FF0080, 0 0 40px #FF0080" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        matrixScan: {
          "0%, 100%": {
            backgroundPosition: "0% 0%",
            opacity: "0.3"
          },
          "50%": {
            backgroundPosition: "100% 100%",
            opacity: "0.8"
          },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        glitch1: {
          "0%, 100%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)"
          },
          "20%": {
            transform: "translate(-2px, 2px)",
            clipPath: "inset(0 0 80% 0)"
          },
          "40%": {
            transform: "translate(-2px, -2px)",
            clipPath: "inset(80% 0 0 0)"
          },
          "60%": {
            transform: "translate(2px, 2px)",
            clipPath: "inset(0 0 60% 0)"
          },
          "80%": {
            transform: "translate(2px, -2px)",
            clipPath: "inset(60% 0 0 0)"
          },
        },
        glitch2: {
          "0%, 100%": {
            transform: "translate(0)",
            clipPath: "inset(0 0 0 0)"
          },
          "20%": {
            transform: "translate(2px, -2px)",
            clipPath: "inset(0 0 70% 0)"
          },
          "40%": {
            transform: "translate(2px, 2px)",
            clipPath: "inset(70% 0 0 0)"
          },
          "60%": {
            transform: "translate(-2px, -2px)",
            clipPath: "inset(0 0 50% 0)"
          },
          "80%": {
            transform: "translate(-2px, 2px)",
            clipPath: "inset(50% 0 0 0)"
          },
        },
        borderBeam: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        heroNamePulse: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 5px #00FF41) drop-shadow(0 0 15px #00FF41)"
          },
          "50%": {
            filter: "drop-shadow(0 0 20px #00FF41) drop-shadow(0 0 40px #00FF41) drop-shadow(0 0 60px #00FF41)"
          },
        },
        neonFlicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            textShadow: "0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 40px #00FF41"
          },
          "20%, 24%, 55%": {
            textShadow: "none"
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        electricStatic: {
          "0%, 100%": { opacity: "0.1", transform: "translateY(0px)" },
          "25%": { opacity: "0.3", transform: "translateY(-2px)" },
          "50%": { opacity: "0.2", transform: "translateY(2px)" },
          "75%": { opacity: "0.4", transform: "translateY(-1px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
