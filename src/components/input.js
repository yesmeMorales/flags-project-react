import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  background: var(--white);
  color: var(--black);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;
  flex: 1;
  i {
    margin-right: 1em;
    /* color: #c4c4c4; */
    color: var(--black);
  }
  input {
    /* width: 100%; */
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    outline: none;
    font-size: 0.7em;
    background: var(--white);
    color: var(--black);
    &::-webkit-input-placeholder {
      /* color: #c4c4c4; */
      color: var(--black);
    }
  }
`;

function Input({ ...props }) {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="search" {...props} />
    </InputStyled>
  );
}

export default Input;
