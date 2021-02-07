import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&display=swap");

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
