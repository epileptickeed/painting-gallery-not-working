import styles from "./Paintings.module.scss";
import { useSelector } from "react-redux";
import usePaintingData from "../../../hooks/UsePaintingData";
import { useEffect } from "react";
import Pagination from "../Pagination";
import PaintingItems from "./PaintingItems";
import { optionSelector } from "../../../redux/optionsSlice/selector";
import FilterForm from "./FilterForm";
import { filterSelector } from "../../../redux/filterSlice/selector";

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
  const { searchValue, pageNumber } = useSelector(filterSelector);
  const { selectedAuthor, selectedLocation } = useSelector(optionSelector);

  useEffect(() => {
    refetch();
  }, [searchValue, pageNumber, selectedAuthor, selectedLocation]);

  if (isLoading) return "Loading";
  if (error) return "Something went wrong" + error;

  return (
    <main className={styles.main}>
      <FilterForm />

      <div className={styles.painting_gallery}>
        {data.length === 0 ? (
          <div>
            <p>
              No matches for <strong>{searchValue} </strong>
              <strong>{selectedAuthor.name} </strong>
              <strong>{selectedLocation.location}</strong>
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
