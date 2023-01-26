import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    console.log(formData);
  };

  return (
    <section id="login" className="section-bigger-padding centered">
      <form>
        <h1 className="section-title">Register</h1>
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
            />
          </div>
          <div className="form-item">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={changeHandler}
            />
          </div>
          <div className="form-item">
            <button className="form-btn" onClick={submitHandler}>
              Register
            </button>
          </div>
          <p>
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
