import axios from 'axios';
import { Car } from '../types/general';

export const fetchCars = async (): Promise<Car[]> => {
  const { data } = await axios.get('http://localhost:3000/api/cars');
  return data;
};

export const createCar = (car: Car) => {
  return axios.post('http://localhost:3000/api/cars', car);
};
