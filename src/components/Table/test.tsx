import React from 'react';
import { render, screen } from '@testing-library/react';

import Table from './Table';

import mockData from './mockData.json';

const mockCustomers = [
  {
    id: '1',
    name: 'João Pereira',
    email: 'john@example.com',
    phone: '123-456-7890',
    status: 'Active'
  },
];

describe('Table Component', () => {
  test('renders table with columns and data', () => {
    const columns = ['id', 'name', 'email', 'phone', 'status'];

    render(
      <Table columns={columns} customers={mockCustomers} />
    );

    for (const column of columns) {
      const headerColumn = screen.getByText(column);
      expect(headerColumn).toBeInTheDocument();
    }

    for (const customer of mockCustomers) {
      const nameCell = screen.getByText(customer.name);
      const emailCell = screen.getByText(customer.email);
      const phoneCell = screen.getByText(customer.phone);
      const statusCell = screen.getByText(customer.status);

      expect(nameCell).toBeInTheDocument();
      expect(emailCell).toBeInTheDocument();
      expect(phoneCell).toBeInTheDocument();
      expect(statusCell).toBeInTheDocument();
    }
  });

  test('renders caption if provided', () => {
    const caption = 'Customer List';

    render(
      <Table caption={caption} customers={mockCustomers} />
    );

    const tableCaption = screen.getByText(caption);
    expect(tableCaption).toBeInTheDocument();
  });

  test('renders bigger amounts of data', () => {
    const caption = 'Customer List';

    render(
      <Table caption={caption} customers={mockData.customers} />
    );

    const tableCaption = screen.getByText(caption);
    expect(tableCaption).toBeInTheDocument();
  });

});