import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    min-height: 100%;
    position: relative;
  }

  body {
    font-family: "Tahoma", sans-serif;
    background-color: #EAE7DC;
  }

  img{
    display: block
    width: 100%;
  }

  input {
    margin: 0.3rem 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: none;
  }

  h3 {
    margin: 0.5rem 0.4rem;
  }

  button {
    background-color: #8e8d8a70;
    border: none;
    border-radius: 5px;
    color: #e85a4f;
  }

  button:hover {
    cursor: pointer;
    background-color: #8e8d8a;
  }

  textarea {
    height: 75px;
    margin: 0.3rem 0.25rem;
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 5px;
    resize: none;
    font-family: inherit
  }
`;

export default GlobalStyle;
