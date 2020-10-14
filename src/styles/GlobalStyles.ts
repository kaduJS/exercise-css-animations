import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  }

  :root {
    --font-color01: #F2EADF;
    --font-color02: #0D0D0D;

    --palette01-bg-color01: #400509;  
    --palette01-bg-color02: #800A12;  
    --palette01-bg-color03: #C2101B;  
    --palette01-bg-color04: #E61220;  
    --palette01-bg-color05: #FF1424;

    --palette02-bg-color01: #E9F5F7;  
    --palette02-bg-color02: #C1EA00;  
    --palette02-bg-color03: #3C851B;  
    --palette02-bg-color04: #7FC210;  
    --palette02-bg-color05: #221E2A;  

    --font-shadow01: 2px 2px 5px var(--font-color02);
    --font-shadow02: 1px 1px 2px var(--font-color02);

    --shadow01: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  button, a, textarea, ol, ul, li {
    outline: none;
    text-decoration: none;
    list-style-type: none;
    border: none;
    color: black;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  #root {
    width: inherit;
    height: inherit;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--palette01-bg-color02);
  }
`;
