import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 2em;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
