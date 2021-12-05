import React from "react";
import Product from "./Product";
import Navbar from "../navbar/Navbar";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div
        className="ui container"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="ui centered grid">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
