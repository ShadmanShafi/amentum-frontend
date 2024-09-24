import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '..';

const sliceName = 'theme';

const initialState = {
  theme: localStorage.getItem(sliceName) || 'default',
};

export const themeSlice = createSlice({
  name: sliceName,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem(sliceName, state.theme);
    },
  },
  initialState,
});

// action
export const { setTheme } = themeSlice.actions;
// selector
export const selectTheme = (state: RootState) => {
  return state.theme.theme;
};

export default themeSlice.reducer;
