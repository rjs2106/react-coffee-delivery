import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from 'styled-components';

// Styles
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}