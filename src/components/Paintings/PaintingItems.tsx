import { Painting } from './Paintings';
import styles from './Paintings.module.scss';

const PaintingItems = ({ id, name, created, imageUrl }: Painting) => {
  return (
    <div key={id} className={styles.painting_item}>
      <div className={styles.painting_item_info}>
        <p className={styles.painting_item_header}>{name}</p>
        <p className={styles.painting_item_year}>{created}</p>
      </div>
      <img src={'/image 1.png'} alt={name} />
    </div>
  );
};

export default PaintingItems;
