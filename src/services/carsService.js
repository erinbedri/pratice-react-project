import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/cars";

export const getAllCars = () => request.get(baseUrl);

export const getCarById = (carId) => request.get(`${baseUrl}/${carId}`);

export const addCar = (carData) => request.post(baseUrl, carData);

export const deleteCar = (carId) => request.del(`${baseUrl}/${carId}`);
