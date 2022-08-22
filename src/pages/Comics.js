import { useState, useEffect } from "react";
import axios from "axios";

const Comics = ({ title }) => {
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
    <div className="comicsPage">
      <div className="allComics">
        {data.results.map((element, index) => {
          return (
            <div key={index} className="comics">
              <img
                className="comicsCover"
                src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                alt="couverture du comics"
              />
              <h2 className="comicsTitle">{element.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        {page !== 1 && (
          <button
            onClick={() => {
              setIsLoading(true);
              setPage((prevState) => prevState - 1); //more secure then setState(state +1)
              setSkip((prevState) => prevState - 50);
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
            setSkip((prevState) => prevState + 50);
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Comics;
