import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "../product/ProductList";
import CartList from "../cart/CartList";
import Home from "../home/Home";
import Discovery from "../discovery/Discovery";
import Program from "../program/Program";
import Brand from "../brand/Brand";
import Login from "../login/Login";
import Signup from "../login/Signup";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/cart" component={CartList}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/discovery" component={Discovery}></Route>
          <Route path="/program" component={Program}></Route>
          <Route path="/brand" component={Brand}></Route>
          <Route path="/signup" component={Signup}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
