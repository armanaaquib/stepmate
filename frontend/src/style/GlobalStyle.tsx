import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 3.5rem;
  }

  html {
    font-size: 4px;
  }
`;

export default GlobalStyle;
