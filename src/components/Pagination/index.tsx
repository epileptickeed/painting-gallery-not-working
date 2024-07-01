import { setPageNumber } from "../../../redux/filterSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.scss";
import { RootState } from "../../../redux/store";
import usePaintingData from "../../../hooks/UsePaintingData";
import { returnPaginationRange } from "../../../utils/returnPaginationRange";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state: RootState) => state.filter);
  const { data } = usePaintingData();

  const maxPages = Math.ceil(data?.allPaintings.length / 6);

  const numberOfPages = Array.from(
    { length: maxPages },
    (_, index) => index + 1
  );
  const lastPage = numberOfPages.length;
  const firstPage = 1;

  let availablePages: (string | number)[] = returnPaginationRange(
    maxPages,
    pageNumber,
    // 2,
    1
  );

  if (data?.paintings.length === 0) {
    return <></>;
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrowBtn}
        onClick={() =>
          pageNumber === firstPage
            ? false
            : dispatch(setPageNumber(pageNumber - 1))
        }
      >
        {"<"}
      </button>

      {availablePages.map((item, index) => {
        return (
          <div
            className={
              pageNumber === item
                ? styles.pagination_item_selected
                : styles.pagination_item
            }
            key={index}
            onClick={() => {
              if (typeof item === "number") {
                dispatch(setPageNumber(item));
              }
            }}
          >
            {item}
          </div>
        );
      })}

      <button
        className={styles.arrowBtn}
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
