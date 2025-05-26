import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0070f3;
    --black: #111111;
    --white: #f5f5f5;
    --background: #000000;
    --background-light: #1a1a1a;
    --background-lighter: #2a2a2a;
    --text-primary: #ffffff;
    --text-secondary: #d4a017;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--background);
    color: var(--text-primary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles; 