// import { useState } from "react";

const CharacterComics = ({
  comicsInfo,
  setTitle,
  setDescription,
  setHighLight,
  highLight,
  index,
  setComicsId,
  test,
  setTest,
}) => {
  return (
    <div
      onClick={() => {
        setTitle(comicsInfo.title); //onClick to collecte the comics Data
        setDescription(comicsInfo.description);
        setComicsId(comicsInfo._id);
        setTest(comicsInfo);
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
        src={`${comicsInfo.thumbnail.path}.${comicsInfo.thumbnail.extension}`}
        alt=""
        className="comicsCover"
      />
    </div>
  );
};

export default CharacterComics;
