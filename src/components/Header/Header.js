import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <header className="header section-normal-padding">
            <h1>
                <Link to="/" className="main-nav-logo">
                    PRACTICE APP
                </Link>
            </h1>

            <nav className="main-nav">
                {user.accessToken ? (
                    <>
                        <div>
                            <span style={{ fontWeight: 600 }}>
                                {user.email}
                            </span>
                        </div>
                        <div>
                            <Link to="logout" className="main-nav-link">
                                Add Car
                            </Link>
                        </div>
                        <div>
                            <Link to="logout" className="main-nav-link">
                                Logout
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <Link to="/login" className="main-nav-link">
                                Login
                            </Link>
                        </div>
                        <div>
                            <Link to="/register" className="main-nav-link">
                                Register
                            </Link>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
}
