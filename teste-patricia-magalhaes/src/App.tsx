import "./App.css";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import Home from "./pages";
import { CustomerContextProvider } from "./context/CustomersContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CustomerContextProvider>
        <GlobalStyle />
        <Home />
      </CustomerContextProvider>
    </ThemeProvider>
  );
}

export default App;
