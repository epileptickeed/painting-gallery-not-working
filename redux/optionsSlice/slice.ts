import { createSlice } from '@reduxjs/toolkit';

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
  selectedLocation: LocationsProps[];
  yearFirstValue: number;
  yearSecondValue: number;
}
const initialState: OptionsSliceProps = {
  selectedAuthor: [],
  selectedLocation: [],
  yearFirstValue: 0,
  yearSecondValue: 0,
};

export const optionsSlice = createSlice({
  name: 'options',
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
  },
});

export const { setSelectedAuthor, setSelectedLocation, setYearFirstValue, setYearSecondValue } =
  optionsSlice.actions;

export default optionsSlice.reducer;
