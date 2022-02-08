export const shortcutsContainer = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const shortcutItem = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const imageHover = {
  hover: {
    scale: 1.3,
    originX: 0,
  },
  tap: {
    scale: 0.9,
  },
};
