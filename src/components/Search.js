import React from "react";
import styled from "styled-components";
import searchLogo from "../assets/icon-search.svg";
import { useGlobalContext } from "../context";
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 15px;
  border-radius: 15px;
  transition: var(--transition-default);
  background: ${(props) =>
    props.darkMode === false
      ? "var(--clr-white-primary)"
      : "var(--clr-dark-bold)"};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  @media screen and (min-width: 768px) {
    padding: 10px 10px 10px 30px;
  }
`;
const StyledSearch = styled.div`
  display: flex;
  gap: 8px;
  width: 70%;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
const StyledButton = styled.button`
  padding: 12px 18px;
  border-radius: 10px;
  border: none;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--clr-white-primary);
  background-color: var(--clr-blue-primary);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 12px 23px;
  }
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  font-family: "Space Mono";
  font-style: normal;
  text-transform: capitalize;
  color: ${(props) =>
    props.darkMode === false
      ? "var(--clr-gray-bold)"
      : "var(--clr-white-primary)"};
  &::placeholder {
    font-family: "Space Mono";
    font-style: normal;
    font-size: 13px;
    line-height: 25px;
    transition: var(--transition-default);
    color: ${(props) =>
      props.darkMode === false
        ? "var(--clr-gray-bold)"
        : "var(--clr-white-primary)"};
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 25px;
      width: 100%;
    }
  }
`;
const Search = () => {
  const { userName, setUserName, setSearch, darkMode, error } =
    useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(userName);
    setUserName("");
  };
  return (
    <StyledForm onSubmit={handleSubmit} darkMode={darkMode}>
      <StyledSearch>
        <img src={searchLogo} alt="search logo" />
        <StyledInput
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          darkMode={darkMode}
        />
      </StyledSearch>
      {error && (
        <p
          style={{
            color: "red",
            fontWeight: "700",
            fontSize: "13px",
          }}
        >
          No Results
        </p>
      )}
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};

export default Search;
