import { useQuery } from "react-query";
import GetLocationsData from "../utils/GetLocationsData";
import { useSelector } from "react-redux";
import { optionSelector } from "../redux/optionsSlice/selector";

export default function UseLocationsData() {
  const { locationQuery } = useSelector(optionSelector);
  return useQuery(["locations"], () => GetLocationsData(locationQuery));
}
