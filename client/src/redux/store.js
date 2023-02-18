import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productSlice.js";
import cart from "./reducers/shoppingCartSlice.js";
import cant from "./reducers/shoppingCartSlice.js";
import cantCartIcon from "./reducers/shoppingCartSlice.js";
import status from "./reducers/shoppingCartSlice.js";
import error from "./reducers/shoppingCartSlice.js";
import quantity from "./reducers/shoppingCartSlice.js";

export const store = configureStore({
  reducer: {
    products,
    cart,
    cant,
    cantCartIcon,
    status,
    error,
    quantity,
  },
});
