import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCartData } from "../../redux/action/cart";
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
      <div
        className="ui container"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h3 style={{ marginBottom: "4%" }}>SHOPPING CART</h3>
        {carts.length > 0 ? renderCart : <h5>Shopping Cart is empty..</h5>}
        <Link to="/">
          <i class="arrow left icon"></i>Go back to shopping
        </Link>
      </div>
    </div>
  );
};

export default CartList;
