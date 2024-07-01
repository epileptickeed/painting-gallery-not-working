import axios from "axios";

export default async function GetAuthorsData(authorQuery: string) {
  const query = authorQuery === "" ? "" : `?q=${authorQuery}`;
  const { data } = await axios.get(
    `https://test-front.framework.team/authors${query}`
  );
  return data;
}
