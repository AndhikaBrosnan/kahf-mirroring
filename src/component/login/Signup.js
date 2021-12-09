import React, { useState } from "react";
import "../../style/Login.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const login = useSelector((state) => state.login);

  const onSignup = () => {
    // validasi
    if (!name && !email && !password) {
      setError("Harap mengisi kolom diatas.");
    } else if (!name) {
      setError("Kolom nama belum terisi.");
    } else if (!email) {
      setError("Kolom email belum terisi.");
    } else if (!password) {
      setError("Kolom password belum terisi.");
    } else if (password.length < 8) {
      setError("Password harus lebih dari 8 karakter.");
    } else {
      localStorage.setItem(email + name, name);
      localStorage.setItem(email, email);
      localStorage.setItem(email + password, password);

      setName("");
      setEmail("");
      setPassword("");

      history.push("/login");
    }
  };

  return (
    <div>
      <div className="ui container">
        {Object.keys(login).length === 0 ? (
          <div>
            <img
              style={{ height: "9%" }}
              id="perfume"
              alt=""
              src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_register.jpg"
            />
            <div className="ui cards" id="example" style={{ height: "500px" }}>
              <div className="card" style={{ width: "100%", height: "100%" }}>
                <div className="content" style={{ margin: "8%" }}>
                  <h1>WELCOME TO KAHF AND LET'S JOIN</h1>
                  {/* Name Email password */}
                  <div style={{ marginBottom: "3%" }}>
                    <b>Name</b>
                    <div className="description">
                      <div className="ui input" style={{ width: "100%" }}>
                        <input
                          type="text"
                          onChange={(event) => setName(event.target.value)}
                          value={name}
                          placeholder="Type your name here"
                        />
                      </div>
                    </div>
                  </div>
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

                  <span className="ui error red header">{error}</span>
                  <button
                    style={{ width: "100%", marginBottom: "3%" }}
                    className="ui secondary button"
                    onClick={onSignup}
                  >
                    REGISTER
                  </button>
                </div>
                <div
                  className="sign-up"
                  style={{
                    width: "100%",
                    background: "#ebebeb",
                    height: "5%",
                  }}
                >
                  Already have an account?{" "}
                  <Link className="signup-button" to="/login">
                    &nbsp;<u>Login Here</u>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3>Anda sudah login</h3>
        )}
      </div>
    </div>
  );
};

export default Signup;
