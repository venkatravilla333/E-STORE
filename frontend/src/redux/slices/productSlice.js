import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export let getAllProducts = createAsyncThunk('products/getAllProducts', async (_, thunkAPI) => {
  
  try {
    let res = await axios.get('/api/getAllProducts')
    console.log(res.data)
     return res.data
    
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
  
})

export let getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id, thunkAPI) => {
  
  try {

    let res = await axios.get(`/api/getSingleProduct/${id}`)
    console.log(res.data)
    return res.data

  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
})


let initialState = {
  loading: false,
  products: [],
  product: {},
  error: null,
}



let productsSlice = createSlice({
  name: 'products',
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
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.loading = false
      state.product = action.payload
    })
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default productsSlice.reducer