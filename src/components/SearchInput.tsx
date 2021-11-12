import React from "react";
import styled from "styled-components";
import svg from "../icons/ant-design_search-outlined.svg";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  refetch: () => void;
}

const SearchInput: React.FC<Props> = ({
  searchValue,
  setSearchValue,
  refetch,
}) => {
  return (
    <SearchWrapper
      onSubmit={(e) => {
        e.preventDefault();
        refetch();
      }}
    >
      <Search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
      />
      <Submit type="submit">
        <img src={svg} alt="" />
      </Submit>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  & {
    img {
      max-width: 1.4rem;
    }
  }
`;

// Styles like Svelte or Vue
const Search = styled.input`
  background-color: #121212;
  border: 1px solid #121212;
  outline: none;
  padding: 0.5rem 0.5rem;
  font-size: large;
  color: white;
  transition: all;
  transition-duration: 100ms;

  &:focus {
    border: 1px solid #367dbe;
    box-sizing: border-box;
  }
`;

const Submit = styled.button`
  background-color: #313131;
  outline: none;
  border: 1px solid #313131;

  &:hover {
    background-color: #252525;
    border: 1px solid #252525;
  }
`;

export default SearchInput;
