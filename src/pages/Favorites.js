import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Favorites = ({ favorites }) => {
  const [visible, setHidden] = useState([true, true]);
  console.log(visible[1]);

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
          <h1>Personnages</h1>
          <FontAwesomeIcon
            icon="fa-solid fa-angle-down"
            className="angleDown"
          />
        </div>
        <div className={`favoritesCharacter ${!visible[0] && `notVisible`}`}>
          {favorites.characters.map((element, index) => {
            return (
              <Link
                key={index}
                className="characterFav"
                to={`/character/${element._id}`}
              >
                <div>
                  <img
                    src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    alt=""
                  />
                  <h2>{element.name}</h2>
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
          <h1>Comics</h1>
          <FontAwesomeIcon
            icon="fa-solid fa-angle-down"
            className="angleDown"
          />
        </div>

        <div className={`favoritesComics ${!visible[1] && `notVisible`}`}>
          {favorites.comics.map((element, index) => {
            return (
              <div key={index} className="comicsFav">
                <div>
                  <img
                    src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    alt=""
                  />
                  <h2>{element.title}</h2>
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
