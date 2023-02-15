import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    sortCart: [],
    cant: [],
  },
  reducers: {
    getCart: (state, action) => {
      state.cant = action.payload;
      state.sortCart = action.payload;
      let hash = {};
      const cartWithoutCopy = state.sortCart.filter((o) =>
        hash[o.ref] ? false : (hash[o.ref] = true)
      );
      const order = cartWithoutCopy.sort((a, b) => (a.ref > b.ref ? 1 : -1));
      state.cart = order;
    },
  },
});

export const { getCart, addCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
