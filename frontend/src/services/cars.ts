import axios from 'axios';
import { Car } from '../types/general';

export const fetchCars = async (): Promise<Car[]> => {
  const { data } = await axios.get('http://0.0.0.0:3000/api/cars');
  return data;
};

export const createCar = (car: Car) => {
  return axios.post('http://0.0.0.0:3000/api/cars', car);
};
