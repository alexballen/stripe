import axios from "axios";
import { getProducts } from "../reducers/productSlice.js";

export const getAllProducts = () => async (dispatch) => {
  await axios
    .get("http://localhost:3001/product")
    .then((response) => dispatch(getProducts(response.data)))
    .catch((error) => console.log(error));
};
