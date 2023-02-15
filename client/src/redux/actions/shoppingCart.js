import axios from "axios";
import { getCart, addCart } from "../reducers/shoppingCartSlice.js";

export const allShoppingCart = () => async (dispatch) => {
  const int = await axios.get("http://localhost:3001/cart");
  dispatch(getCart(int.data));
};

export const addShoppingCart = (data) => async () => {
  await axios.post("http://localhost:3001/cart", data);
};

export const removeItemShoppingCart = (data) => async () => {
  console.log(data);
  await axios.delete("http://localhost:3001/cart/delitem", { data });
};

export const removeProductShoppingCart = (data) => async () => {
  console.log(data);
  await axios.delete("http://localhost:3001/cart/delproduct", { data });
};

export const removeCart = () => async () => {
  await axios.delete("http://localhost:3001/cart/delcart");
};
