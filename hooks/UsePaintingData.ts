import { useQuery } from "react-query";
import GetPaintingData from "../utils/GetPaintingData";
import { useSelector } from "react-redux";
import { optionSelector } from "../redux/optionsSlice/selector";
import { filterSelector } from "../redux/filterSlice/selector";

export default function usePaintingData() {
  const { searchValue, pageNumber } = useSelector(filterSelector);
  const { selectedAuthor, selectedLocation, yearFirstValue, yearSecondValue } =
    useSelector(optionSelector);
  return useQuery(["paintings"], () =>
    GetPaintingData(
      searchValue,
      pageNumber,
      selectedAuthor,
      selectedLocation,
      yearFirstValue,
      yearSecondValue
    )
  );
}
