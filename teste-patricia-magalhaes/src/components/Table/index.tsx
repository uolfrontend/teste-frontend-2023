import { useViewport } from "../../hooks/useViewport";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
import { Container } from "./styles";

export const Table = () => {
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <Container>
      <h2>Customers Infos</h2>
      {width <= breakpoint ? <MobileTable /> : <DesktopTable />}
    </Container>
  );
};
