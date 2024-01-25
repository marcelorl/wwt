import { useQuery } from 'react-query';
import { fetchCars } from '../services/cars';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { CarCreation } from './CarCreation';
import { useCars } from '../hooks/useCars';

export function App() {
  const { data, isLoading } = useCars({ notifyOnChangeProps: ['data'] });

  if (isLoading) return <div>Loading...</div>;

  return (
    <TableContainer>
      <Box width="100%" justifyContent="flex-end" display="flex">
        <CarCreation />
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Package</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Mileage</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.id}</TableCell>
              <TableCell>{car.make}</TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.package}</TableCell>
              <TableCell>{car.color}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell>{car.category}</TableCell>
              <TableCell>{car.mileage}</TableCell>
              <TableCell>{car.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
