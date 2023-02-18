import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addShoppingCartIcon,
  allShoppingCart,
} from "../redux/actions/shoppingCart.js";

const ShoppingCartIcon = () => {
  const dispatch = useDispatch();
  const { cantCartIcon } = useSelector((state) => state.cantCartIcon);

  useEffect(() => {
    dispatch(addShoppingCartIcon());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <Link to="/cart">
        <button type="button" className="btn btn-primary position-relative">
          Carrito
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cantCartIcon}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;
