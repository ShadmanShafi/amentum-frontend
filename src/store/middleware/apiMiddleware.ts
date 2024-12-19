import { Middleware } from "@reduxjs/toolkit";
import { vpsApi } from "../apis/vpsApis";
import { authApi } from "../apis/authApis";
import { logout } from "../features/auth.slice";

export const apiMiddleware: Middleware = (store) => (next) => (action) => {
  if (vpsApi.endpoints.getVmsList.matchRejected(action)) {
    console.error("VPS API Error:", action.error);
  }

  if (authApi.endpoints.login.matchRejected(action)) {
    console.warn("Token refresh failed. Logging out...");
    store.dispatch(logout());
  }

  return next(action);
};
