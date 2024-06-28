import { Dispatch, SetStateAction } from 'react';
import styles from './Filter.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Authors from './Authors';
import Location from './Location';

type Active = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Filter = ({ setIsActive }: Active) => {
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
      <div className={styles.filter_inner}>
        <Authors />
        <Location />
      </div>
    </motion.div>
  );
};

export default Filter;
