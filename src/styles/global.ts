import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    display: flex;
    justify-content: center;
  }

  body {
    background: ${(props) => props.theme.background};
  }

  body, input, textarea, button {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
