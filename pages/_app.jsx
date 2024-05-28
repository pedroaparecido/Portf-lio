import { ThemeProvider, createGlobalStyle } from "styled-components"

import { Component } from "react"

import theme from '../theme'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }
`

export default function App({ Component, pageProps }) {
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}