import React, { useContext } from "react";

import "./home.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <section id="home" className="section-bigger-padding centered">
            <h1>Home Page</h1>
            {user.accessToken ? (
                <p style={{ marginTop: "1rem" }}>Welcome back, {user.email}</p>
            ) : (
                ""
            )}
        </section>
    );
}
