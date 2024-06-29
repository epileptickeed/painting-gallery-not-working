import { setPageNumber } from "../../../redux/filterSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.scss";
import { RootState } from "../../../redux/store";
import usePaintingData from "../../../hooks/UsePaintingData";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state: RootState) => state.filter);
  const paintings = usePaintingData();
  let numberOfPages = [1, 2, 3, 4, 5, 6];
  const lastPage = numberOfPages.length;
  const firstPage = numberOfPages[0];

  if (
    paintings.data.length === 0 ||
    (paintings.data.length <= 5 && pageNumber !== 6)
  ) {
    return <></>;
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() =>
          pageNumber === firstPage
            ? false
            : dispatch(setPageNumber(pageNumber - 1))
        }
      >
        {"<"}
      </button>
      {numberOfPages.map((item, index) => {
        return (
          <div
            className={
              pageNumber === index + 1
                ? styles.pagination_item_selected
                : styles.pagination_item
            }
            key={index}
            onClick={() => dispatch(setPageNumber(item))}
          >
            {item}
          </div>
        );
      })}
      <button
        onClick={() =>
          pageNumber === lastPage
            ? false
            : dispatch(setPageNumber(pageNumber + 1))
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
