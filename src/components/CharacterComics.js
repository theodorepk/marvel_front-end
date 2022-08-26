// import { useState } from "react";

const CharacterComics = ({
  setTitle,
  setDescription,
  setHighLight,
  highLight,
  index,
  setComicsId,
  comicsInfo,
  setComicsInfo,
  element,
}) => {
  return (
    <div
      onClick={() => {
        setTitle(element.title); //onClick to collecte the comics Data
        setDescription(element.description);
        // setComicsId(element._id);
        setComicsInfo(element);
        console.log(comicsInfo);
        const newTab = [...highLight];
        //when the comics cover is clicked, it's position in highlight array is set to true (and the other position are set to false)
        for (let i = 0; i < newTab.length; i++) {
          if (i === index) {
            newTab[i] = true;
          } else {
            newTab[i] = false;
          }
        }
        setHighLight(newTab);
      }}
      className={highLight[index] ? `highlight` : ``} //in highlight array, if the comics' position is "true" , it gain the "highlight" class which change the size of the comics' cover
    >
      <img
        src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
        alt=""
        className="comicsCover"
      />
    </div>
  );
};

export default CharacterComics;
