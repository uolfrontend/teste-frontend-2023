import React, { ChangeEvent, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { CustomerType } from '../../Services/Http/Api.types';
import { Input, Table } from '../../Components';
import { FieldsHeader } from '../../Components/Table/Containers/types';

const tableHeaderColumns: FieldsHeader = {
  id: {
    label: 'Id',
    isVisible: true,
  },
  name: {
    label: 'Name',
    isVisible: true,
  },
  email: {
    label: 'Email',
    isVisible: true,
  },
  phone: {
    label: 'Phone',
    isVisible: true,
  },
  status: {
    label: 'Status',
    isVisible: true,
  },
};

const Customers = () => {
  const [filterBy, setFilterBy] = useState('');
  const { customers } = useLoaderData() as {
    customers: CustomerType[];
  };

  const customersFilteredList = useMemo(() => {
    return (customers || []).filter((item) => item.email.match(filterBy));
  }, [customers, filterBy]);

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterBy(e.target.value);
  };

  return (
    <div>
      <Input
        name='filter'
        label='Filtrar por e-mail'
        onChange={onChangeFilter}
      />
      <Table items={customersFilteredList} fields={tableHeaderColumns} />
    </div>
  );
};

export default Customers;
