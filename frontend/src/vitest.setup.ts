import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';

const cars = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    package: 'Base',
    color: 'Blue',
    year: 2022,
    category: 'Sedan',
    mileage: 15000,
    price: 25000,
  },
];

export const restHandlers = [
  http.get('http://localhost:3000/api/cars', () => {
    return HttpResponse.json(cars);
  }),
  http.post('http://localhost:3000/api/cars', () => {
    return HttpResponse.json({});
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
