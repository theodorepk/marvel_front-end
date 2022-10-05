import { useState, useEffect } from "react";
import axios from "axios";
import MiniComics from "../components/MiniComics";

const Comics = ({ title, favorites, addFavComics, isFavorites }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true); //isLoading state need to be delcare directly here (not in App.js)

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

  return isLoading ? (
    <div className="container loader">
      <div className="lds-dual-ring"></div>{" "}
      {/*Loader from https://loading.io/css/*/}
    </div>
  ) : (
    <div className="comicsPage container">
      <div className="allComics">
        {data.results.map((comics) => {
          return (
            <MiniComics
              key={comics._id}
              addFavComics={addFavComics}
              comics={comics}
              isFavorites={isFavorites}
            />
          );
        })}
      </div>
      <div className="buttons">
        {page !== 1 && (
          <button
            onClick={() => {
              setIsLoading(true);
              setPage((prevState) => prevState - 1); //more secure then setState(state +1)
              setSkip((prevState) => prevState - 100);
            }}
          >
            Précédent
          </button>
        )}
        <span className="page">{page}</span>
        <button
          onClick={() => {
            setIsLoading(true);
            setPage((prevState) => prevState + 1);
            setSkip((prevState) => prevState + 100);
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Comics;
