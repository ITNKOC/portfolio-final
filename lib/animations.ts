/**
 * Professional Animation Library for NBC Portfolio
 * Smooth, performant animations optimized for both mobile and desktop
 */

import { Variants } from "framer-motion";

// ============================================
// SCROLL ANIMATIONS - Optimized for Performance
// ============================================

/**
 * Fade in animation - Simple and elegant
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] // Tailwind's ease-out
    }
  }
};

/**
 * Fade in from bottom - Perfect for cards and sections
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

/**
 * Fade in from left - Great for alternating content
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

/**
 * Fade in from right - Great for alternating content
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

/**
 * Scale in - Subtle zoom effect
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

/**
 * Card hover animation - Professional lift effect
 */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

/**
 * Stagger children animation - For lists and grids
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

/**
 * Stagger item - Use with staggerContainer
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// ============================================
// VIEWPORT SETTINGS - Optimized for scroll animations
// ============================================

/**
 * Standard viewport settings for scroll animations
 * Triggers when 20% of element is visible
 */
export const viewportSettings = {
  once: true, // Only animate once
  amount: 0.2, // Trigger when 20% visible
  margin: "0px 0px -100px 0px" // Start animation slightly before element comes into view
};

/**
 * Viewport settings for cards
 * More sensitive trigger for better UX
 */
export const cardViewportSettings = {
  once: true,
  amount: 0.15, // Trigger when 15% visible
  margin: "0px 0px -50px 0px"
};

/**
 * Viewport settings for mobile
 * More aggressive trigger for smaller screens
 */
export const mobileViewportSettings = {
  once: true,
  amount: 0.1, // Trigger when 10% visible
  margin: "0px 0px -30px 0px"
};

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions = {
  // Smooth and natural
  smooth: {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1] // Tailwind ease-out
  },

  // Quick and snappy
  snappy: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1]
  },

  // Slow and elegant
  elegant: {
    duration: 0.9,
    ease: [0.4, 0, 0.2, 1]
  },

  // Spring physics
  spring: {
    type: "spring",
    damping: 20,
    stiffness: 100
  },

  // Bouncy spring
  bouncy: {
    type: "spring",
    damping: 15,
    stiffness: 200
  }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get responsive viewport settings based on screen size
 */
export const getViewportSettings = (isMobile: boolean) => {
  return isMobile ? mobileViewportSettings : viewportSettings;
};

/**
 * Create a stagger animation with custom delay
 */
export const createStagger = (delayBetween: number = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delayBetween,
      delayChildren: 0.1
    }
  }
});

/**
 * Create a fade in animation with custom direction
 */
export const createFadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 40
): Variants => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
};

/**
 * Professional card animation preset
 */
export const professionalCard: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
