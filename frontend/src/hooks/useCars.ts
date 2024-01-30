import { useQuery } from 'react-query';
import { fetchCars } from '../services/cars';

export function useCars() {
  return useQuery('cars', fetchCars);
}
