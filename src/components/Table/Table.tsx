import React, {
  useState,
  useEffect,
  TableHTMLAttributes,
  Dispatch,
  SetStateAction
} from 'react';

import { filterObjectsBySubstring } from '../../utils/helpers';

import * as S from './styles';

import Cells from './Cells';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  query?: string;
  queryType?: string;
  columns?: Array<string>;
  customers?: Customer[];
  caption?: string;
  errorMessage?: string;
  setResult?: Dispatch<
    SetStateAction<'default' | 'info' | 'success' | 'attention' | 'error'>
  >;
}

const Table: React.FC<TableProps> = ({
  query = '',
  queryType = 'email',
  columns = ['No columns'],
  customers = [],
  caption = '',
  errorMessage = 'Nenhum usuário encontrado.',
  setResult,
  ...props
}) => {
  const [queryResult, setQueryResult] = useState([...customers]);
  useEffect(() => {
    let filteredArr = filterObjectsBySubstring(customers, queryType, query);
    setQueryResult(filteredArr);

    if (filteredArr.length === 1) {
      setResult && setResult('success');
    } else if (filteredArr.length === 0) {
      setResult && setResult('error');
    } else {
      setResult && setResult('default');
    }

    return;
  }, [query, queryType]);

  return (
    <S.TableWrapper
      $arrIsEmpty={!queryResult.length ? true : false}
      data-message={errorMessage}
    >
      <S.Table {...props}>
        {caption ? <S.Caption>{caption ? caption : ''}</S.Caption> : <></>}
        <thead>
          <S.TableRow>
            {columns.map((header, index) => (
              <S.TableHeader key={`header-${header}-${index}`}>
                {header ? header : 'Header'}
              </S.TableHeader>
            ))}
          </S.TableRow>
        </thead>
        <tbody>
          {queryResult.map((individualCustomerData, index) => (
            <S.TableRow data-label={`row-${index}`} key={`row-${index}`}>
              <Cells
                customerData={individualCustomerData}
                columns={columns}
                key={`row-${index}`}
              />
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

function arePropsEqual(prevProps: TableProps, nextProps: TableProps) {
  return (
    prevProps.query === nextProps.query &&
    prevProps.queryType === nextProps.queryType &&
    prevProps.customers === nextProps.customers &&
    prevProps.errorMessage === nextProps.errorMessage &&
    prevProps.caption === nextProps.caption
  );
}

export default React.memo(Table, arePropsEqual);
