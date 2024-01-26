import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuid } from 'uuid';

import { Car } from '../types/general';
import { createCar } from '../services/cars';

export const useCreateCar = (handleClose: () => void) => {
  const queryClient = useQueryClient();

  return useMutation((newCar: Car) => createCar(newCar), {
    onMutate: async (newCar) => {
      await queryClient.cancelQueries('cars');
      const previousCars = queryClient.getQueryData<Car[]>('cars');

      newCar.id = uuid();
      if (previousCars) {
        queryClient.setQueryData<Car[]>('cars', (old) => [
          ...(old as never),
          newCar,
        ]);
      }

      return { previousCars };
    },
    onError: (err, newCar, context) => {
      if (context?.previousCars) {
        queryClient.setQueryData<Car[]>('cars', context.previousCars);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('cars');
      handleClose();
    },
  });
};
