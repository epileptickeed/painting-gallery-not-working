import { useQuery } from 'react-query';
import GetLocationsData from '../utils/GetLocationsData';

export default function UseLocationsData() {
  return useQuery(['locations'], () => GetLocationsData());
}
