import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "../product/ProductList";
import CartList from "../cart/CartList";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/cart" component={CartList}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
