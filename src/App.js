import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/comics?skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [skip]);

  return isLoading ? (
    <span>Nous feuilletons les oeuvres</span>
  ) : (
    <div className="App">
      <Header />
      <div className="allComics">
        {data.results.map((element, index) => {
          return (
            <div key={index} className="comics">
              <span className="comicsTitle">{element.title}</span>;
              <img
                className="comicsCover"
                src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                alt="couverture du comics"
              />
            </div>
          );
        })}
      </div>
      <div className="buttons">
        {page !== 1 && (
          <button
            onClick={() => {
              setIsLoading(true);
              setPage(page - 1);
              setSkip(skip - 50);
            }}
          >
            Précédent
          </button>
        )}
        <span className="page">{page}</span>
        <button
          onClick={() => {
            setIsLoading(true);
            setPage(page + 1);
            setSkip(skip + 50);
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default App;
