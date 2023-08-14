import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/themes/default";
import { CustomerContextProvider } from '../src/context/CustomersContext'
import { GlobalStyle } from "../src/styles/global";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <CustomerContextProvider>
        <Story />
        <GlobalStyle />
      </CustomerContextProvider>
    </ThemeProvider>
  ),
];

export default preview;
