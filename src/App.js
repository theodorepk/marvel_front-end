import "./App.scss";

import Cookies from "js-cookie";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faMagnifyingGlass,
  faMask,
  faBook,
  faUser,
  faAngleRight,
  faStar,
  // faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
// import { farStar } from "@fortawesome/free-regular-svg-icons";
import Navigation from "./components/Navigation";
library.add(
  faBars,
  faMagnifyingGlass,
  faMask,
  faBook,
  faUser,
  faAngleRight,
  faStar
  //  faArrowRightToBracket
);

function App() {
  const [search, setSearch] = useState(``);
  const [visible, setVisible] = useState(false); //false --> the search bar isn't visible
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  const CookieImport = () => {
    if (Cookies.get("favorites")) {
      //if the favorites cookie exist
      return JSON.parse(Cookies.get("favorites")); //return the conversion string -> object
    } else {
      //else
      return { comics: [], characters: [] }; //return an object with two array
    }
  };

  const [favorites, setFavorites] = useState(CookieImport());

  const addFavComics = (data, cat) => {
    //add or remove a comics from favorites state
    const newTab = { ...favorites };
    const index = newTab[cat].indexOf(data);
    if (index > -1) {
      //comics exist in favorites
      newTab[cat].splice(index, 1); //remove it
    } else {
      //doesn't exist
      newTab[cat].push(data); //add ot
    }
    setFavorites(newTab); //update state
    Cookies.set("favorites", JSON.stringify(favorites), {
      //Cookie can't be store as object, we need to convert it in string
      expires: 2100,
    });
  };

  return (
    <>
      <Router>
        <Header
          setSearch={setSearch}
          title={search}
          visible={visible}
          setVisible={setVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Characters
                name={search}
                favorites={favorites}
                addFavComics={addFavComics}
              />
            }
          />
          <Route
            path="/comics"
            element={
              <Comics
                title={search}
                favorites={favorites}
                setFavorites={setFavorites}
                addFavComics={addFavComics}
              />
            }
          />
          <Route
            path="/character/:id"
            element={
              <Character favorites={favorites} addFavComics={addFavComics} />
            }
          />
        </Routes>
        <Navigation
          setVisible={setVisible}
          setMenuIsVisible={setMenuIsVisible}
          menuIsVisible={menuIsVisible}
        />
      </Router>
    </>
  );
}

export default App;
