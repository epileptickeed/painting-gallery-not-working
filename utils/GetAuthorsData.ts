import axios from "axios";

export default async function GetAuthorsData() {
  const { data } = await axios.get(`https://test-front.framework.team/authors`);
  return data;
}
