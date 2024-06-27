import { setPageNumber } from '../../../redux/filterSlice/slice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Pagination.module.scss';
import { RootState } from '../../../redux/store';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state: RootState) => state.filter);
  let numberofpages = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.pagination}>
      <button onClick={() => (pageNumber === 0 ? false : dispatch(setPageNumber(pageNumber - 1)))}>
        {'<'}
      </button>
      {numberofpages.map((item, index) => {
        return (
          <div
            className={styles.pagination_item}
            key={index}
            onClick={() => dispatch(setPageNumber(item))}>
            {item}
          </div>
        );
      })}
      <button onClick={() => (pageNumber === 6 ? false : dispatch(setPageNumber(pageNumber + 1)))}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
