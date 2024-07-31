// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { api } from './slices/api'; // Import RTK Query API slice

export const store = configureStore({
  reducer: {
    // Add the RTK Query reducer to the store
    [api.reducerPath]: api.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
