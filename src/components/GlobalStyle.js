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
        font-family: "Lato", serif;
        width:100%;
        background-color: #FBFBFB;
        background-color: ${({ mode }) => mode ?'#FBFBFB': '#884a55' };
    }
    h2, h3, p,li{
        color:#121212;
    }
`

export default GlobalStyle