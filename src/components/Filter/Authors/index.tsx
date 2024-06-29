import styles from "./Authors.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthorsProps,
  setAuthorQuery,
  setSelectedAuthor,
} from "../../../../redux/optionsSlice/slice";
import useMenuAnimation from "../anim";
import { optionSelector } from "../../../../redux/optionsSlice/selector";
import UseAuthorsData from "../../../../hooks/UseAuthorsData";
import { setPageNumber } from "../../../../redux/filterSlice/slice";

const Authors = () => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const dispatch = useDispatch();

  const { selectedAuthor, authorQuery } = useSelector(optionSelector);
  const authors = UseAuthorsData();

  const optionsContainer = useRef<HTMLUListElement | null>(null);
  const optionsButton = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !optionsContainer.current?.contains(event.target as Node) &&
        event.target !== optionsButton.current
      ) {
        setAreOptionsVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const scope = useMenuAnimation(areOptionsVisible);

  const handleSelectAuthor = (author: AuthorsProps) => {
    dispatch(setSelectedAuthor(author));
    dispatch(setPageNumber(1));
    setAreOptionsVisible(false);
  };

  useEffect(() => {
    authors.refetch();
  }, [authorQuery]);

  if (!authors) {
    return (
      <div ref={scope}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.locations_menu}>
      <div
        className={styles.locations_menu_inner}
        onClick={() => setIsSelectorVisible(!isSelectorVisible)}
      >
        <h2>Artists</h2>
        <img
          src={
            isSelectorVisible ? "/icons/minus_icon.png" : "/icons/plus_icon.png"
          }
          alt="icon"
        />
      </div>
      <nav
        className={styles.locations_options}
        ref={scope}
        style={{ display: isSelectorVisible ? "block" : "none" }}
      >
        <motion.form>
          <motion.input
            type="text"
            whileTap={{ scale: 0.97 }}
            onClick={() => setAreOptionsVisible(!areOptionsVisible)}
            className={styles.menu_btn}
            ref={optionsButton}
            placeholder="Select the author"
            value={selectedAuthor.name || authorQuery}
            onChange={(e) => dispatch(setAuthorQuery(e.target.value))}
          />

          <div
            className="arrow"
            style={{
              transformOrigin: "50% 45%",
              position: "absolute",
              right: 10,
              top: "20%",
            }}
          >
            <img src="/icons/expand_icon.png" alt="icon" />
          </div>
        </motion.form>

        <ul
          style={{
            pointerEvents: areOptionsVisible ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
          className={styles.list_main}
          ref={optionsContainer}
        >
          {authors?.data?.length > 0 ? (
            authors.data.map((item: AuthorsProps) => {
              return (
                <li onClick={() => handleSelectAuthor(item)} key={item.id}>
                  {item.name}
                </li>
              );
            })
          ) : (
            <li>There are no matching results for your query</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Authors;
