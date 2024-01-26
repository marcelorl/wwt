import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from '../App';

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

describe.skip('#App', () => {
  test('renders loading state initially', () => {
    renderComponent();
    expect(screen.getByText(/loading/i)).toMatchSnapshot();
  });

  test('renders table after loading', async () => {
    const { queryByText, container } = renderComponent();

    await waitFor(() => expect(queryByText(/Loading.../i)).toBeNull());

    expect(container).toMatchSnapshot();
  });
});
