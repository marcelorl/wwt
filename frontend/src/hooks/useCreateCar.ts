import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuid } from 'uuid';

import { Car } from '../types/general';
import { createCar } from '../services/cars';
import { useSnackbar } from 'notistack';

export const useCreateCar = (handleClose: () => void) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation((newCar: Car) => createCar(newCar), {
    onSuccess: (err, newCar, context) => {
      newCar.id = uuid();
      queryClient.setQueryData<Car[]>('cars', (old) => [...old!, newCar]);
      enqueueSnackbar('Car created successfully', { variant: 'success' });
      handleClose();
    },
    onError: () => {
      enqueueSnackbar('Something went wrong. Try again!', { variant: 'error' });
    },
  });
};
