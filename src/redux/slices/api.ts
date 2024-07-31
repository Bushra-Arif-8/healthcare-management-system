// src/redux/slices/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust the base URL as needed

  endpoints: (builder) => ({

    getExample: builder.query<any, void>({
        
      query: () => 'example-endpoint', // Replace with your API endpoint
    }),
  }),
});

export const { useGetExampleQuery } = api;
