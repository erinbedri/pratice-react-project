import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";
import * as authService from "../../services/authService";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        fname: "",
        lname: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const changeHandler = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]:
                e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (!formData.email.includes("@")) {
            setError("Invalid email address!");
            return;
        }

        if (formData.password != formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        authService
            .register(
                formData.email,
                formData.password,
                formData.fname,
                formData.lname
            )
            .then((registerData) => {
                if (registerData.code !== 200) {
                    setError(registerData.message);
                    return;
                }
                navigate("/login");
            });
    };

    return (
        <section id="login" className="section-bigger-padding centered">
            <form>
                <h1 className="section-title">Register</h1>
                {error && <div className="form-item error">{error}</div>}
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
                        <label htmlFor="fname">First Name:</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="lname">Last Name:</label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
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
                        <label htmlFor="confirmPassword">
                            Confirm Password:
                        </label>
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
                            If you already have profile click{" "}
                            <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
