import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Table } from "./index";
import { defaultTheme } from "../../styles/themes/default";

describe("Table Component", () => {
  const dataMock = [
    {
      id: "1",
      name: "Camila Souza",
      email: "camila.souza@email.com",
      phone: "(11) 93463-2347",
      status: "active",
    },
    {
      id: "2",
      name: "Pedro Ferreira",
      email: "peferreira@email.com",
      phone: "(11) 95529-5678",
      status: "inactive",
    },
    {
      id: "3",
      name: "Marcela Silva",
      email: "masilva@email.com",
      phone: "(11) 93470-3391",
      status: "waiting",
    },
    {
      id: "4",
      name: "Carlos Ferraz",
      email: "carlosferraz@email.com",
      phone: "(11) 96744-0233",
      status: "disabled",
    },
  ];

  it("should render table headers", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Table data={dataMock} />
      </ThemeProvider>
    );

    const columns = Object.keys(dataMock[0]);

    columns.forEach((column) => {
      const headerElement = screen.queryByText(column.toUpperCase());

      expect(headerElement).toBeInTheDocument();
    });
  });

  it("should render data rows", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Table data={dataMock} />
      </ThemeProvider>
    );

    dataMock.forEach((item) => {
      const nameCell = screen.getByText(item.name);
      const emailCell = screen.getByText(item.email);
      const phoneCell = screen.getByText(item.phone);
      const statusCell = screen.getByText(item.status);

      expect(nameCell).toBeInTheDocument();
      expect(emailCell).toBeInTheDocument();
      expect(phoneCell).toBeInTheDocument();
      expect(statusCell).toBeInTheDocument();
    });
  });
});
