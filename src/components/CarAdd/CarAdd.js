import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as carsService from "../../services/carsService";

export default function Login() {
    const currentYear = new Date().getFullYear();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        maxSpeed: "",
        year: null,
        imageUrl: "",
        summary: "",
    });

    const [error, setError] = useState("");

    const changeHandler = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]:
                e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (
            formData.title == "" ||
            formData.year == "" ||
            formData.category == ""
        ) {
            setError(
                '"Title", "Category" and "Year of Production" are mandatory fields!'
            );
            return;
        }

        if (formData.year < 1900 || formData.year > currentYear) {
            setError(
                `"Year of Production" must be between 1900 and ${currentYear}!`
            );
            return;
        }

        carsService.addCar(formData).then((res) => {
            if (res.code) {
                setError(res.message);
                return;
            }
            navigate("/");
        });
    };

    return (
        <section id="add-car" className="section-bigger-padding centered">
            <form>
                <h1 className="section-title">Add Car</h1>
                {error && <div className="form-item error">{error}</div>}

                <div className="form">
                    <div className="form-item">
                        <label htmlFor="email">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Category:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Top Speed:</label>
                        <input
                            type="text"
                            id="maxSpeed"
                            name="maxSpeed"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Year of Production:</label>
                        <input
                            type="number"
                            min={1900}
                            max={currentYear}
                            id="year"
                            name="year"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Description:</label>
                        <textarea
                            type="textarea"
                            rows={5}
                            id="summary"
                            name="summary"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <button className="form-btn" onClick={submitHandler}>
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}
