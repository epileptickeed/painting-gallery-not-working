import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Filter.module.scss";
import { motion } from "framer-motion";
import UseAuthorsData from "../../../hooks/UseAuthorsData";
import { menuSlide } from "./anim";

type Active = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

type Authors = {
  name: string;
  id: number;
};

const Filter = ({ isActive, setIsActive }: Active) => {
  const [open, setOpen] = useState(false);

  const authors = UseAuthorsData();

  const optionsData = [
    { title: "Artist", isOpen: false, id: 0, options: authors?.data },
    { title: "Location", isOpen: false, id: 1, options: [] },
    { title: "Years", isOpen: false, id: 2 },
  ];
  const [data, setData] = useState(optionsData);

  console.log(authors.data);

  useEffect(() => {
    setData(optionsData);
  }, [authors.data]);

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
      initial="initial"
    >
      <button className={styles.close_icon} onClick={() => setIsActive(false)}>
        <img src="/icons/close_icon.png" alt="close_icon" />
      </button>
      <div className={styles.filter_inner}>
        {data?.map((item, index) => {
          return (
            <div className={styles.filter_options} key={index}>
              <div
                className={styles.filter_options_inner}
                onClick={() => OpenOptions(index)}
              >
                <h2>{item.title}</h2>
                <button>
                  <img
                    src={
                      item.isOpen
                        ? "/icons/minus_icon.png"
                        : "/icons/plus_icon.png"
                    }
                    alt="icon"
                  />
                </button>
              </div>
              {item.isOpen &&
                (item.options ? (
                  <div className={styles.options}>
                    <select>
                      <option
                        value="someOption"
                        aria-placeholder="Select the artist"
                      ></option>
                      {item.options.map((item: Authors) => {
                        return (
                          <option value={item.name} key={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : (
                  "hello"
                ))}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Filter;
