import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [title, setTitle] = useState(``);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/comics?skip=${skip}&title=${title}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [skip, title]);

  return (
    <Router>
      <Header title={title} setTitle={setTitle} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setSkip={setSkip}
              skip={skip}
            />
          }
        />
        {/* <Route path="/"/> */}
      </Routes>
    </Router>
  );
}

export default App;
