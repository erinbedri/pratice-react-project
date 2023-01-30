import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import * as carsServices from "../../services/carsService";
import "./car-details.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function CarDetails() {
    const { user } = useContext(AuthContext);

    const params = useParams();

    const [car, setCar] = useState({});

    useEffect(() => {
        carsServices.getCarById(params.carId).then((result) => {
            setCar(result);
        });
    }, []);

    return (
        <section id="car-details" className="section-bigger-padding">
            <div className="car-desc">
                <div className="car-desc-left">
                    <h2 className="car-desc-title">{car.title}</h2>
                    <div className="car-desc-info">
                        <p>
                            <b>Category: </b>
                            {car.category}
                        </p>
                        <p>
                            <b>Year of Production: </b>
                            {car.year}
                        </p>
                        <p>
                            <b>Top Speed: </b>
                            {car.maxSpeed}
                        </p>
                        <p>
                            <b>Description: </b>
                            {car.summary}
                        </p>
                    </div>
                    {user.accessToken && user._id === car._ownerId ? (
                        <>
                            <Link to={`/cars/${car._id}/edit`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <Link to={`/cars/${car._id}/delete`}>
                                <button className="btn">Delete</button>
                            </Link>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="car-desc-right">
                <img src={car.imageUrl} alt="carImage" />
            </div>
        </section>
    );
}
