import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
}

const sliceName = "theme";

const initialState: ThemeState = {
  theme: "system",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem(sliceName, action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectedTheme = (state: RootState) => state.theme.theme;

const themeReducer = themeSlice.reducer;

export default themeReducer;
