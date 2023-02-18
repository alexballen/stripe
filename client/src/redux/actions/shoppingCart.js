import axios from "axios";
import {
  getCart,
  addCart,
  decreaseCart,
  delProdCart,
  delCart,
  addQuantityCart,
  /* fetchProducts, */
  /* cantCart, */
} from "../reducers/shoppingCartSlice.js";

export const allShoppingCart = () => async (dispatch) => {
  const allCart = await axios.get("http://localhost:3001/cart");
  console.log(allCart);
  dispatch(getCart(allCart.data));
  //return allCart.data;
};

export const addShoppingCart = (data) => async (dispatch) => {
  await axios
    .post(`http://localhost:3001/cart`, data)
    .then((response) => dispatch(addCart(response.data)))
    .catch((error) => console.log(error.message));
};

export const editShoppingCart = (id, quantity) => async (dispatch) => {
  await axios.patch(`http://localhost:3001/cart/${id}`, quantity);
  /* .then((response) => dispatch(addQuantityCart(response)))
    .catch((error) => console.log(error.message)); */
};

export const decreaseShoppingCart = (data) => async (dispatch) => {
  const resp = await axios
    .delete("http://localhost:3001/cart/delitem", {
      data,
    })
    .then((response) => dispatch(decreaseCart(response.data)))
    .catch((error) => console.log(error));
  console.log(resp);
};

export const removeProductShoppingCart = (data) => async (dispatch) => {
  await axios.delete("http://localhost:3001/cart/delproduct", { data });
  dispatch(delProdCart(data.ref));
};

export const cleanShoppingCart = () => async (dispatch) => {
  await axios.delete("http://localhost:3001/cart/delcart");
  dispatch(delCart());
};

/* export const addShoppingCartIcon = (data) => async (dispatch) => {
  dispatch(cantCart(data));
}; */
