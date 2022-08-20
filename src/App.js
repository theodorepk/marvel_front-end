import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faMagnifyingGlass);

function App() {
  const [search, setSearch] = useState(``);

  return (
    <>
      <Router>
        <Header setSearch={setSearch} title={search} />
        <Routes>
          <Route path="/" element={<Characters name={search} />} />
          <Route path="/comics" element={<Comics title={search} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
