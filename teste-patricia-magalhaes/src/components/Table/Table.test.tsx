import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { CustomerContextProvider } from "../../context/CustomersContext";
import { Table } from "./index";

describe("Table Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "innerWidth", {
      value: 1000,
    });
  });

  it("should render the Table component correctly", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CustomerContextProvider>
          <Table />
        </CustomerContextProvider>
      </ThemeProvider>
    );

    const headingElement = screen.getByRole("heading", {
      name: /Customers Infos/i,
    });
    expect(headingElement).toBeInTheDocument();

    if (window.innerWidth <= 768) {
      const mobileTableElement = screen.getByTestId("mobile-table");
      expect(mobileTableElement).toBeInTheDocument();
    } else {
      const desktopTableElement = screen.getByTestId("desktop-table");
      expect(desktopTableElement).toBeInTheDocument();
    }
  });
});
