import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import slugify from "slugify";

const CountryStyled = styled.div`
  /* width: 264px; */
  cursor: pointer;
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
    border-radius: 5px 5px 0 0;
    /* para que la imagen se junte con el texto y no se forme una separacion al pasar sobre la imagen */
    vertical-align: top;
  }
  &:hover .details {
    border: 1px solid var(--black);
    border-radius: 0 0 5px 5px;
    border-top: none;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1.5em;
    height: 195px;
    /*creamos un borde transparente que este en todo momento para evitar que se mueva al
    ponerselo cuando hacemos hover*/
    border: 1px solid transparent;
    border-top: none;
    transition: 0.3s border;
    background: var(--white);
  }
  .extra-details {
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
    height: 48px;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country({ flag, name, population, region, capital, alpha2Code }) {
  const history = useHistory();
  function handleClick() {
    history.push(`/country/${slugify(alpha2Code)}`);
  }

  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <div className="extra-details">
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
      </div>
    </CountryStyled>
  );
}

export default Country;
