import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    getCart: (state, action) => {
      state.cart = action.payload;
    },
    sumCart: (state, action) => {
      const existingItem = state.cart.find((i) => i.id === action.payload);
      if (existingItem) {
        existingItem.cantidad++;
      }
    },
    resCart: (state, action) => {
      const existingItem = state.cart.find((e) => e.id === action.payload);
      if (existingItem.cantidad === 1) {
        state.cart = state.cart.filter((i) => i.id !== action.payload);
      } else {
        existingItem.cantidad--;
      }
    },
    decreaseCart: (state, action) => {
      console.log(action.payload);
    },
    delProdCart: (state, action) => {
      console.log(action.payload);
      const delItemCart = state.cart.filter((e) => e.id !== action.payload);
      state.cart = delItemCart;
    },
    delCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { getCart, sumCart, resCart, decreaseCart, delProdCart, delCart } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
