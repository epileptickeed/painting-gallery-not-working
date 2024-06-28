import axios from 'axios';

export default async function GetLocationsData() {
  const { data } = await axios.get(`https://test-front.framework.team/locations`);
  return data;
}
