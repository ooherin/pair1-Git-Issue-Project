// reset css

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #f8f8f8;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  pre {
    width: 500px;
  }

  code {
    display: block;
    width: 100%;
  }
  img {
			width: 100%;
		}
`;

export default GlobalStyles;
