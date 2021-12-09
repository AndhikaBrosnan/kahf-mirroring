import React, { useState } from "react";
import "../../style/Login.css";
import { Link } from "react-router-dom";
import { postLoginData } from "../../redux/action/login";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const onLogin = () => {
    postLoginData(dispatch, email, password);
    if (!email) {
      setError("Email Kosong");
    } else if (Object.keys(login).length === 0) {
      setError("Email atau password tidak sesuai");
    }
  };

  return (
    <div>
      <div className="ui container">
        {Object.keys(login).length === 0 ? (
          <div>
            <img
              className="back-img"
              id="perfume"
              alt=""
              src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_login.jpg"
            />
            <div className="ui cards" id="example" style={{ height: "500px" }}>
              <div className="card" style={{ width: "100%", height: "100%" }}>
                <div className="content" style={{ margin: "8%" }}>
                  <h1>WELCOME BACK AND SIGN IN YOUR ACCOUNT</h1>
                  {/* Email password */}
                  <div style={{ marginBottom: "3%" }}>
                    <b>Email</b>
                    <div className="description">
                      <div className="ui input" style={{ width: "100%" }}>
                        <input
                          type="text"
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "3%" }}>
                    <b>Password</b>
                    <div className="description">
                      <div className="ui input" style={{ width: "100%" }}>
                        <input
                          type="password"
                          onChange={(event) => setPassword(event.target.value)}
                          value={password}
                          placeholder="Your Password"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Remember Me */}
                  <div className="ui checkbox" style={{ marginBottom: "3%" }}>
                    <input
                      type="checkbox"
                      name="example"
                      style={{ width: "100%" }}
                    />
                    <label>Remember Me</label>
                  </div>
                  {/* Login  */}
                  <br></br>

                  <span className="ui error red header">{error}</span>
                  <button
                    style={{ width: "100%", marginBottom: "3%" }}
                    className="ui secondary button"
                    onClick={onLogin}
                  >
                    LOG IN
                  </button>
                  <div>
                    Forgot your password? <Link to="/">Click here</Link>
                  </div>
                </div>
                <div
                  className="sign-up"
                  style={{
                    width: "100%",
                    background: "#ebebeb",
                    height: "5%",
                  }}
                >
                  Don't have an account?{" "}
                  <Link className="signup-button" to="/signup">
                    &nbsp;<u>Sign Up Here</u>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3>Kamu berhasil login</h3>
            <Link to="/">
              <i class="arrow left icon"></i>Go back to shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
