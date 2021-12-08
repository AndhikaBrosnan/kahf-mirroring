import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postCartData } from "../../redux/action/cart";

const Product = ({ nama, image }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    postCartData(dispatch, nama, image);
  };

  const carts = useSelector((state) => state.carts);
  const found = carts.some((item) => item.name === nama);

  const checkCart = () => {
    return !found ? (
      <button
        className="ui secondary button "
        style={{ fontSize: "65%" }}
        onClick={onSubmit}
      >
        ADD TO CART
      </button>
    ) : (
      <Link to="/cart" style={{ color: "white" }}>
        <button className="ui secondary button " style={{ fontSize: "65%" }}>
          VIEW CART
        </button>
      </Link>
    );
  };

  return (
    <div className="four wide column">
      <img style={{ width: "100%", paddingBottom: "8%" }} alt="" src={image} />

      <div className="ui two column centered grid">
        <p style={{ fontSize: "10px", fontWeight: "bold" }}>{nama}</p>
        {checkCart()}
      </div>
    </div>
  );
};

export default Product;
