import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./login.css";
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData((oldData) => ({
      ...oldData,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    authService
      .login(formData.email, formData.password)
      .then((authData) => {
        userLogin(authData);
        navigate("/");
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <section id="login" className="section-bigger-padding centered">
      <form>
        <h1 className="section-title">Login</h1>
        <div className="form">
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
            />
          </div>
          <div className="form-item">
            <label htmlFor="login-pass">Password:</label>
            <input
              type="password"
              id="login-password"
              name="password"
              onChange={changeHandler}
            />
          </div>
          <div className="form-item">
            <button className="form-btn" onClick={submitHandler}>
              Login
            </button>
          </div>
          <p>
            <span>
              If you don't have profile click <Link to="/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
