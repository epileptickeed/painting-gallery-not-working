import { createSlice } from "@reduxjs/toolkit";

interface ThemeSliceProps {
  isThemeLight: boolean;
}
const initialState: ThemeSliceProps = {
  isThemeLight: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isThemeLight = !state.isThemeLight;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
