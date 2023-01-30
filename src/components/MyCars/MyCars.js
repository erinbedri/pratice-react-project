import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./my-cars.css";
import * as carsService from "../../services/carsService";
import { AuthContext } from "../../contexts/AuthContext";

export default function MyCars() {
    const [myCurrentCars, setMyCurrentCars] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(user._id);

    useEffect(() => {
        carsService.getMyCars(user._id).then((res) => {
            setMyCurrentCars(res);
        });
    }, []);

    return (
        <section id="my-cars" className="section-bigger-padding centered">
            <h1>My Garage</h1>

            <ul className="my-cars-list">
                <li className="my-cars-list-header">
                    <span>#</span>
                    <span>Car Name and Model</span>
                    <span>Category</span>
                    <span>Top Speed</span>
                    <span>Year</span>
                </li>
                {myCurrentCars.map((car, index) => (
                    <Link to={`/cars/${car._id}`}>
                        <li key={car._id} className="my-cars-item">
                            <span>{index + 1}</span>
                            <span>{car.title}</span>
                            <span>{car.category}</span>
                            <span>{car.maxSpeed}</span>
                            <span>{car.year}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
}
