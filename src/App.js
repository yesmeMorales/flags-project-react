import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducer";

import "./App.css";
import CountryList from "./components/country-list";
import ActionList from "./components/actionList";
import Header from "./components/header";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryListByRegion: [],
  filterByName: "",
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ActionList />
      <CountryList />
    </Provider>
  );
}

export default App;
