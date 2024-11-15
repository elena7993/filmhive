import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  Padding_pc: "10%",
  Padding_1024: "20px",
  Padding_768: "20px",
  Padding_440: "10px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{box-sizing: border-box;
}

body{
  color: #fff;
  background-color: rgba(2, 0, 23, 1);
  letter-spacing: -1px;
}

img{
  width: 100%;
  display: block;
}

a{
  text-decoration: none;
}

ul, li{
  list-style: none;
}

`;
