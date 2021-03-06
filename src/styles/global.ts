import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, textarea, button {
    font-family: ${theme.font.fontFamily};
    font-weight: 400;

  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }


  body {
    background: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

`
