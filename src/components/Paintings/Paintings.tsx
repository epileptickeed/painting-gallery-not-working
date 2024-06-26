import styles from "./Paintings.module.scss";
import PaintingItems from "./PaintingItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setSearchValue } from "../../../redux/filterSlice/slice";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import usePaintingData from "../../../hooks/UsePaintingData";
import { useEffect, useState } from "react";
import GetPaintingData from "../../../utils/GetPaintingData";

export type Painting = {
  id: number;
  name: string;
  imageUrl: string;
  locationId: number;
  created: number;
  authorId: number;
};

const Paintings = () => {
  const { data, isLoading, error } = usePaintingData();
  const { searchValue } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  console.log(data);
  const submitForm = (e: any) => {
    e.preventDefault();
  };

  if (isLoading) return "Loading";
  if (error) return "Something went wrong" + error;

  return (
    <main className={styles.main}>
      <div className={styles.filter}>
        <form className={styles.form} onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Painting title"
            value={searchValue}
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
          />
          <img className={styles.icon_find} src="/icons/icon_find.png" alt="" />
        </form>
        <button className={styles.button}>
          <img src="/icons/filter_icon_light.png" alt="filter_icon" />
        </button>
      </div>

      <div className={styles.painting_gallery}>
        {/* {filteredBySearch} */}
        {data.map((item: Painting) => {
          return (
            <div key={item.id} className={styles.painting_item}>
              <div className={styles.painting_item_info}>
                <p className={styles.painting_item_header}>{item.name}</p>
                <p className={styles.painting_item_year}>{item.created}</p>
              </div>
              <img src="/image 1.png" alt={item.name} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Paintings;
