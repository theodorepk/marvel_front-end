import { useState } from "react";

const Home = ({ data, isLoading, setIsLoading, setSkip, skip }) => {
  const [page, setPage] = useState(1);

  return isLoading ? (
    <span>Nous feuilletons les oeuvres</span>
  ) : (
    <div className="App">
      <div className="allComics">
        {data.results.map((element, index) => {
          return (
            <div key={index} className="comics">
              <span className="comicsTitle">{element.title}</span>;
              <img
                className="comicsCover"
                src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                alt="couverture du comics"
              />
            </div>
          );
        })}
      </div>
      <div className="buttons">
        {page !== 1 && (
          <button
            onClick={() => {
              setIsLoading(true);
              setPage(page - 1);
              setSkip(skip - 50);
            }}
          >
            Précédent
          </button>
        )}
        <span className="page">{page}</span>
        <button
          onClick={() => {
            setIsLoading(true);
            setPage(page + 1);
            setSkip(skip + 50);
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Home;
