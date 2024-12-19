import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../utils/storageUtils";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  accessToken: getLocalStorage("accessToken"),
  refreshToken: getLocalStorage("refreshToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      setLocalStorage("accessToken", action.payload.accessToken);
      setLocalStorage("refreshToken", action.payload.refreshToken);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      removeLocalStorage("accessToken");
      removeLocalStorage("refreshToken");
    },
  },
});

export const { setTokens, logout } = authSlice.actions;
export default authSlice.reducer;
