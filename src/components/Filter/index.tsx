import { Dispatch, SetStateAction } from 'react';
import styles from './Filter.module.scss';
import { motion } from 'framer-motion';

type Active = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Filter = ({ isActive, setIsActive }: Active) => {
  const menuSlide = {
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

  return (
    <motion.div
      className={styles.filter_main}
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial">
      <button className={styles.close_icon} onClick={() => setIsActive(false)}>
        <img src="/icons/close_icon.png" alt="close_icon" />
      </button>
      <div className={styles.filter_inner}>hello</div>
    </motion.div>
  );
};

export default Filter;
