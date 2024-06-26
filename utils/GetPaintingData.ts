import axios from 'axios';
export default async function GetPaintingData() {
  const paintings = await axios.get('https://test-front.framework.team/paintings');
  return paintings.data;
}
