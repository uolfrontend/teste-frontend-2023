import React from 'react';
import { render, screen } from '@testing-library/react';

import Table from './Table';

import MockValues from './table.mock.json';

describe('Render Form Input Component', () => {
  test('render default input', async () => {
    render(<Table items={MockValues.items} fields={MockValues.fields} />);

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();

    // Invisible collumn
    const idTableColumn = screen.queryByText('ID');
    expect(idTableColumn).not.toBeInTheDocument();

    const situacaoTableColumn = screen.queryByText(/Situação/);
    expect(situacaoTableColumn.getAttribute('role')).toEqual('columnheader');

    const tableRows = screen.getAllByRole('row');
    // 3 body rows + header row
    expect(tableRows).toHaveLength(4);
    // One column is not visible
    expect(tableRows[0].childNodes).toHaveLength(3);

    expect(tableElement).toHaveTextContent(/Fulano de Tal/i);
    expect(tableElement).toHaveTextContent(/Cicrano de Circus/i);
    expect(tableElement).toHaveTextContent(/Beltrano de Bertrand/i);
  });
});
