import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/action/cart";
import Navbar from "../navbar/Navbar";
import Cart from "./Cart";

const CartList = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  useEffect(() => {
    fetchCartData(dispatch); // eslint-disable-next-line
  }, []);

  const renderCart = carts.map((item, index) => {
    return <Cart key={index} nama={item.name} image={item.image} />;
  });

  return (
    <div>
      <Navbar />
      <div
        className="ui container"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h3 style={{ marginBottom: "4%" }}>SHOPPING CART</h3>
        {carts.length > 0 ? renderCart : <h5>Shopping Cart is empty..</h5>}
      </div>
    </div>
  );
};

export default CartList;
