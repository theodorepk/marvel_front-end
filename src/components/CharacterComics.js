const CharacterComics = ({ comicsInfo }) => {
  console.log(comicsInfo);

  return (
    <div>
      <div>
        <h3>{comicsInfo.title}</h3>
        <span></span>
      </div>
      <img
        src={`${comicsInfo.thumbnail.path}.${comicsInfo.thumbnail.extension}`}
        alt=""
        className="comicsCover"
      />
    </div>
  );
};

export default CharacterComics;
