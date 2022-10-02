import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
    @font-face{
        font-family: 'Roboto';
        src: local('Roboto');
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #FFFEFA;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
`;
