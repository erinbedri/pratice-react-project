import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import * as carsService from "../../services/carsService";

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAllCars().then((result) => {
            setCars(result);
        });
    }, []);

    return (
        <section id="home" className="section-bigger-padding centered">
            <h1>Cars</h1>

            <div>
                <ul className="cars-list">
                    {cars.map((car) => (
                        <li key={car._id} className="car-item">
                            <h2 className="car-item-title">{car.title}</h2>
                            <p>
                                <b>Category: </b>
                                {car.category}
                            </p>
                            <p>
                                <b>Year of Production: </b>
                                {car.year}
                            </p>
                            <Link to={`/cars/${car._id}`}>
                                <button className="car-details-btn">
                                    Details
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
