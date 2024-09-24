import {
  configureStore,
  combineReducers,
  type ThunkAction,
  type Action,
} from '@reduxjs/toolkit';

import themeReducer from '@/store/features/theme.slice';
// import { problemsReducer } from '@/store/features/problems.slice';

import { rtkQueryErrorLogger } from '@/store/middleware/error.middleware';
// import { coreServiceWithAuthApiSlice } from '@/store/middleware/core.middleware';

const rootReducer = combineReducers({
  // [coreApiSlice.reducerPath]: coreServiceWithAuthApiSlice.reducer,

  theme: themeReducer,
  // problems: problemsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['documentServiceApi/executeQuery/fulfilled'],
        ignoredPaths: ['documentServiceApi.executeQuery.fulfilled.payload'],
      },
    }).concat(
      // coreServiceWithAuthApiSlice.middleware,
      rtkQueryErrorLogger
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
