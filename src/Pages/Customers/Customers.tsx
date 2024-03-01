import React, { ChangeEvent, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { CustomerType } from '../../Services/Http/Api.types';
import { Input, Table } from '../../Components';
import { FieldsHeader } from '../../Components/Table/Containers/types';

const tableHeaderColumns: FieldsHeader = {
  id: {
    label: 'CPF',
    isVisible: true,
  },
  name: {
    label: 'Nome',
    isVisible: true,
  },
  email: {
    label: 'E-mail',
    isVisible: true,
  },
  phone: {
    label: 'Telefone',
    isVisible: true,
  },
  status: {
    label: 'Situação',
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
    <>
      <Input
        name='filter'
        label='Filtrar por e-mail'
        onChange={onChangeFilter}
      />
      <Table items={customersFilteredList} fields={tableHeaderColumns} />
    </>
  );
};

export default Customers;
