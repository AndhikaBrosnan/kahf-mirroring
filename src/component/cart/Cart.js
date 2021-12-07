import React from "react";

const Cart = ({ nama, image }) => {
  return (
    <div>
      <div className="ui grid middle aligned">
        <div className="three wide column">
          <img
            style={{ width: "100%", paddingBottom: "1%" }}
            alt=""
            src={image}
          />
        </div>
        <div className="thirteen wide column">
          <b>{nama}</b>
        </div>
      </div>
      <div className="ui divider"></div>
    </div>
  );
};

export default Cart;
