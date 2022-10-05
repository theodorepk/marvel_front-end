import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MiniComics = ({ addFavComics, comics, isFavorites }) => {
  const [available, setAvailable] = useState(true);

  return (
    available && ( //rend only if the comcis cover image is available
      <div
        className="comics"
        onClick={() => {
          //anonymous function, addFavComics need parameters and will called if anonymous function not here (it will crash)
          addFavComics(comics, "comics");
        }}
      >
        {!available && console.log(`image non disponible`)}
        <FontAwesomeIcon
          icon="fa-solid fa-star"
          className={
            // favorites.comics.indexOf(comics._id) > -1
            isFavorites("comics", comics) ? "star favorites" : "star"
          }
          size="2xl"
        />

        <div>
          <div>
            <p>{comics.description}</p>
          </div>
          <img
            className="comicsCover"
            src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
            alt="couverture du comics"
            onError={() => setAvailable(false)} //if the the url is wrong or does'nt exist miniComics will not be rendrer
          />
          <h2 className="comicsTitle">{comics.title}</h2>
        </div>
      </div>
    )
  );
};

export default MiniComics;
