// src/features/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk using fetch
export const fetchMessage = createAsyncThunk('api/fetchMessage', async () => {
  const response = await fetch('http://localhost:3001/');
  const data = await response.text();
  return data;
});

// Create a slice
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    message: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
