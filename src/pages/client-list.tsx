import React, { useState } from 'react';

import * as S from '../styles/pagesStyles';

import Input from '../components/Input';
import Table from '../components/Table/Table';
import Select from '../components/Select';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

interface ClientListProps {
  jsonData: {
    customers: Customer[];
  };
}

type ResultProps = 'default' | 'info' | 'success' | 'attention' | 'error';

const ClientList: React.FC<ClientListProps> = ({ jsonData }) => {
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [queryType, setQueryType] = useState('email');
  const [result, setResult] = useState<ResultProps>('info');

  return (
    <S.PageContainer>
      <S.ClientListContainer>
        {jsonData ? (
          <>
            <S.InputFieldsContainer>
              <Input
                label={'filtrar clientes'}
                inputValue={userSearchQuery}
                setInputValue={setUserSearchQuery}
                queryStatus={result}
              />
              <Select
                queryType={queryType}
                label={'campo de filtro'}
                setQueryType={setQueryType}
                options={Object.keys(jsonData.customers[0])}
              />
            </S.InputFieldsContainer>
            <Table
              query={userSearchQuery}
              queryType={queryType}
              columns={Object.keys(jsonData.customers[0])}
              customers={jsonData.customers}
              setResult={setResult}
            />
          </>
        ) : (
          <></>
        )}
      </S.ClientListContainer>
    </S.PageContainer>
  );
};

export async function getServerSideProps() {
  try {
    const endpointUrl = 'http://test-frontend-uolpp.web.app/customers.json';
    const response = await fetch(endpointUrl);

    if (!response.ok) {
      throw new Error(`Pedido falhou com o status de erro: ${response.status}`);
    }

    const jsonData = await response.json();

    return {
      props: {
        jsonData
      }
    };
  } catch (error) {
    console.error('Erro em getServerSideProps:', error);
    return {
      props: {
        customers: []
      }
    };
  }
}

export default ClientList;
