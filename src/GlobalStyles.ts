// import React from "react";
import styled, {createGlobalStyle, css} from 'styled-components';

export const RobotoFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
`;

export const GlobalStyles = createGlobalStyle`
    ${RobotoFont}
    
    :root {
        --black:#000;
        --white:#fff;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 18px;
        line-height: 21px;
        
    }

    * {
        color: var(--black);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;