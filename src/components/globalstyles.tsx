import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
        z-index: 0;
    }

    html {
        font-size: 1rem;
        font-family: 'Exo-ExtraLight';
        overflow: hidden;
    }

    html, body, #__next {
        height: 100%;
    }
  
    body, #__next {
        overflow: auto;
    }

    main {
        height: 100%;
    }
`;
