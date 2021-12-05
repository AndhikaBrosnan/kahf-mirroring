import React from "react";
import Navbar from "../navbar/Navbar";
import Cart from "./Cart";

const CartList = () => {
  return (
    <div>
      <Navbar />
      <div
        className="ui container"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h3 style={{ marginBottom: "4%" }}>SHOPPING CART</h3>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
};

export default CartList;
