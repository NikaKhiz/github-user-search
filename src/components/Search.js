import React from "react";
import styled from "styled-components";
import searchLogo from "../assets/icon-search.svg";
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 23px 30px;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;
const StyledSearch = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;
const StyledButton = styled.button`
  padding: 12px 23px;
  border-radius: 10px;
  border: none;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--clr-white-primary);
  background-color: var(--clr-blue-primary);
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: var(--clr-gray-bold);
  }
`;
const Search = () => {
  return (
    <StyledForm>
      <StyledSearch>
        <img src={searchLogo} alt="search logo" />
        <StyledInput type="text" placeholder="Search Github Username..." />
      </StyledSearch>
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};

export default Search;
