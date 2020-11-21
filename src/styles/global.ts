import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    font-size: 60%;

    --color-background: #F0F0F7;
    --color-primary-lighter: #4d4b4b;
    --color-primary-light: #3f3f3f;
    --color-primary: #333333;
    --color-primary-dark: #272626;
    --color-primary-darker: #1b1a1a;
    --color-secondary: #0070c9;
    --color-secondary-dark: #024b86;
    --color-title-in-primary: #000000;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-line-in-gray: #ccc;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC; 
}

* {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100vh;
}

body {
    background: white;
}

#root {
    display: flex;
    align-items: center;
    justify-content: center;
}

body,
input,
button,
textarea {
    font: 500 1.6rem Poppins;
}

.container {
    width: 90vw;
    max-width: 700px;
}

@media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}

`;