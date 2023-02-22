import axios from "axios";
import {
  getCart,
  sumCart,
  resCart,
  delProdCart,
  delCart,
} from "../reducers/shoppingCartSlice.js";

export const allShoppingCart = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/cart");
  dispatch(getCart(data));
};

export const postShoppingCart = (id, data) => async () => {
  await axios.post(`http://localhost:3001/cart/${id}`, data);
};

export const editShoppingCart = (id, quantity) => async (dispatch) => {
  await axios
    .patch(`http://localhost:3001/cart/${id}`, quantity)
    .then((response) => dispatch(sumCart(id)))
    .catch((error) => console.log(error));
};

export const decreaseShoppingCart = (id, quantity) => async (dispatch) => {
  await axios
    .patch(`http://localhost:3001/cart/${id}`, quantity)
    .then((response) => dispatch(resCart(id)))
    .catch((error) => console.log(error));
};

export const removeProductShoppingCart = (id) => async (dispatch) => {
  await axios
    .delete(`http://localhost:3001/cart/${id}`)
    .then((response) => dispatch(delProdCart(id)))
    .catch((error) => console.log(error));
};

export const cleanShoppingCart = () => async (dispatch) => {
  await axios.delete("http://localhost:3001/cart/cleancart");
  dispatch(delCart());
};
