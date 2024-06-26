import axios from "axios";
export default async function GetPaintingData(searchValue: string) {
  const search = searchValue ? `?q=${searchValue}` : "";
  const paintings = await axios.get(
    `https://test-front.framework.team/paintings${search}`
  );
  return paintings.data;
}
