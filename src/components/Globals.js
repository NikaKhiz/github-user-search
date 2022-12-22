import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Globals = createGlobalStyle`
:root {
  /* colors */
  --clr-bg-light: #f6f8ff;
  --clr-dark-neutral: #1e2a47;
  --clr-dark-bold: #1e2a47;
  --clr-dark-bolder: #2b3442;
  --clr-blue-primary: #0079ff;
  --clr-white-primary: #fefefe;
  --clr-gray-neutral: #697c9a;
  --clr-gray-bold: #4b6a9b;
  --clr-primary-red: #f74646;

  /* fonts */
  --ff-primary:"Space Mono", monospace;
  --fw-regular: 400;
  --fw-bold: 700;
}
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  line-height: 25px;
  font-family: var(--ff-primary);
  font-weight: 400;
  background: var(--clr-bg-light);
  color: var(--clr-gray-neutral);
}

h1 {
  font-size: 15px;
  line-height: 25px;
  font-weight: var(--fw-bold);
  color: var(--clr-dark-bolder);
  @media screen and (min-width:768px){
    font-size: 26px;
    line-height: 39px;
  }
}

`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Globals;
