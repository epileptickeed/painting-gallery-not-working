import axios from "axios";

export default async function GetLocationsData(locationQuery: string) {
  const query = locationQuery === "" ? "" : `?q=${locationQuery}`;
  const { data } = await axios.get(
    `https://test-front.framework.team/locations${query}`
  );
  return data;
}
