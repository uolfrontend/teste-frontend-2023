import React from 'react';

import { TableCellsProps } from './types';

const TableCells = ({ item, columns }: TableCellsProps) => {
  const fieldKeys = Object.keys(columns);

  return (
    <>
      {fieldKeys.map((columnId) => {
        const field = columns[columnId];
        if (!field.isVisible) {
          return null;
        }

        return (
          <td
            key={`tbl-col-${item.id}-${field.label}`}
            data-label={field.label}
          >
            {item[columnId]}
          </td>
        );
      })}
    </>
  );
};

export default TableCells;
