// slices/orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  withCredentials: true, // this enables cookie support
  baseURL: 'http://localhost:5000/api',
});


export const createOrder = createAsyncThunk(
  'order/create',
  async (orderData, { rejectWithValue }) => {
    console.log(orderData)
    try {
      const { data } = await api.post('/createOrder', orderData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: {},
    success: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.success = true;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
