import {
  fetchBaseQuery,
  createApi,
  type FetchArgs,
  type BaseQueryApi,
} from '@reduxjs/toolkit/query/react';

// import UserService from '../apis/auth';
// import { USER_TYPE } from '@/constant/userType';

const { VITE_API_PATH, VITE_API_VERSION, VITE_CORE_BASE_URL } = import.meta.env;

const _baseUrl = `${VITE_CORE_BASE_URL}/${VITE_API_PATH}/${VITE_API_VERSION}`;

const _baseQuery = fetchBaseQuery({
  baseUrl: _baseUrl,
});

const _baseQueryWithAuth = fetchBaseQuery({
  baseUrl: _baseUrl,
  credentials: 'include',
  prepareHeaders: (headers) => {
    // const token = UserService.getToken() || PUBLIC_USER;

    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }
    return headers;
  },
});

const baseQueryNoAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  const result = await _baseQuery(args, api, extraOptions);
  return result;
};

const baseQueryWithAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  const result = await _baseQueryWithAuth(args, api, extraOptions);
  return result;
};

export const coreApiSlice = createApi({
  reducerPath: 'bhoganti-core-api',
  baseQuery: baseQueryNoAuth,
  endpoints: () => ({}),
});

export const coreServiceWithAuthApiSlice = createApi({
  reducerPath: 'bhoganti-core-api-with-auth',
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
});
