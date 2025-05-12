// src/redux/slices/orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  withCredentials: true, // this enables cookie support
  baseURL: 'http://localhost:5000/api',
});

// Get order details by ID
export const getOrderDetails = createAsyncThunk(
  'order/getOrderDetails',
  async (orderId, { rejectWithValue }) => {
    console.log(orderId)
    try {
      const { data } = await api.get(`/${orderId}`, { withCredentials: true });
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
    order: null,
    loading: false,
    error: null,
  },
  reducers: {
    // resetOrder: (state) => {
    //   state.order = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
