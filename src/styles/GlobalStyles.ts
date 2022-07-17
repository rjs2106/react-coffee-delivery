import { createGlobalStyle } from 'styled-components';
import { ThemeType } from "./themes/default"

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    background-color: ${props => props.theme.grey_100}
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }
`