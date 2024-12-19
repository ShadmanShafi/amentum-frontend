import { combineReducers, configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/theme.slice";
import authReducer from "./features/auth.slice";
import { vpsReducer } from "./features/vps.slice";
import { serverActionReducer } from "./features/serverActions.slice";
import { snapshotReducer } from "./features/snapshot.slice";

import baseApiNoAuth from "./middleware/baseApiNoAuth";
import baseApiWithAuthAndRefresh from "./middleware/baseApiWithAuthAndRefresh";

import { tokenRefreshMiddleware } from "./middleware/tokenRefreshMiddleware";
import { apiMiddleware } from "./middleware/apiMiddleware";

import { vpsApi } from "./apis/vpsApis";
import { serverActionApi } from "./apis/serverActionApis";
import { snapshotApi } from "./apis/snapshotApis";

const rootReducer = combineReducers({
  [baseApiNoAuth.reducerPath]: baseApiNoAuth.reducer,
  [baseApiWithAuthAndRefresh.reducerPath]: baseApiWithAuthAndRefresh.reducer,

  theme: themeReducer,
  auth: authReducer,
  vps: vpsReducer,
  serverAction: serverActionReducer,
  snapshot: snapshotReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApiNoAuth.middleware)
      .concat(baseApiWithAuthAndRefresh.middleware)
      .concat(apiMiddleware)
      .concat(tokenRefreshMiddleware)
      .concat(vpsApi.middleware)
      .concat(serverActionApi.middleware)
      .concat(snapshotApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
