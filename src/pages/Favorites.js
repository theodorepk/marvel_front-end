// import { useState } from "react";

const Favorites = ({ favorites }) => {
  //   console.log(favorites);

  return (
    <div className="container">
      <div>
        <h2>Personnages</h2>
        <div>
          {favorites.characters.map((element, index) => {
            return (
              <div key={index}>
                {console.log(element.name)}
                <h3>{element.name}</h3>
                <img
                  src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2> Comics</h2>
      </div>
    </div>
  );
};

export default Favorites;
