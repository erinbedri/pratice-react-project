import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/cars";

export const getAllCars = () => request.get(baseUrl);

export const getCarById = (carId) => request.get(`${baseUrl}/${carId}`);

export const addCar = (carData) => request.post(baseUrl, carData);

export const deleteCar = (carId) => request.del(`${baseUrl}/${carId}`);

export const editCar = (carId, carData) =>
    request.put(`${baseUrl}/${carId}`, carData);

export const getMyCars = (ownerId) =>
    request.get(`${baseUrl}/?where=_ownerId%3D%22${ownerId}%22`);
