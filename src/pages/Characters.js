import { useState, useEffect } from "react";
import axios from "axios";

const Characters = ({ title, isLoading, setIsLoading }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/characters?skip=${skip}&name=${title}`
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
    <div className="charactersPage">
      <div className="allCharacters">
        {data.results.map((element, index) => {
          return (
            <div key={index} className="character">
              <span className="characterName">{element.name}</span>
              <img
                className="characterPicture"
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

export default Characters;
