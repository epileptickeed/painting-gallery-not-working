import { useQuery } from "react-query";
import GetAuthorsData from "../utils/GetAuthorsData";

export default function UseAuthorsData() {
  return useQuery(["authors"], () => GetAuthorsData());
}
