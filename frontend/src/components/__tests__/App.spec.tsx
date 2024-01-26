import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from '../App';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

describe('#App', () => {
  test('renders loading state initially', () => {
    const { getByText } = renderComponent();
    expect(getByText(/loading/i)).toBeTruthy();
  });

  test('renders table after loading', async () => {
    const { queryByText, container } = renderComponent();

    await waitFor(() => expect(queryByText(/Loading.../i)).toBeNull());

    expect(container).toMatchSnapshot();
  });

  test.skip('form submission - UNFINISHED', async () => {
    const { queryByText, getByText, getByLabelText, baseElement } =
      renderComponent();

    await waitFor(() => expect(queryByText(/Loading.../i)).toBeNull());
    await waitFor(() => userEvent.click(getByText(/Add Car/i)));

    await waitFor(() => userEvent.type(getByLabelText('make'), 'Honda'));
    await waitFor(() => userEvent.type(getByLabelText('model'), 'Hr-v'));
    await waitFor(() => userEvent.type(getByLabelText('package'), 'Standard'));
    await waitFor(() => userEvent.type(getByLabelText('color'), 'White'));
    await waitFor(() => userEvent.type(getByLabelText('year'), '2024'));
    await waitFor(() => userEvent.type(getByLabelText('category'), 'Coupe'));
    await waitFor(() => userEvent.type(getByLabelText('mileage'), '1'));
    await waitFor(() => userEvent.type(getByLabelText('price'), '0'));

    await waitFor(() => userEvent.click(getByText(/submit/i)));

    expect(baseElement).toMatchSnapshot();
  });
});
