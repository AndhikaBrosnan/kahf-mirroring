import React, { useEffect } from "react";
import "../../style/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/action/cart";

const Navbar = () => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCartData(dispatch); // eslint-disable-next-line
  }, []);

  const login = useSelector((state) => state.login);

  return (
    <div>
      <div className="navbar-top">
        <ul>
          <li>NEW: Kahf Gentle Exfoliating Face Scrub</li>

          <li>
            <Link to="/cart" style={{ color: "white" }}>
              <span>
                <i className="icon shopping cart"></i> ({carts.length}) | &nbsp;
              </span>
            </Link>
            <span>
              <i className="icon heart"></i> (0) | &nbsp;
            </span>
            <Link to="/login" style={{ color: "white" }}>
              <span>
                {" "}
                <i className="icon user"></i>{" "}
                {Object.keys(login).length !== 0 ? login.email : "LOGIN"}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-bottom">
        <img
          className="img-nav-bot"
          alt=""
          src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png"
        />
        <ul>
          <li className="li-menu">
            <Link to="/home" style={{ color: "black" }}>
              HOME
            </Link>
          </li>

          <li className="li-menu">
            <Link to="/" style={{ color: "black" }}>
              SHOP
            </Link>
          </li>
          <li className="li-menu">
            <Link to="/brand" style={{ color: "black" }}>
              BRAND
            </Link>
          </li>
          <li className="li-menu">
            <Link to="/program" style={{ color: "black" }}>
              KAFH PROGRAM
            </Link>
          </li>
          <li>
            <Link to="/discovery" style={{ color: "black" }}>
              DISCOVERY
            </Link>
          </li>

          <li>
            <div className="ui icon input">
              <input type="text" placeholder="Type to Search" />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </li>
        </ul>
        <div className="ui two column centered grid">
          <div className="column">
            <div className="ui divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
