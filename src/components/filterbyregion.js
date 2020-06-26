import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Select from "./select";

const FilterByRegionStyled = styled.div`
  width: 197px;
`;

function FilterByRegion() {
  const dispatch = useDispatch();
  const [region, setRegion] = useState("");
  const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  // const countryListByRegion = useSelector((state) => state.countryListByRegion);

  const handleChangeRegion = (e) => {
    const region = e.target.value;
    setRegion(region);
    console.log(region);
    dispatch({
      type: "GET_COUNTRYLIST_BY_REGION",
      payload: region,
    });
  };

  return (
    <FilterByRegionStyled>
      <Select
        options={regionOptions}
        title={"Search by Region"}
        name={"searchByRegion"}
        value={region}
        placeholder={"Filter by Region"}
        handleChangeRegion={handleChangeRegion}
      />
    </FilterByRegionStyled>
  );
}

export default FilterByRegion;
