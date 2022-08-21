// import { useState } from "react";

const CharacterComics = ({
  comicsInfo,
  setTitle,
  setDescription,
  setHighLight,
  highLight,
  key2,
}) => {
  //   const [highlight, setHighLight] = useState(``);

  //   const newTab = [...highLight];
  //   newTab.push(false);
  //   setHighLight(newTab);

  return (
    <div
      onClick={() => {
        setTitle(comicsInfo.title); //onClick to collecte the comics Data
        setDescription(comicsInfo.description);
        const newTab = [...highLight];
        for (let i = 0; i < newTab.length; i++) {
          if (i === key2) {
            newTab[i] = true;
          } else {
            newTab[i] = false;
          }
        }

        // newTab[key2] = true;
        console.log(newTab);
        setHighLight(newTab);
      }}
      className={highLight[key2] ? `test` : ``}
      onBlur
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
