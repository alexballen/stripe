import { getProducts, getPro } from "../reducers/productSlice.js";

export const allProducts = (data) => (dispatch) => {
  dispatch(getProducts(data));
};

export const getAllProducts = () => (dispatch) => {
  dispatch(getPro());
};
