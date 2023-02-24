import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productSlice.js";
import cart from "./reducers/shoppingCartSlice.js";
import cartIcon from "./reducers/shoppingCartSlice.js";

export const store = configureStore({
  reducer: {
    products,
    cart,
    cartIcon,
  },
  /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), */
});
