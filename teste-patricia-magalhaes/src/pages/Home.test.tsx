import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defaultTheme } from "../styles/themes/default";
import Home from "./index";
import { CustomerContextProvider } from "../context/CustomersContext";
import customers from "../../.jest/mocks/dataMock";

describe("Home Component", () => {
  let axiosMock: MockAdapter;

  beforeAll(() => {
    axiosMock = new MockAdapter(axios);

    // Mock useCustomerContext hook
    jest.mock("../hooks/useCustomerContext", () => ({
      useCustomerContext: () => ({
        filtered: [],
        setFiltered: jest.fn(),
        columns: [],
        setColumns: jest.fn(),
      }),
    }));
  });
  it("should fetch and show customers on button click", async () => {
    axiosMock.onGet("http://localhost:3000/customers").reply(200, customers);

    render(
      <ThemeProvider theme={defaultTheme}>
        <CustomerContextProvider>
          <Home />
        </CustomerContextProvider>
      </ThemeProvider>
    );

    const button = screen.getByText("Load data");
    fireEvent.click(button);

    await waitFor(() => {
      const tableRows = screen.getAllByRole("row");

      expect(tableRows.length).toBe(customers.length + 1);
    });
  });

  it("should filter and display customers based on search input", async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CustomerContextProvider>
          <Home />
        </CustomerContextProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Load data"));

    await screen.findByRole("table");

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, {
      target: { value: "carlosferraz@email.com" },
    });

    await waitFor(() => {
      const tableRows = screen.getAllByRole("row");

      const filteredContent = "carlosferraz@email.com";
      const isFilteredContentPresent = tableRows.some((cell) =>
        cell.textContent?.includes(filteredContent)
      );

      expect(isFilteredContentPresent).toBe(true);
    });
  });

  it("should display not found message if customer not found", async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CustomerContextProvider>
          <Home />
        </CustomerContextProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Load data"));

    await screen.findByRole("table");

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, {
      target: { value: "invalidsearch" },
    });

    const notFoundMessage = screen.queryByText("Customer not found!");

    expect(notFoundMessage).toBeInTheDocument();
  });
});
