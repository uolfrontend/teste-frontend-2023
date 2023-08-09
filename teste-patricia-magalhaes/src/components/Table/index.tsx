import { ICustomerInfo } from "../../services/customersAPI";
import { Container, Cell } from "./styles";

interface TableProps {
  data: ICustomerInfo[];
}

export const Table = ({ data }: TableProps) => {
  const columns = Object.keys(data[0] || {});

  return (
    <Container>
      <h2>Customers Infos</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>
                {column.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <Cell>{index + 1}</Cell>
              <Cell>{item.name}</Cell>
              <Cell>{item.email}</Cell>
              <Cell>{item.phone}</Cell>
              <Cell $status={item.status}>{item.status}</Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
