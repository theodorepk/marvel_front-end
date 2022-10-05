import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = ({ name, favorites, addFavComics, isFavorites }) => {
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
    <div className="container loader">
      <div className="lds-dual-ring"></div>
      {/*Loader from https://loading.io/css/*/}
    </div>
  ) : (
    <div className="charactersPage container">
      <div className="allCharacters">
        {data.results.map((character) => {
          return (
            <div key={character._id} className="avatar">
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                className={
                  // favorites.characters.indexOf(character._id) > -1
                  // false
                  isFavorites("characters", character)
                    ? "star favorites"
                    : "star"
                }
                size="2xl"
                onClick={() => {
                  addFavComics(character, "characters");
                }}
              />
              <Link
                className="character"
                to={`/character/${character._id}`} //go to character by id
              >
                <div>
                  <p>{character.description}</p>
                </div>
                <img
                  className="characterPicture"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt="couverture du comics"
                />
                <h2 className="characterName">{character.name}</h2>
              </Link>
            </div>
          );
        })}

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
    </div>
  );
};

export default Characters;
