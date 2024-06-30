import { Store, configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice/slice";
import optionSlice from "./optionsSlice/slice";
import themeSlice from "./themeSlice/slice";

export const store: Store = configureStore({
  reducer: {
    filter: filterSlice,
    options: optionSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
