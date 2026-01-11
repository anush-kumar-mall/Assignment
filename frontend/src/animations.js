// src/animations.js

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,                 // 👈 was 40 (too heavy)
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,   // 👈 was 0.15 (too slow)
      delayChildren: 0.05,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 12,                  // 👈 lighter movement
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};
