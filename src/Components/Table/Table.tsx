import React from 'react';

import Containers from './Containers';

import { TableProps } from './types';

const Table = ({ fields, items }: TableProps) => {
  return (
    <table className='table' role='table'>
      <thead>
        <Containers.TableHeader fields={fields} />
      </thead>
      <tbody>
        <Containers.TableRow fields={fields} items={items} />
      </tbody>
    </table>
  );
};

export default Table;
