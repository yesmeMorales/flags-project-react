export default function reducer(state, action) {
  //recibimos la accion con los datos actualizados
  console.log(action);
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      console.log("actualizar lista");
      //mutamos el estado de la app
      return { ...state, countryList: action.payload };
    }
    case "GET_COUNTRYLIST_BY_NAME": {
      console.log("GET_COUNTRYLIST_BY_NAME");
      // if ("" === action.payload) {
      // return { ...state };
      // }

      let list;
      if (state.filterByRegion !== "") {
        console.log(state.countryListByRegion);
        console.log("Lista region");
        list = state.countryListByRegion;
      } else {
        console.log("Lista general");
        list = state.countryList;
      }
      const searchCountryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      // console.log(state.countryListByName);
      return {
        ...state,
        countryListByName: searchCountryListByName,
        filterByName: action.payload,
      };
    }

    case "GET_COUNTRYLIST_BY_REGION": {
      console.log("GET_COUNTRYLIST_BY_REGION");
      const regionSelected = action.payload;

      if (regionSelected === "") {
        return {
          ...state,
          countryListByRegion: [],
          filterByRegion: regionSelected,
        };
      }

      const searchCountryListByRegion = state.countryList.filter((country) =>
        country.region.toLowerCase().includes(regionSelected.toLowerCase())
      );
      console.log(searchCountryListByRegion);
      return {
        ...state,
        countryListByRegion: searchCountryListByRegion,
        filterByRegion: regionSelected,
      };
    }
    case "SET_COUNTRY_BY_NAME": {
      console.log(state.filterByName);
      console.log(state.countryListByRegion);
      return {
        ...state,
        filterByName: action.payload,
        countryListByRegion: state.countryListByRegion,
      };
    }

    default: {
      return state;
    }
  }
}
