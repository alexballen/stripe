import axios from "axios";
import { getCart, addCart } from "../reducers/shoppingCartSlice.js";

export const allShoppingCart = () => (dispatch) => {
  dispatch(getCart());
};

export const addShoppingCart = (data) => async (dispatch) => {
  const { id } = data;
  console.log(id);
  await axios.post("http://localhost:3001/post", id);
  /*  await axios({
    method: "POST",
    url: "/post",
    data: data,
  }).catch((error) => {
    console.log(error);
  }); */
};
