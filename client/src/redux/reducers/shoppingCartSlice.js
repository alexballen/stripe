import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    addCartS: [],
    cartP: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.addCartS = [...state.addCartS, action.payload];
      state.cartP = [...state.cartP, action.payload];
    },
    getCart: (state, action) => {
      const prodAdd = [...state.cartP];
      console.log(prodAdd);
      //state.cartP = [...prodAdd];
    },
  },
});

export const { getCart, addCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
