import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

function App() {
  const [title, setTitle] = useState(``);

  return (
    <>
      <Router>
        <Header setTitle={setTitle} />
        <Routes>
          <Route path="/" element={<Characters title={title} />} />
          <Route path="/comics" element={<Comics title={title} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
