import { useQuery } from 'react-query';
import GetPaintingData from '../utils/GetPaintingData';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function usePaintingData() {
  const { searchValue, pageNumber } = useSelector((state: RootState) => state.filter);
  return useQuery(['paintings'], () => GetPaintingData(searchValue, pageNumber));
}
