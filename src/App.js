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
  // const [characterId, setCharacterId] = useState(``);
  const [favorites, setFavorites] = useState({ comics: [], characters: [] });

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
          <Route
            path="/character/:id"
            element={
              <Character favorites={favorites} addFavComics={addFavComics} />
            }
          />
        </Routes>
        <Navigation setVisible={setVisible} />
      </Router>
    </>
  );
}

export default App;
