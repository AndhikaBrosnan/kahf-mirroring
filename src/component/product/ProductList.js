import React, { useEffect } from "react";
import Product from "./Product";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/action/products";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    fetchProductsData(dispatch); // eslint-disable-next-line
  }, []);

  const renderProducts = products.map((item, index) => {
    return <Product key={index} nama={item.name} image={item.image} />;
  });

  return (
    <div>
      <Navbar />
      <div
        className="ui container"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        {/* <div className="ui success message">
          <div className="header">Item sudah di tambah ke Cart</div>
        </div> */}
        <div className="ui centered grid">{renderProducts}</div>
      </div>
    </div>
  );
};

export default ProductList;
