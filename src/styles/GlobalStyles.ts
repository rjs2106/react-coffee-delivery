import { createGlobalStyle } from 'styled-components';
import { ThemeType } from "./themes/default"
import introBackground from "../assets/images/bg.svg";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    background-color: ${props => props.theme.grey_100};
    /* background: url(${introBackground}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
    
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }
`