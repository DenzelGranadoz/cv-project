import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Tahoma", sans-serif;
    background-color: #EAE7DC;
  }

  img{
    display: block
    width: 100%;
  }
`;

export default GlobalStyle;
