import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products: [],
  status: 'idle',
  error: null,
  isSidebarOpen: false,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
      const response = await axios.get('https://course-api.com/react-store-products');
      return response.data;
    } catch (error) {
      throw error;
    }
  });


const productsSlice = createSlice({
    name: 'products',
    initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})

// export actions
export const {toggleSidebar} = productsSlice.actions
export default productsSlice.reducer