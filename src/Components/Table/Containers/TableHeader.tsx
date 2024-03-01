import React from 'react';

import { TableHeaderProps } from './types';

const TableHeader = ({ fields }: TableHeaderProps) => {
  return (
    <tr>
      {Object.keys(fields).map((fieldId) => {
        const field = fields[fieldId];
        if (!field.isVisible) {
          return null;
        }

        return (
          <th key={`tbl-head-${field.label}`} role='columnheader'>
            {field.label}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeader;
