import React from 'react';

import { TableRowsProps } from './types';
import Containers from '.';

const TableRows = ({ items, fields }: TableRowsProps) => {
  if (items.length < 1) {
    return (
      <tr>
        <td colSpan={Object.keys(fields).length} className='empty-table-data'>
          Nenhum resultado
        </td>
      </tr>
    );
  }

  return (
    <>
      {items.map((item) => (
        <tr key={`tbl-row-${item.id}`} role='row'>
          <Containers.TableCells item={item} columns={fields} />
        </tr>
      ))}
    </>
  );
};

export default TableRows;
