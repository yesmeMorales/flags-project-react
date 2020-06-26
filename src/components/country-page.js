import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Wrapper from "./wrapper";
import CountrySelected from "./country-selected";

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    padding: 0.7em 2.2em;
    border-radius: 5px;
    border: none;
    color: var(--black);
    cursor: pointer;
    margin-top: 1em;
    i {
      margin-right: 10px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`;

function CountryPage({ match, history }) {
  let DBcountry = useSelector((state) =>
    state.countryList.find(
      (item) => item.alpha2Code === match.params.id
      //match.params.id.replace("-", " ")
    )
  );

  const [country, setCountry] = useState(DBcountry);
  console.log(country);
  useEffect(() => {
    if (!country) {
      fetch(
        `https://restcountries.eu/rest/v2/alpha/${match.params.id.toLowerCase()}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCountry(data);
        });
    }
  }, [country, match.params.id]);
  console.log(country);
  function handleClick() {
    history.goBack();
  }
  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left"></i>Back
        </button>
        {/* {match.params.id.replace("-", " ")} */}
        {/* {match.params.id.replace("-", " ")} */}
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage;
