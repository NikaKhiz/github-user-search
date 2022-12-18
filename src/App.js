import React from "react";
import Globals from "./components/Globals";
import styled from "styled-components";
import { Container } from "./components/Globals";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";

const AppCont = styled.div`
  width: 100%;
  max-width: 730px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Globals />
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
