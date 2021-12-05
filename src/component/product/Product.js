import React from "react";

const Product = () => {
  return (
    <div className="four wide column">
      <img
        style={{ width: "100%", paddingBottom: "8%" }}
        alt=""
        src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/11.jpg"
      />

      <div className="ui two column centered grid">
        <p style={{ fontSize: "10px", fontWeight: "bold" }}>
          KAHF WFH KIT – REVERED OUD SERIES
        </p>
        <button className="ui secondary button " style={{ fontSize: "65%" }}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
