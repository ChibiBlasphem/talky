import styled, { createGlobalStyle } from 'styled-components'

export const AppGlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  body, input, textarea, select {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  * {
    box-sizing: border-box;
  }
`
