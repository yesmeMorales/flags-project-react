import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  /* width: 264px; */
  text-align: left;
  border-radius: 5px;
  margin: 1em;
  overflow: hidden;
  /* x, y, blur, spread, */
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.09);
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: 0.3s border;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country({ flag, name, population, region, capital }) {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong> {population}
        </p>
        <p>
          <strong>Region: </strong> {region}
        </p>
        <p>
          <strong>Capital: </strong> {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
