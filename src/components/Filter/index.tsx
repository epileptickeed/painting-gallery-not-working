import { Dispatch, SetStateAction } from "react";
import styles from "./Filter.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Authors from "./Authors";
import Location from "./Location";
import { useDispatch } from "react-redux";
import {
  setAuthorQuery,
  setLocationQuery,
  setSelectedAuthor,
  setSelectedLocation,
} from "../../../redux/optionsSlice/slice";

type Active = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Filter = ({ setIsActive }: Active) => {
  const dispatch = useDispatch();

  const handleClearQueries = () => {
    dispatch(setSelectedAuthor([]));
    dispatch(setSelectedLocation([]));
    dispatch(setAuthorQuery(""));
    dispatch(setLocationQuery(""));
  };

  return (
    <motion.div
      className={styles.filter_main}
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <button className={styles.close_icon} onClick={() => setIsActive(false)}>
        <img src="/icons/close_icon.png" alt="close_icon" />
      </button>
      <div className={styles.filter_inner}>
        <Authors />
        <Location />
      </div>
      <div className={styles.handleButtons}>
        <button
          className={styles.btn_showResults}
          onClick={() => setIsActive(false)}
        >
          SHOW THE RESULTS
        </button>
        <button
          className={styles.btn_clear}
          onClick={() => handleClearQueries()}
        >
          CLEAR
        </button>
      </div>
    </motion.div>
  );
};

export default Filter;
