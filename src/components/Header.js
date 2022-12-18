import React from "react";
import styled from "styled-components";
import moonLogo from "../assets/icon-moon.svg";
import sunLogo from "../assets/icon-sun.svg";
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 23px 30px;
`;
const ThemeCont = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ThemeText = styled.p`
  color: var(--clr-gray-neutral);
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
`;
const ThemeImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;
const Header = () => {
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <ThemeCont>
        <ThemeText>DARK</ThemeText>
        <ThemeImg src={moonLogo} alt="theme img" />
      </ThemeCont>
    </StyledHeader>
  );
};

export default Header;
