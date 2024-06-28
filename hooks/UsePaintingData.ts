import { useQuery } from 'react-query';
import GetPaintingData from '../utils/GetPaintingData';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { optionSelector } from '../redux/optionsSlice/selector';

export default function usePaintingData() {
  const { searchValue, pageNumber } = useSelector((state: RootState) => state.filter);
  const { selectedAuthor, selectedLocation } = useSelector(optionSelector);
  return useQuery(['paintings'], () =>
    GetPaintingData(searchValue, pageNumber, selectedAuthor, selectedLocation),
  );
}
