import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FieldFormGroup } from './FieldFormGroup';
import { Car } from '../types/general';
import { useCreateCar } from '../hooks/useCreateCar';

const CarSchema = Yup.object().shape({
  make: Yup.string().required('Required'),
  model: Yup.string().required('Required'),
  color: Yup.string().required('Required'),
  year: Yup.number().max(new Date().getFullYear(), 'Invalid year'),
  category: Yup.string().required('Required'),
  mileage: Yup.number().required('Required'),
  price: Yup.number().required('Required'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type Props = {
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
};

export const CarCreation = ({ isOpen, setIsOpen }: Props) => {
  const mutation = useCreateCar(() => setIsOpen(false));

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add Car</Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              make: '',
              model: '',
              color: '',
              year: 0,
              category: '',
              mileage: 0,
              price: 0,
            }}
            validationSchema={CarSchema}
            onSubmit={(values) => {
              mutation.mutate(values as Car);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Create new Car
                </Typography>
                <Box>
                  <FieldFormGroup field="make" />
                  <FieldFormGroup field="model" />
                  <FieldFormGroup field="package" />
                  <FieldFormGroup field="color" />
                  <FieldFormGroup field="year" type="number" />
                  <FieldFormGroup field="category" />
                  <FieldFormGroup field="mileage" type="number" />
                  <FieldFormGroup field="price" type="number" />
                </Box>

                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};
