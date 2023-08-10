import { ICustomerInfo } from "../../../services/customersAPI";
import { Table } from "./styles";

interface TableProps {
  data: ICustomerInfo[];
  columns: string[];
}

export const MobileTable = ({ data, columns }: TableProps) => {
  return (
    <Table>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <th>{columns[0]}</th>
            <td>{index + 1}</td>
            <th>{columns[1]}</th>
            <td>{item.name}</td>
            <th>{columns[2]}</th>
            <td>{item.email}</td>
            <th>{columns[3]}</th>
            <td>{item.phone}</td>
            <th>{columns[4]}</th>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
