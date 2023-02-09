import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    prod: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
      state.prod = action.payload;
    },
    getPro: (state, action) => {
      console.log(state.prod);
    },
  },
});

export const { getProducts, getPro } = productSlice.actions;
export default productSlice.reducer;
