import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <header className="header section-normal-padding">
      <h1>
        <Link to="/" className="main-nav-logo">
          PRACTICE APP
        </Link>
      </h1>

      <nav className="main-nav">
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
        <div>
          <Link to="logout" className="main-nav-link">
            Logout
          </Link>
        </div>
      </nav>
    </header>
  );
}
