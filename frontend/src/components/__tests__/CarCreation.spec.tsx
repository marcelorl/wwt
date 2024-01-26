import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CarCreation } from '../CarCreation';

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <CarCreation />
    </QueryClientProvider>
  );

describe('#CarCreation', () => {
  test('renders Add Car button and modal', async () => {
    const { baseElement, getByText } = renderComponent();

    await waitFor(() => userEvent.click(getByText(/Add Car/i)));

    expect(baseElement).toMatchSnapshot();
  });

  test('validates form submission', async () => {
    const { getByLabelText, getByText, baseElement } = renderComponent();

    await waitFor(() => userEvent.click(getByText(/Add Car/i)));
    await waitFor(() => userEvent.type(getByLabelText(/year/i), '2030'));
    await waitFor(() => userEvent.click(getByText(/submit/i)));

    expect(baseElement).toMatchSnapshot();
  });
});
