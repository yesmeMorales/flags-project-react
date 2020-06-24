import React from "react";
import styled from "styled-components";
import Search from "./search";
import FilterByRegion from "./filterbyregion";
import Wrapper from "./wrapper";

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  );
}

export default ActionList;
