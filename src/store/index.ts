import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme.slice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
