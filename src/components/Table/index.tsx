import { DataProps } from '../../types';
import * as S from './styled';

interface TableProps {
  data: DataProps[];
}

export const Table = ({ data }: TableProps) => {
  return (
    <S.Content>
      <S.TableContent>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>

        {data.map(item => (
          <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.status}</td>
            </tr>
          </tbody>
        ))}
      </S.TableContent>
    </S.Content>
  );
};
