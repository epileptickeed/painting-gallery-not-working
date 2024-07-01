import { createSlice } from "@reduxjs/toolkit";

interface FilterSlice {
  searchValue: string;
  pageNumber: number;
}
const initialState: FilterSlice = {
  searchValue: "",
  pageNumber: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setSearchValue, setPageNumber } = filterSlice.actions;

export default filterSlice.reducer;
