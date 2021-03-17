import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #fff;

    --red: #E52e4D;

    --blue: #5429CC;
    --blue-light: #6933ff;

    --green: #33CC95;

    --text-title: #363F5F;
    --text-body: #969cb3;


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

`
