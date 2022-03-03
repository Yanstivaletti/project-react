import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 62.5%;

    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
  }

  body {
      font-family: 'Montserrat', 'Roboto', 'Segoe UI','Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
      cursor: pointer;
      border: none;
  }
`;
