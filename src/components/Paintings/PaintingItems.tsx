import UseAuthorsData from "../../../hooks/UseAuthorsData";
import UseLocationsData from "../../../hooks/UseLocationsData";
import {
  AuthorsProps,
  LocationsProps,
} from "../../../redux/optionsSlice/slice";
import { Painting } from "./Paintings";
import styles from "./Paintings.module.scss";

const PaintingItems = ({
  id,
  name,
  created,
  // imageUrl,
  authorId,
  locationId,
}: Painting) => {
  const authors = UseAuthorsData();
  const locations = UseLocationsData();

  const author = authors.data?.find(
    (item: AuthorsProps) => item.id === authorId
  );
  const location = locations.data?.find(
    (item: LocationsProps) => item.id === locationId
  );

  return (
    <div key={id} className={styles.painting_item}>
      <div className={styles.painting_item_info}>
        <div className={styles.painting_item_first_info}>
          <p className={styles.painting_item_header}>{name}</p>
          <p className={styles.painting_item_year}>{created}</p>
        </div>
        <div className={styles.painting_item_secondary_info}>
          <p className={styles.painting_item_author}>{author?.name}</p>
          <p className={styles.painting_item_location}>{location?.location}</p>
        </div>
      </div>
      <img src={"public/image_1.png"} alt={name} />
    </div>
  );
};

export default PaintingItems;
