import React from "react";
import styled from "styled-components";
import moonLogo from "../assets/icon-moon.svg";
import sunLogo from "../assets/icon-sun.svg";
import { useGlobalContext } from "../context";
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 23px 0;
`;
const ThemeCont = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ThemeText = styled.p`
  color: ${(props) =>
    props.darkMode === false
      ? "var(--clr-gray-neutral)"
      : "var(--clr-white-primary)"};
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
const ThemeBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;
const Header = () => {
  const { darkMode, setDarkMode } = useGlobalContext();
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <ThemeCont>
        <ThemeText darkMode={darkMode}>{darkMode ? "LIGHT" : "DARK"}</ThemeText>
        <ThemeBtn
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <ThemeImg src={darkMode ? sunLogo : moonLogo} alt="theme img" />
        </ThemeBtn>
      </ThemeCont>
    </StyledHeader>
  );
};

export default Header;
