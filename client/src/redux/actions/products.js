import axios from "axios";
import { getProducts } from "../reducers/productSlice.js";

export const getAllProducts = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/product");
  dispatch(getProducts(data));
};
