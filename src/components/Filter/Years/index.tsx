import { FormEvent, useState } from "react";
import styles from "./Years.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setYearFirstValue,
  setYearSecondValue,
} from "../../../../redux/optionsSlice/slice";
import { optionSelector } from "../../../../redux/optionsSlice/selector";

const Years = () => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const dispatch = useDispatch();

  const { yearFirstValue, yearSecondValue } = useSelector(optionSelector);

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  const MaxInputLength = (e: any) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  };

  return (
    <div className={styles.years_menu}>
      <div
        className={styles.years_menu_inner}
        onClick={() => setIsSelectorVisible(!isSelectorVisible)}
      >
        <h2>Years</h2>
        <img
          src={
            isSelectorVisible
              ? "public/icons/minus_icon.png"
              : "public/icons/plus_icon.png"
          }
          alt="icon"
        />
      </div>

      <div
        className={styles.years_options}
        style={{ display: isSelectorVisible ? "flex" : "none" }}
      >
        <form onSubmit={handleSubmitForm}>
          <input
            type="number"
            className={styles.menu_btn}
            placeholder="From"
            max={2024}
            value={yearFirstValue}
            onInput={(e) => MaxInputLength(e)}
            onChange={(e) => dispatch(setYearFirstValue(e.target.value))}
          />
        </form>
        <img src="public/icons/minus_icon.png" alt="icon" />
        <form onSubmit={handleSubmitForm}>
          <input
            type="number"
            className={styles.menu_btn}
            placeholder="To"
            max={2024}
            value={yearSecondValue}
            onInput={(e) => MaxInputLength(e)}
            onChange={(e) => dispatch(setYearSecondValue(e.target.value))}
          />
        </form>
      </div>
    </div>
  );
};

export default Years;
