import axios from "axios";
import {
  getCartProducts,
  addCartProduct,
  removeCartProduct,
  removeCartReference,
  cleanCart,
  addQuantityCart,
} from "../reducers/shoppingCartSlice.js";

export const allProductsCart = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/cart");
  dispatch(getCartProducts(data));
};

export const postShoppingCart = (id, data) => async () => {
  await axios.post(`http://localhost:3001/cart/${id}`, data);
};

export const addProductShoppingCart = (id, data) => async (dispatch) => {
  await axios
    .patch(`http://localhost:3001/cart/${id}`, data)
    .then((response) => dispatch(addCartProduct(id)))
    .catch((error) => console.log(error));
};

export const decreaseProductShoppingCart = (id, data) => async (dispatch) => {
  await axios
    .patch(`http://localhost:3001/cart/${id}`, data)
    .then((response) => dispatch(removeCartProduct(id)))
    .catch((error) => console.log(error));
};

export const removeProductShoppingCart = (id) => async (dispatch) => {
  await axios
    .delete(`http://localhost:3001/cart/${id}`)
    .then((response) => dispatch(removeCartReference(id)))
    .catch((error) => console.log(error));
};

export const cleanShoppingCart = () => async (dispatch) => {
  await axios.delete("http://localhost:3001/cart/cleancart");
  dispatch(cleanCart());
};

export const addToShoppingCartIcon = (quantity) => (dispatch) => {
  dispatch(addQuantityCart(quantity));
};
