import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_AMENTUM_BASE_URL, VITE_API_PATH, VITE_API_VERSION } = import.meta
  .env;

const _baseUrl = `${VITE_AMENTUM_BASE_URL}/${VITE_API_PATH}/${VITE_API_VERSION}`;

export const baseApiNoAuth = createApi({
  reducerPath: "apiNoAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: _baseUrl,
  }),
  endpoints: () => ({}),
});

export default baseApiNoAuth;
