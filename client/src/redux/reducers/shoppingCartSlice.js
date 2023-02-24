import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartIcon: 0,
  },
  reducers: {
    getCartProducts: (state, action) => {
      state.cart = action.payload;
    },

    addCartProduct: (state, action) => {
      const id = action.payload;
      const existsProduct = state.cart.find((product) => product.id === id);
      if (existsProduct) {
        existsProduct.cantidad++;
      }
    },

    removeCartProduct: (state, action) => {
      const id = action.payload;
      const existsProduct = state.cart.find((product) => product.id === id);
      if (existsProduct.cantidad === 1) {
        state.cart = state.cart.filter((product) => product.id !== id);
      } else {
        existsProduct.cantidad--;
      }
    },

    removeCartReference: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((product) => product.id !== id);
    },

    cleanCart: (state, action) => {
      state.cart = [];
    },

    addQuantityCart: (state, action) => {
      state.cartIcon = action.payload;
    },
  },
});

export const {
  getCartProducts,
  addCartProduct,
  removeCartProduct,
  removeCartReference,
  cleanCart,
  addQuantityCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
