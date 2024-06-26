import { useQuery } from 'react-query';
import GetPaintingData from '../utils/GetPaintingData';

export default function useGetProfile() {
  return useQuery({
    queryKey: ['paintings'],
    queryFn: GetPaintingData,
  });
}
