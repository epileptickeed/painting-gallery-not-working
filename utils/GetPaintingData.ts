import axios from 'axios';

import { AuthorsProps, LocationsProps } from '../redux/optionsSlice/slice';

export default async function GetPaintingData(
  searchValue: string,
  page: number,
  selectedAuthor: AuthorsProps | any,
  selectedLocation: LocationsProps | any,
) {
  const search = searchValue ? `q=${searchValue}` : '';
  const author = selectedAuthor.length === 0 ? '' : `&authorId=${selectedAuthor.id}`;
  const location = selectedLocation.length === 0 ? '' : `&&locationId=${selectedLocation.id}`;
  const paintings = await axios.get(
    `https://test-front.framework.team/paintings?${search}&_limit=6&_page=${page}${author}${location}`,
  );
  return paintings.data;
}
