import React from "react";
import Navbar from "../navbar/Navbar";
import "../../style/Login.css";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="ui container">
        <img
          style={{ height: "9%" }}
          id="perfume"
          alt=""
          src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_login.jpg"
        />
        <div className="ui cards" id="example">
          <div className="card" style={{ width: "100%", height: "100%" }}>
            <div className="content" style={{ margin: "10%" }}>
              <h1>WELCOME BACK AND SIGN IN YOUR ACCOUNT</h1>

              {/* Email password */}
              <div style={{ marginBottom: "3%" }}>
                <b>Email</b>
                <div className="description">
                  <div class="ui input" style={{ width: "100%" }}>
                    <input type="text" placeholder="Your Email Address" />
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "3%" }}>
                <b>Password</b>
                <div className="description">
                  <div class="ui input" style={{ width: "100%" }}>
                    <input type="password" placeholder="Your Password" />
                  </div>
                </div>
              </div>
              {/* Remember Me */}
              <div class="ui checkbox" style={{ marginBottom: "3%" }}>
                <input
                  type="checkbox"
                  name="example"
                  style={{ width: "100%" }}
                />
                <label>Make my profile visible</label>
              </div>

              {/* Login  */}
              <button
                style={{ width: "100%", marginBottom: "3%" }}
                class="ui secondary button"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
