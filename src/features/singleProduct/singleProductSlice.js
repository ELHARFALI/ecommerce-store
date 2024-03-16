import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    single_product: [],
}


export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (id) => {
    try {
        const response = await axios.get(`https://course-api.com/react-store-single-product?id=${id}`)
        return response.data
    } catch (error) {
        console.log(error);        
    }
})

const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
              state.isLoading = true
          })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
              state.isLoading = false
            state.single_product = action.payload;
          })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
              state.isLoading = false
          });
      },
})

export default singleProductSlice.reducer