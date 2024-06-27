export const menuSlide = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  enter: {
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    opacity: 1,
  },
  exit: {
    x: '100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    opacity: 0,
  },
};
