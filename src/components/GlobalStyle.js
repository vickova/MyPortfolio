import {createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
            position:absolute;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgray;
        }
    }
    body{
        font-family:'Montserrat', sans-serif;
        width:100%; 
    }
    h2, h3, p,li{
        color:#121212;
    }
`

export default GlobalStyle