import React from "react";
import { useDispatch } from "react-redux";
import { postCartData } from "../../redux/action/cart";

const Product = ({ nama, image }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    postCartData(dispatch, nama, image);
  };

  return (
    <div className="four wide column">
      <img style={{ width: "100%", paddingBottom: "8%" }} alt="" src={image} />

      <div className="ui two column centered grid">
        <p style={{ fontSize: "10px", fontWeight: "bold" }}>{nama}</p>
        <button
          className="ui secondary button "
          style={{ fontSize: "65%" }}
          onClick={onSubmit}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
