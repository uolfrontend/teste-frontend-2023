import { useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { theme } from '../../styles/theme';
import { Table } from '../../components/Table';
import customers from '../../Data/customers.json';
import { DataProps } from '../../types';
import * as S from './styled';

export const Home = () => {
  const [showInputAndTable, setShowInputAndTable] = useState(false);
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [inputText, setInputText] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [data, setData] = useState<DataProps[]>([]);

  const getCustomersResponse = async () => {
    try {
      // const responseCustomers = await GetCustomers()
      const responseCustomers: DataProps[] = customers;
      setData(responseCustomers);
    } catch (error) {
      console.error('Error ao buscar customers', error);
    }
  };

  const onClick = () => {
    getCustomersResponse();
    setShowInputAndTable(true);
  };

  const handleFilterChange = (value: string) => {
    setInputText(value);

    const isValid = data.some(customer =>
      customer.email.toLowerCase().includes(value.toLowerCase())
    );
    setIsEmailValid(isValid);

    const filteredData = data.filter(customer =>
      customer.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCustomers(filteredData);
  };

  return (
    <S.Container>
      {!showInputAndTable && (
        <S.ContentButton>
          <Button
            onClick={onClick}
            label="Buscar Dados"
            background={theme.colors.action.colorActionMedium}
            border="none"
            color={theme.colors.neutral.colorNeutralLightest}
            size="large"
            hoverActive={theme.colors.action.colorActionLight}
            colorHover={theme.colors.neutral.colorNeutralLight}
          />
        </S.ContentButton>
      )}

      {showInputAndTable && (
        <S.Content>
          <Input
            valid={isEmailValid}
            label="Busque pelo E-mail"
            onFilterChange={handleFilterChange}
          />

          <Table data={filteredCustomers} />
        </S.Content>
      )}
    </S.Container>
  );
};
