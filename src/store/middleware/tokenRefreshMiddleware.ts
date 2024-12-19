import { Middleware } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApis";
import { setTokens, logout } from "../features/auth.slice";

export const tokenRefreshMiddleware: Middleware =
  (store) => (next) => async (action) => {
    if (authApi.endpoints.login.matchFulfilled(action)) {
      const { accessToken, refreshToken } = action.payload;
      store.dispatch(setTokens({ accessToken, refreshToken }));
    }

    if (authApi.endpoints.login.matchRejected(action)) {
      store.dispatch(logout());
    }

    return next(action);
  };
