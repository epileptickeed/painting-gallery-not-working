import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from './anim';

type Active = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Filter = ({ isActive, setIsActive }: Active) => {
  const [open, setOpen] = useState(false);

  const optionsData = [
    { title: 'Artist', isOpen: false, id: 0, options: [] },
    { title: 'Location', isOpen: false, id: 1, options: [] },
    { title: 'Years', isOpen: false, id: 2, options: [] },
  ];
  const [data, setData] = useState(optionsData);

  useEffect(() => {}, [data]);

  const OpenOptions = (index: number) => {
    const updatedData = data.map((item) => {
      return item.id === index ? { ...item, isOpen: !item.isOpen } : item;
    });
    setData(updatedData);
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
      <div className={styles.filter_inner}>
        {data?.map((item, index) => {
          return (
            <div className={styles.filter_options} key={index}>
              <div className={styles.filter_options_inner} onClick={() => OpenOptions(index)}>
                <h2>{item.title}</h2>
                <button>
                  <img
                    src={item.isOpen ? '/icons/minus_icon.png' : '/icons/plus_icon.png'}
                    alt="icon"
                  />
                </button>
              </div>
              {item.isOpen && (
                <div>
                  <select>
                    <option value="someOption">Some option</option>
                    <option value="otherOption">Other option</option>
                  </select>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Filter;
