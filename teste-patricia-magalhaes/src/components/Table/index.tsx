import { useViewport } from "../../hooks/useViewport";
import { ICustomerInfo } from "../../services/customersAPI";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
import { Container } from "./styles";

interface TableProps {
  data: ICustomerInfo[];
}

export const Table = ({ data }: TableProps) => {
  const { width } = useViewport();
  const breakpoint = 768;

  const columns = Object.keys(data[0]).map((column) => column.toUpperCase());

  return (
    <Container>
      <h2>Customers Infos</h2>
      {width <= breakpoint ? (
        <MobileTable data={data} columns={columns} />
      ) : (
        <DesktopTable data={data} columns={columns} />
      )}
    </Container>
  );
};
