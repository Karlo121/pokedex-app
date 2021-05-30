import React from 'react';
import {
  SearchBarWrapper,
  SearchBarHeader,
  StyledSearchBar,
} from './SearchBar.style';
import { SearchBarProps } from './SearchBar.types';

const SearchBar = (props: SearchBarProps) => {
  const { setSearchTerm } = props;

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <SearchBarWrapper>
      <SearchBarHeader>Search</SearchBarHeader>
      <StyledSearchBar
        type='text'
        placeholder='search by type or name'
        onChange={handleOnChange}
      ></StyledSearchBar>
    </SearchBarWrapper>
  );
};

export default SearchBar;
