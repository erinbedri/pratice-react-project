import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as carsServices from "../../services/carsService";
import "./car-details.css";

export default function CarDetails() {
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
                </div>
            </div>
            <div className="car-desc-right">
                <img src={car.imageUrl} alt="carImage" />
            </div>
        </section>
    );
}
