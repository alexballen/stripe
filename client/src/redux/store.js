import { configureStore } from "@reduxjs/toolkit";
import cartP from "./reducers/shoppingCartSlice.js";
import addCartS from "./reducers/shoppingCartSlice.js";
import products from "./reducers/productSlice.js";
import prod from "./reducers/productSlice.js";

export const store = configureStore({
  reducer: {
    cartP,
    addCartS,
    products,
    prod,
  },
});
