import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CarCreation } from '../CarCreation';

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <CarCreation isOpen setIsOpen={() => vi.fn()} />
    </QueryClientProvider>
  );

describe('#CarCreation', () => {
  test('renders Add Car button and modal', () => {
    const { baseElement, debug } = renderComponent();
    debug();
    expect(baseElement).toMatchSnapshot();
  });

  test('validates form submission', async () => {
    const { getByLabelText, getByText, baseElement } = renderComponent();

    await waitFor(() => userEvent.type(getByLabelText(/year/i), '2030'));
    await waitFor(() => userEvent.click(getByText(/submit/i)));

    expect(baseElement).toMatchSnapshot();
  });
});

//
// test('closes modal on button click', async () => {
//   renderComponent();
//   userEvent.click(screen.getByText(/Add Car/i));
//
//   await waitFor(() => {
//     userEvent.click(screen.getByText(/Submit/i));
//   });
//
//   expect(screen.getByText(/Create new Car/i)).not.toBeInTheDocument();
// });
//
// test('submits form on button click', async () => {
//   renderComponent();
//   userEvent.click(screen.getByText(/Add Car/i));
//
//   const mutationMock = useCreateCar as jest.Mock;
//   const mutateMock = mutationMock.mock.calls[0][0].mutate;
//
//   await waitFor(() => {
//     userEvent.click(screen.getByText(/Submit/i));
//   });
//
//   // You may want to add assertions based on your useCreateCar logic
//   expect(mutateMock).toHaveBeenCalled();
// });
