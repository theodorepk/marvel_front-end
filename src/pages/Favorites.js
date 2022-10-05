import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Favorites = ({ favorites }) => {
  const [visible, setHidden] = useState([true, true]);

  return (
    <div className="container">
      <section>
        <div
          className="title"
          onClick={() => {
            const newTab = [...visible];
            newTab[0] = !newTab[0];
            setHidden(newTab);
          }}
        >
          {visible[0] ? (
            <FontAwesomeIcon icon="fa-solid fa-angle-down" className="angle" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-angle-right" className="angle" />
          )}
          <h1>Personnages</h1>
        </div>
        <div className={`favoritesCharacter ${!visible[0] && `notVisible`}`}>
          {favorites.characters.map((character) => {
            return (
              <Link
                key={character._id}
                className="characterFav"
                to={`/character/${character._id}`}
              >
                <div>
                  <div>
                    <p>{character.description}</p>
                  </div>
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt="avatar du personnage"
                  />
                  <h2>{character.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section>
        <div
          className="title"
          onClick={() => {
            const newTab = [...visible];
            newTab[1] = !newTab[1];
            setHidden(newTab);
          }}
        >
          {visible[1] ? (
            <FontAwesomeIcon icon="fa-solid fa-angle-down" className="angle" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-angle-right" className="angle" />
          )}
          <h1>Comics</h1>
        </div>

        <div className={`favoritesComics ${!visible[1] && `notVisible`}`}>
          {favorites.comics.map((comics) => {
            return (
              <div key={comics._id} className="comicsFav">
                <div>
                  <div>
                    <p>{comics.description}</p>
                  </div>
                  <img
                    src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                    alt="pochette du comics"
                  />
                  <h2>{comics.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
