import { Table, DotGreen, DotGrey, DotRed, DotYellow } from "./styles";
import { ICustomerInfo } from "../../../services/customersAPI";

interface TableProps {
  data: ICustomerInfo[];
  columns: string[];
}

export const DesktopTable = ({ data, columns }: TableProps) => {
  const statusChecher = (status: string) => {
    switch (status) {
      case "active":
        return <DotGreen />;
      case "inactive":
        return <DotRed />;
      case "waiting":
        return <DotYellow />;
      case "disabled":
        return <DotGrey />;
      default:
        return <DotGrey />;
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} data-title={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              {statusChecher(item.status)}
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
