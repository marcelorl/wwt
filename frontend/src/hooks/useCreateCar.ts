import { useMutation, useQueryClient } from 'react-query';
import { Car } from '../types/general';
import { createCar } from '../services/cars';

export const useCreateCar = (handleClose: () => void) => {
  const queryClient = useQueryClient();

  return useMutation((newCar: Car) => createCar(newCar), {
    onMutate: async (newCar) => {
      await queryClient.cancelQueries('cars');
      const previousCars = queryClient.getQueryData<Car[]>('cars');
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
