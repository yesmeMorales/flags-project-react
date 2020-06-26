import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Input from "./input";

const SearchStyled = styled.div`
  padding: 0 1.5em;
  display: flex;
  position: relative;

  .close {
    position: absolute;
    right: 2.5em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  }
`;

function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const name = e.target.value;
    // let letterCode = e.keyCode;
    // if (letterCode === 13) {
    dispatch({
      type: "GET_COUNTRYLIST_BY_NAME",
      payload: name,
    });
    setInputValue(name);
    // }
  };

  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });

    setInputValue("");
  };

  return (
    <SearchStyled>
      {inputValue && (
        <i className="fas fa-times close" onClick={clearInput}></i>
      )}

      <Input
        placeholder="Search for a country..."
        value={inputValue}
        onChange={handleChange}
      />
    </SearchStyled>
  );
}

export default Search;
