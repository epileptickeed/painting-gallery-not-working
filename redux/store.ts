import { Store, configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice/slice';
import optionSlice from './optionsSlice/slice';

export const store: Store = configureStore({
  reducer: {
    filter: filterSlice,
    options: optionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
