// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../features/apiSlice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
