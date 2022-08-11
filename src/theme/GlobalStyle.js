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
    font-family: "Roboto", sans-serif;
    background-color: #3d3d3d;
    height: 100%;
  }

  img {
    display: block
    width: 100%;
  }

  input[type="text"],
  input[type="number"],
  textarea,
  label {
    margin: 0.4rem 0.25rem;
    padding: 0.4rem;
    border-radius: 5px;
    background-color: #7e7e7e;
    border: 2px solid #ffffff;
    color: #ffffff;
    font: inherit;
  }

  input[type="text"]::placeholder,
  input[type="number"]::placeholder,
  textarea::placeholder {
    color: white;
    opacity: 1;
  }

  label:hover {
    cursor: pointer;
    background-color: #464646;
  }

  h3 {
    margin: 0.5rem 0.4rem;
    color: white;
  }

  h2,h4 {
    color: white;
    margin: 0.5rem 0rem;

  }

  span {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin-right: 0.5rem;
  }

  button {
    background-color: #2b7a77;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 1rem;
  }

  button:hover {
    cursor: pointer;
    background-color: #175654;
  }

  textarea {
    height: 90px;
    margin: 0.3rem 0.25rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid #ffffff;
    border-radius: 5px;
    resize: none;
    font-family: inherit;
  }

  p { 
    margin: 1rem 0;
  }
`;

export default GlobalStyle;
