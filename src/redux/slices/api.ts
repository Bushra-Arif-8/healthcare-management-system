// src/redux/slices/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Base URL for the API

  endpoints: (builder) => ({
    getTodo: builder.query<any, void>({
      query: () => 'todos/3', // Endpoint to fetch a specific TODO item
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetTodoQuery } = api;
