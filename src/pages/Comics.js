import { useState, useEffect } from "react";
import axios from "axios";

const Comics = ({ title, isLoading, setIsLoading }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/comics?skip=${skip}&title=${title}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [skip, title]);

  return isLoading ? (
    <span>Nous feuilletons les oeuvres</span>
  ) : (
    <div className="comicsPage">
      <div className="allComics">
        {data.results.map((element, index) => {
          return (
            <div key={index} className="comics">
              <span className="comicsTitle">{element.title}</span>
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
              setPage((prevState) => prevState - 1);
              setSkip((prevState) => prevState - 50);
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
            setSkip((prevState) => prevState + 50);
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Comics;
