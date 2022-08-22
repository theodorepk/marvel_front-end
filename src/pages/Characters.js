import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = ({ name }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true); //isLoading state need to be delcare directly here (not in App.js)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/characters?skip=${skip}&name=${name}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [skip, name]);

  return isLoading ? (
    <div className="container">
      <div className="lds-dual-ring"></div>
      {/*Loader from https://loading.io/css/*/}
    </div>
  ) : (
    <div className="charactersPage">
      <div className="allCharacters">
        {data.results.map((element, index) => {
          return (
            <Link
              key={index}
              className="character"
              to={`/character/${element._id}`} //go to character by id
            >
              <img
                className="characterPicture"
                src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                alt="couverture du comics"
              />
              <h2 className="characterName">{element.name}</h2>
            </Link>
          );
        })}

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
    </div>
  );
};

export default Characters;
