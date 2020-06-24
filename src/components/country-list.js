import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import Country from "./country";

const CountryListStyled = styled.div`
  display: grid;
  row-gap: 2.3em;
  /* grid-auto-flow: column;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px); */
  background: var(--background);

  justify-content: center;
  padding: 2em 1em;
`;

function CountryList() {
  const dispatch = useDispatch();

  //consumimos countrylist
  // const countryList = useSelector((state) => state.countryList);
  // console.log("El estado total de mi app es", countryList);
  const countryListByName = useSelector((state) => state.countryListByName);
  const countryListByRegion = useSelector((state) => state.countryListByRegion);
  console.log(countryListByRegion);

  const countryList = useSelector((state) => {
    if (state.filterByName !== "" && countryListByName.length > 0) {
      console.log("lista por nombre");
      return countryListByName;
    }
    if (state.filterByRegion !== "" && countryListByRegion.length > 0) {
      console.log("lista por region");
      return countryListByRegion;
    }
    if (state.filterByName === "" && state.filterByRegion === "") {
      console.log("lista general");
      return state.countryList;
    }
  });

  // const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        //actualizamos un estado global con redux
        //realizamos una accion que llama a un reducer
        //con useDispatch despachamos una accion
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        console.log(list.length);
      })
      .catch(() => {
        console.log("hubo un error");
      });
  }, []);

  return (
    <CountryListStyled>
      {/* <div> */}

      {/* </div> */}
      {countryList.map(({ name, flag, population, region, capital }) => {
        return (
          <Country
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
