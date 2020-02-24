import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle` 
${reset};
button {
border:none;
cursor:pointer;
outline:none;
}
body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:15px;
    background-color: #f8f7ff;
    color:black;
    height:100%;
}`;
export default globalStyles;
