import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.background};
    }

    body, textarea, button, input{
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        
    }
`
