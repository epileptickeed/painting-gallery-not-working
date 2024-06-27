import axios from 'axios';
export default async function GetPaintingData(searchValue: string, page: number) {
  const search = searchValue ? `q=${searchValue}` : '';
  const paintings = await axios.get(
    `https://test-front.framework.team/paintings?${search}&_limit=6&_page=${page}`,
  );
  return paintings.data;
}
