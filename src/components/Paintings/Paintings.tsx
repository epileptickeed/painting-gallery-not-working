import { useState } from 'react';
import UsePaintingData from '../../../hooks/UsePaintingData';
import styles from './Paintings.module.scss';
import PaintingItems from './PaintingItems';

export type Painting = {
  id: number;
  name: string;
  imageUrl: string;
  locationId: number;
  created: number;
  authorId: number;
};

const Paintings = () => {
  const { data, isLoading, error } = UsePaintingData();
  //   console.log(data);

  const [searchValue, setSearchValue] = useState('');

  const filteredBySearch = data
    ?.filter((item: Painting) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item: Painting) => {
      return <PaintingItems key={item.id} {...item} />;
    });

  if (isLoading) return 'Loading';
  if (error) return 'Something went wrong' + error;

  return (
    <main className={styles.main}>
      <div className={styles.filter}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Painting title"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img className={styles.icon_find} src="/icons/icon_find.png" alt="" />
        </form>
        <button className={styles.button}>
          <img src="/icons/filter_icon_light.png" alt="filter_icon" />
        </button>
      </div>

      <div className={styles.painting_gallery}>
        {filteredBySearch}
        {/* {data.map((item: Painting) => {
          return (
            <div key={item.id} className={styles.painting_item}>
              <div className={styles.painting_item_info}>
                <p className={styles.painting_item_header}>{item.name}</p>
                <p className={styles.painting_item_year}>{item.created}</p>
              </div>
              <img src="/image 1.png" alt={item.name} />
            </div>
          );
        })} */}
      </div>
    </main>
  );
};

export default Paintings;
