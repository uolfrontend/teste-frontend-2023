import React from "react";
import { ICustomerInfo } from "../../services/customersAPI";
import { Container, Cell, MobileColumnTitle, TableColumnTitle } from "./styles";

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
              <TableColumnTitle key={column} data-title={column.toUpperCase()}>
                {column.toUpperCase()}
              </TableColumnTitle>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr className="only-desktop">
                <Cell>{index + 1}</Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.email}</Cell>
                <Cell>{item.phone}</Cell>
                <Cell $status={item.status}>{item.status}</Cell>
              </tr>

              <tr className="only-mobile">
                <MobileColumnTitle className="only-mobile padding-top">
                  {columns[0].toUpperCase()}
                </MobileColumnTitle>
                <Cell>{index + 1}</Cell>
              </tr>
              <tr className="only-mobile">
                <MobileColumnTitle>
                  {columns[1].toUpperCase()}
                </MobileColumnTitle>
                <Cell>{item.name}</Cell>
              </tr>
              <tr className="only-mobile">
                <MobileColumnTitle>
                  {columns[2].toUpperCase()}
                </MobileColumnTitle>
                <Cell>{item.email}</Cell>
              </tr>
              <tr className="only-mobile">
                <MobileColumnTitle>
                  {columns[3].toUpperCase()}
                </MobileColumnTitle>
                <Cell>{item.phone}</Cell>
              </tr>
              <tr className="only-mobile">
                <MobileColumnTitle>
                  {columns[4].toUpperCase()}
                </MobileColumnTitle>
                <Cell $status={item.status} className="only-mobile border-grey">
                  {item.status}
                </Cell>
              </tr>
              
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
