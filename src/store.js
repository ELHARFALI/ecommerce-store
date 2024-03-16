import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./features/products/productsSlice";
import singleProductSlice from "./features/singleProduct/singleProductSlice";


export const store = configureStore({
    reducer: {
        products: productsSlice,
        singleProduct: singleProductSlice
    }
})