import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App Component", () => {
  it("should render App with message and button", () => {
    render(<App />);

    screen.getByText("Front-End Test - UOL Host");

    screen.getByRole("button");
  });
});
