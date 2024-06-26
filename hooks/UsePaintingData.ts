import { useQuery } from "react-query";
import GetPaintingData from "../utils/GetPaintingData";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import axios from "axios";
import { useMemo } from "react";

export default function usePaintingData() {
  const { searchValue } = useSelector((state: RootState) => state.filter);
  const search = searchValue ? `?q=${searchValue}` : "";
  return useQuery(["paintings"], () => GetPaintingData(searchValue));
}
