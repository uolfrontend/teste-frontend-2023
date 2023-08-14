import React from 'react';

import * as S from './styles';

export type CellsProps = {
  customerData?: any;
  columns?: Array<string>;
};

const Cells: React.FC<CellsProps> = ({ customerData, columns = ['none'] }) => {
  return (
    <>
      {columns.map((column: string, index: any) => (
        <S.TableCell key={`table-cell-${index}`} data-label={column}>
          {customerData ? customerData[column] : ''}
        </S.TableCell>
      ))}
    </>
  );
};

export default Cells;
