import { createSlice } from "@reduxjs/toolkit";

export type AuthorsProps = {
  name: string;
  id: number;
};

export type LocationsProps = {
  id: number;
  location: string;
};

interface OptionsSliceProps {
  selectedAuthor: AuthorsProps[];
  authorQuery: string;
  selectedLocation: LocationsProps[];
  locationQuery: string;
  yearFirstValue: number | string;
  yearSecondValue: number | string;
}
const initialState: OptionsSliceProps = {
  selectedAuthor: [],
  authorQuery: "",
  selectedLocation: [],
  locationQuery: "",
  yearFirstValue: "",
  yearSecondValue: "",
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setSelectedAuthor: (state, action) => {
      state.selectedAuthor = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    setYearFirstValue: (state, action) => {
      state.yearFirstValue = action.payload;
    },
    setYearSecondValue: (state, action) => {
      state.yearSecondValue = action.payload;
    },
    setAuthorQuery: (state, action) => {
      state.authorQuery = action.payload;
    },
    setLocationQuery: (state, action) => {
      state.locationQuery = action.payload;
    },
  },
});

export const {
  setSelectedAuthor,
  setSelectedLocation,
  setYearFirstValue,
  setYearSecondValue,
  setAuthorQuery,
  setLocationQuery,
} = optionsSlice.actions;

export default optionsSlice.reducer;
