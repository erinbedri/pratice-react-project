import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as carsService from "../../services/carsService";

export default function CarEdit() {
    const params = useParams();
    const navigate = useNavigate();

    const currentYear = new Date().getFullYear();

    const [error, setError] = useState("");

    const [currentCar, setCurrentCar] = useState({});

    useEffect(() => {
        carsService.getCarById(params.carId).then((result) => {
            setCurrentCar(result);
        });
    }, []);

    const changeHandler = (e) => {
        setCurrentCar((oldData) => ({
            ...oldData,
            [e.target.name]:
                e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (currentCar.year < 1900 || currentCar.year > currentYear) {
            setError(
                `"Year of Production" must be between 1900 and ${currentYear}!`
            );
            return;
        }

        carsService.editCar(params.carId, currentCar).then((res) => {
            if (res.code) {
                setError(res.message);
                return;
            }
            navigate(`/cars/${params.carId}`);
        });
    };

    return (
        <section id="edit-car" className="section-bigger-padding centered">
            <form>
                <h1 className="section-title">Edit Car</h1>
                {error && <div className="form-item error">{error}</div>}

                <div className="form">
                    <div className="form-item">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={currentCar.title}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            defaultValue={currentCar.category}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="maxSpeed">Top Speed:</label>
                        <input
                            type="text"
                            id="maxSpeed"
                            name="maxSpeed"
                            defaultValue={currentCar.maxSpeed}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="year">Year of Production:</label>
                        <input
                            type="number"
                            min={1900}
                            max={currentYear}
                            id="year"
                            name="year"
                            defaultValue={currentCar.year}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            defaultValue={currentCar.imageUrl}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="summary">Description:</label>
                        <textarea
                            type="textarea"
                            rows={5}
                            id="summary"
                            name="summary"
                            defaultValue={currentCar.summary}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <button className="form-btn" onClick={submitHandler}>
                            Edit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}
