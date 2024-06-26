import { createSlice } from '@reduxjs/toolkit';

interface FilterSlice {
  searchValue: string;
}
const initialState: FilterSlice = {
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
