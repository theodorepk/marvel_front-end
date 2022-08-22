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
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./components/Navigation";
library.add(faBars, faMagnifyingGlass, faMask, faBook, faArrowRightToBracket);

function App() {
  const [search, setSearch] = useState(``);
  const [visible, setVisible] = useState(false); //false --> the search bar isn't visible
  // const [characterId, setCharacterId] = useState(``);

  return (
    <>
      <Router>
        <Header setSearch={setSearch} title={search} visible={visible} />
        <Routes>
          <Route path="/" element={<Characters name={search} />} />
          <Route path="/comics" element={<Comics title={search} />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
        <Navigation setVisible={setVisible} />
      </Router>
    </>
  );
}

export default App;
