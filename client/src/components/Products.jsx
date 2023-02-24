import React from "react";
import ShoppingCartIcon from "./ShoppingCartIcon.jsx";
import Cards from "./Cards.jsx";

const Products = () => {
  return (
    <div>
      <div>
        <ShoppingCartIcon />
      </div>
      <h1>Productos</h1>
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Products;
