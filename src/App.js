import "./App.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

function App() {
  const [title, setTitle] = useState(``);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <Header setTitle={setTitle} />
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              title={title}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              title={title}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
