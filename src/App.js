import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import CarDetails from "./components/CarDetails/CarDetails";
import CarAdd from "./components/CarAdd/CarAdd";
import CarEdit from "./components/CarEdit/CarEdit";
import CarDelete from "./components/CarDelete/CarDelete";
import MyCars from "./components/MyCars/MyCars";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div className="App">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/my-cars" element={<MyCars />} />
                        <Route path="/cars/:carId" element={<CarDetails />} />
                        <Route path="/cars/add" element={<CarAdd />} />
                        <Route path="/cars/:carId/edit" element={<CarEdit />} />
                        <Route
                            path="/cars/:carId/delete"
                            element={<CarDelete />}
                        />

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
