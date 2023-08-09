import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  :focus {
    outline: none;
  }

  body, html, button {
    height: 100%;
    font-family: "Roboto", sans-serif;
  }
`;
