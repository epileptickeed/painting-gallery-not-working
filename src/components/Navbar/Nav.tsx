import { useDispatch, useSelector } from "react-redux";
import styles from "./Nav.module.scss";
import { RootState } from "../../../redux/store";
import { toggleTheme } from "../../../redux/themeSlice/slice";
import { useEffect } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const { isThemeLight } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const setDarkMode = () => {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
      document.querySelector("body")?.setAttribute("data-theme", "light");
    };
    isThemeLight ? setLightMode() : setDarkMode();
  }, [isThemeLight]);

  return (
    <nav className={styles.navbar}>
      <img
        src={isThemeLight ? "public/logo_dark.png" : "public/logo.png"}
        alt="logo"
      />
      <button onClick={() => dispatch(toggleTheme())}>
        <img
          className={styles.light_icon}
          src={
            isThemeLight
              ? "public/icons/dark_icon.png"
              : "public/icons/light_icon.png"
          }
          alt=""
        />
      </button>
    </nav>
  );
};

export default Nav;
