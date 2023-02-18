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
    addCart: (state, action) => {
      state.cart = [action.payload];
    },
    decreaseCart: (state, action) => {
      console.log(action.payload);
    },
    delProdCart: (state, action) => {
      const delItemCart = state.cart.filter((e) => e.ref);
      state.cart = delItemCart;
    },
    delCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { getCart, addCart, decreaseCart, delProdCart, delCart } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
