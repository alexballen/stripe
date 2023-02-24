import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { addToShoppingCartIcon } from "../redux/actions/shoppingCart.js";

const ShoppingCartIcon = () => {
  const dispatch = useDispatch();
  const { cartIcon } = useSelector((state) => state.cartIcon);

  useEffect(() => {
    dispatch(addToShoppingCartIcon());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <Link to="/cart">
        <button type="button" className="btn btn-secondary position-relative">
          <BsCartCheck size={50} />
          <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
            {cartIcon}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;
