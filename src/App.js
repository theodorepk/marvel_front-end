import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faMagnifyingGlass,
  faMask,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./components/Navigation";
library.add(faBars, faMagnifyingGlass, faMask, faBook);

function App() {
  const [search, setSearch] = useState(``);
  const [visible, setVisible] = useState(false); //false --> the search bar isn't visible

  return (
    <>
      <Router>
        <Header setSearch={setSearch} title={search} visible={visible} />
        <Routes>
          <Route path="/" element={<Characters name={search} />} />
          <Route path="/comics" element={<Comics title={search} />} />
        </Routes>
        <Navigation setVisible={setVisible} />
      </Router>
    </>
  );
}

export default App;
