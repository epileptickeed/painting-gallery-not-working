import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../Paintings.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  setPageNumber,
  setSearchValue,
} from "../../../../redux/filterSlice/slice";
import { AnimatePresence } from "framer-motion";
import Filter from "../../Filter";

const FilterForm = () => {
  const { searchValue } = useSelector((state: RootState) => state.filter);
  const { isThemeLight } = useSelector((state: RootState) => state.theme);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleInputQuery = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
    dispatch(setPageNumber(1));
  };

  return (
    <div className={styles.filter}>
      <form className={styles.form} onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Painting title"
          value={searchValue}
          onChange={(e) => handleInputQuery(e)}
        />
        <img
          className={styles.icon_find}
          src={
            isThemeLight
              ? "public/icons/search_icon_dark.png"
              : "public/icons/icon_find.png"
          }
          alt=""
        />
      </form>
      <button
        className={styles.openFilterBtn}
        onClick={() => setIsActive(true)}
      >
        <img
          src={
            isThemeLight
              ? "public/icons/filter_icon_dark.png"
              : "public/icons/filter_icon_light.png"
          }
          alt="filter_icon"
        />
      </button>

      <AnimatePresence mode="wait">
        {isActive && <Filter setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
};

export default FilterForm;
