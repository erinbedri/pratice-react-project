import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./delete-car.css";
import * as carsService from "../../services/carsService";

export default function CarDelete() {
    const params = useParams();

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const deleteHandle = (carId) => {
        carsService.deleteCar(carId).then((res) => {
            if (res._deletedOn) {
                navigate("/");
            } else {
                setError(res.message);
            }
        });
    };

    return (
        <section id="delete-car" className="section-bigger-padding centered">
            <h2>Are you sure you want to delete this car?</h2>
            {error && <div className="form-item error">{error}</div>}

            <div>
                <button
                    onClick={() => deleteHandle(params.carId)}
                    className="btn"
                >
                    Yes
                </button>
                <Link to={`/cars/${params.carId}`}>
                    <button className="btn">No</button>
                </Link>
            </div>
        </section>
    );
}
