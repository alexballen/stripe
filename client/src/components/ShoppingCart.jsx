import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allShoppingCart } from "../redux/actions/shoppingCart.js";
import { getAllProducts } from "../redux/actions/products.js";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cartP } = useSelector((state) => state.cartP);
  console.log(cartP);
  const { prod } = useSelector((state) => state.prod);
  console.log(prod);

  useEffect(() => {
    dispatch(allShoppingCart());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>ShoppingCart</h1>
    </div>
  );
};

export default ShoppingCart;
