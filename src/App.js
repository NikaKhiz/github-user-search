import React from "react";
import Globals from "./components/Globals";
import styled from "styled-components";
import { Container } from "./components/Globals";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import { useGlobalContext } from "./context";
const AppCont = styled.div`
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  @media screen and (min-width: 768px) {
    max-width: 570px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 730px;
  }
`;

function App() {
  const { darkMode } = useGlobalContext();
  return (
    <>
      <Globals darkMode={darkMode} />
      <Container>
        <AppCont>
          <Header />
          <Search />
          <Result />
        </AppCont>
      </Container>
    </>
  );
}

export default App;
