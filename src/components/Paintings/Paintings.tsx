import styles from './Paintings.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setSearchValue } from '../../../redux/filterSlice/slice';
import usePaintingData from '../../../hooks/UsePaintingData';
import { FormEvent, useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Filter from '../Filter';
import { AnimatePresence } from 'framer-motion';
import PaintingItems from './PaintingItems';
import { optionSelector } from '../../../redux/optionsSlice/selector';

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
  const { selectedAuthor } = useSelector(optionSelector);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  console.log(selectedAuthor);

  useEffect(() => {
    refetch();
  }, [searchValue, pageNumber, selectedAuthor]);

  // console.log(data);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
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
        {data.length === 0 ? (
          <div>
            <p>
              No matches for <strong>{searchValue}</strong>
            </p>
            <p>please try again with different spelling or keywords</p>
          </div>
        ) : (
          data.map((item: Painting) => {
            return <PaintingItems {...item} key={item.id} />;
          })
        )}
      </div>

      <Pagination />
    </main>
  );
};

export default Paintings;
