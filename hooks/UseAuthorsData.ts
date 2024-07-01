import { useQuery } from "react-query";
import GetAuthorsData from "../utils/GetAuthorsData";
import { useSelector } from "react-redux";
import { optionSelector } from "../redux/optionsSlice/selector";

export default function UseAuthorsData() {
  const { authorQuery } = useSelector(optionSelector);
  return useQuery(["authors"], () => GetAuthorsData(authorQuery));
}
