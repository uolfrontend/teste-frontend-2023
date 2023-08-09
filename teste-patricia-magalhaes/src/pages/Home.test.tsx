import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defaultTheme } from "../styles/themes/default";
import Home from "./index";

describe("Home Component", () => {
  let axiosMock: MockAdapter;
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

  beforeAll(() => {
    axiosMock = new MockAdapter(axios);
  });
  it("should fetch and show customers on button click", async () => {
    axiosMock.onGet("http://localhost:3000/customers").reply(200, dataMock);

    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    );

    const button = screen.getByText("Load data");
    fireEvent.click(button);

    await waitFor(() => {
      const tableRows = screen.getAllByRole("row");

      expect(tableRows.length).toBe(dataMock.length + 1);
    });

    screen.debug();
  });

  it("should filter and display customers based on search input", async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
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
        <Home />
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
