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
        // National Bank of Canada - Professional Banking Theme
        nbc: {
          // Primary Brand Colors
          red: "#e41c23",          // NBC Brand Red (Primary Accent)
          redDark: "#c01017",      // Darker red for hover states
          redLight: "#ff4d52",     // Lighter red for highlights

          // Neutral Grays
          charcoal: "#444444",     // NBC Dark Gray (Primary Text)
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },

          // Background Colors
          polar: "#EEF6FB",        // NBC Light Blue (Subtle backgrounds)
          white: "#FFFFFF",        // Pure white
          offWhite: "#FAFBFC",     // Off-white for depth

          // Accent & Supporting Colors
          blue: {
            light: "#E0F2FE",      // Light blue backgrounds
            soft: "#BAE6FD",       // Soft blue accents
            medium: "#38BDF8",     // Medium blue for interactive elements
            dark: "#0369A1",       // Dark blue for text
          },

          // Success, Warning, Error (Professional Banking Palette)
          success: "#10B981",      // Green for success states
          warning: "#F59E0B",      // Amber for warnings
          error: "#EF4444",        // Red for errors

          // Text Hierarchy
          text: {
            primary: "#111827",    // Almost black
            secondary: "#444444",  // NBC Charcoal
            tertiary: "#6B7280",   // Medium gray
            muted: "#9CA3AF",      // Light gray
            inverse: "#FFFFFF",    // White text on dark backgrounds
          },
        },
      },
      fontFamily: {
        // Professional Banking Typography - Premium
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "system-ui", "sans-serif"], // Premium headings
        body: ["var(--font-inter)", "system-ui", "sans-serif"],    // Body text
        mono: ["'IBM Plex Mono'", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        // Professional, subtle animations for banking aesthetic
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "fade-in-down": "fadeInDown 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "float": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "shimmer-professional": "shimmerProfessional 2.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "card-hover": "cardHover 0.3s ease-out",
      },
      keyframes: {
        // Professional, banking-appropriate animations
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-15px)"
          },
        },
        pulseSubtle: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.9",
            transform: "scale(1.02)"
          },
        },
        shimmerProfessional: {
          "0%": {
            backgroundPosition: "-200% center"
          },
          "100%": {
            backgroundPosition: "200% center"
          },
        },
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
        },
        borderGlow: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(228, 28, 35, 0.1), 0 0 20px rgba(228, 28, 35, 0.05)"
          },
          "50%": {
            boxShadow: "0 0 20px rgba(228, 28, 35, 0.2), 0 0 40px rgba(228, 28, 35, 0.1)"
          },
        },
        cardHover: {
          "0%": {
            transform: "translateY(0) scale(1)"
          },
          "100%": {
            transform: "translateY(-5px) scale(1.02)"
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
