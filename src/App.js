import "./App.scss";

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
  // faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
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
  // const [characterId, setCharacterId] = useState(``);
  const [favorites, setFavorites] = useState({ comics: [] });

  const addFavComics = (par) => {
    const newTab = { ...favorites };
    const index = newTab.comics.indexOf(par);

    if (index > -1) {
      newTab.comics.splice(index, 1);
    } else {
      newTab.comics.push(par);
    }
    setFavorites(newTab);
    console.log(`favorites: ${favorites}`);
  };

  return (
    <>
      <Router>
        <Header
          setSearch={setSearch}
          title={search}
          visible={visible}
          setVisible={setVisible}
        />
        <Routes>
          <Route path="/" element={<Characters name={search} />} />
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
          <Route path="/character/:id" element={<Character />} />
        </Routes>
        <Navigation setVisible={setVisible} />
      </Router>
    </>
  );
}

export default App;
