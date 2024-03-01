import React from 'react';

import { TableRowsProps } from './types';

const TableRow = ({ items, fields }: TableRowsProps) => {
  return (
    <>
      {items.map((item) => (
        <tr key={`tbl-row-${item.id}`} role='row'>
          {Object.keys(fields).map((fieldId) => {
            const field = fields[fieldId];
            if (!field.isVisible) {
              return null;
            }

            return (
              <td
                key={`tbl-col-${item.id}-${field.label}`}
                data-label={field.label}
              >
                {item[fieldId]}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
