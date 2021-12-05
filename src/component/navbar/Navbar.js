import React from "react";
import "../../style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-top">
        <ul>
          <li>NEW: Kahf Gentle Exfoliating Face Scrub</li>

          <li>
            <Link to="/cart" style={{ color: "white" }}>
              <span>
                <i className="icon shopping cart"></i> (0) | &nbsp;
              </span>
            </Link>
            <span>
              <i className="icon heart"></i> (0) | &nbsp;
            </span>
            <span></span> <i className="icon user"></i> LOGIN
          </li>
        </ul>
      </div>
      <div
        className="navbar-bottom"
        style={{ paddingTop: "2%", paddingBottom: "1%" }}
      >
        <img
          style={{ position: "absolute", width: "6%", paddingTop: "0.5%" }}
          alt=""
          src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png"
        />
        <ul>
          <li style={{ marginRight: "2%" }}>HOME</li>

          <li style={{ marginRight: "2%" }}>
            <Link to="/" style={{ color: "black" }}>
              SHOP
            </Link>
          </li>
          <li style={{ marginRight: "2%" }}>BRAND</li>
          <li style={{ marginRight: "2%" }}>KAHF PROGRAM</li>
          <li>DISCOVERY</li>

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
