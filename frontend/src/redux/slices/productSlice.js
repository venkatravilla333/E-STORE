import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export let getAllProducts = createAsyncThunk('getProducts', async() => {
  let res = await axios.get('/api/getAllProducts')
  console.log(res.data)
  return res.data
})


let initialState = {
  loading: false,
  products: [],
  error: null
}



let getAllProductsSlice = createSlice({
  name: 'getProducts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  }
})

export default getAllProductsSlice.reducer