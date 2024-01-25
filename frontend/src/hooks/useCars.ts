import { useQuery, UseQueryOptions } from 'react-query';
import { Car } from '../types/general';
import { AxiosError } from 'axios';
import { fetchCars } from '../services/cars';

export function useCars<TData = Car[]>(
  options?: UseQueryOptions<Car[], AxiosError, TData>
) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return useQuery('cars', fetchCars, options);
}
