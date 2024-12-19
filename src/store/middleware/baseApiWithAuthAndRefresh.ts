import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { RootState } from "..";

// const { VITE_AMENTUM_BASE_URL, VITE_API_PATH, VITE_API_VERSION } = import.meta
//   .env;

// const _baseUrl = `${VITE_AMENTUM_BASE_URL}/${VITE_API_PATH}/${VITE_API_VERSION}`;
const _baseUrl = "http://localhost:5000/api/v1";

const mutex = new Mutex();

export const baseApiWithAuthAndRefresh = createApi({
  reducerPath: "apiWithAuthAndRefresh",
  baseQuery: async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: _baseUrl,
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken;
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    });

    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      if (!mutex.isLocked()) {
        await mutex.runExclusive(async () => {
          const refreshToken = (api.getState() as RootState).auth.refreshToken;

          const refreshResult = await baseQuery(
            {
              url: "/token/refresh",
              method: "POST",
              body: { refreshToken },
            },
            api,
            extraOptions
          );

          if (refreshResult.data) {
            const { accessToken, refreshToken: newRefreshToken } =
              refreshResult.data as {
                accessToken: string;
                refreshToken: string;
              };

            api.dispatch({
              type: "auth/setTokens",
              payload: { accessToken, refreshToken: newRefreshToken },
            });

            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch({ type: "auth/logout" });
          }
        });
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    }

    return result;
  },
  endpoints: () => ({}),
});

export default baseApiWithAuthAndRefresh;
