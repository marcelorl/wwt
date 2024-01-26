import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { HttpResponse, graphql, http } from 'msw';

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
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
