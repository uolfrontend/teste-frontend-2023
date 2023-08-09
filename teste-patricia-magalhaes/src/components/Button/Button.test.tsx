import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Button } from "./index";
import { defaultTheme } from "../../styles/themes/default";

describe("Button Component", () => {
  it("should call onClick prop on click button", () => {
    const onClick = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <Button onClick={onClick} title={"Load data"} $variant="primary" />
      </ThemeProvider>
    );

    const button = screen.getByText(/load data/i);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
