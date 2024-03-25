import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'
import { ApplicationRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
