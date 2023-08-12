import { Table, DotGreen, DotGrey, DotRed, DotYellow } from "./styles";
import { useCustomerContext } from "../../../hooks/useCustomerContext";

export const DesktopTable = () => {
  const { filtered, columns } = useCustomerContext();

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
        {filtered.map((item, index) => (
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
