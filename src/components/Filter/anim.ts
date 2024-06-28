import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

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

export const staggerMenuItems = stagger(0.1, { startDelay: 0.05 });

export default function useMenuAnimation(areOptionsVisible: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.arrow', { rotate: areOptionsVisible ? 180 : 0 }, { duration: 0.2 });

    animate(
      'ul',
      {
        clipPath: areOptionsVisible
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      },
    );

    animate(
      'li',
      areOptionsVisible
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: areOptionsVisible ? staggerMenuItems : 0,
      },
    );
  }, [areOptionsVisible]);

  return scope;
}
