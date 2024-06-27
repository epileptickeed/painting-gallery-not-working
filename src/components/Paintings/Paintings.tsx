import styles from './Paintings.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setSearchValue } from '../../../redux/filterSlice/slice';
import usePaintingData from '../../../hooks/UsePaintingData';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Filter from '../Filter';
import { AnimatePresence } from 'framer-motion';

export type Painting = {
  id: number;
  name: string;
  imageUrl: string;
  locationId: number;
  created: number;
  authorId: number;
};

const Paintings = () => {
  const { data, isLoading, error, refetch } = usePaintingData();
  const { searchValue, pageNumber } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    refetch();
  }, [searchValue, pageNumber]);

  const submitForm = (e: any) => {
    e.preventDefault();
  };

  if (isLoading) return 'Loading';
  if (error) return 'Something went wrong' + error;

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
        <button className={styles.button} onClick={() => setIsActive(true)}>
          <img src="/icons/filter_icon_light.png" alt="filter_icon" />
        </button>

        <AnimatePresence mode="wait">
          {isActive && <Filter isActive={isActive} setIsActive={setIsActive} />}
        </AnimatePresence>
      </div>

      <div className={styles.painting_gallery}>
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

      <Pagination />
    </main>
  );
};

export default Paintings;
