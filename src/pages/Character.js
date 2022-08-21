import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterComics from "../components/CharacterComics";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>test</span>
  ) : (
    <div className="characterPage">
      <div className="characterPresentation">
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt="super-héros"
        />
        <div className="characterInfo">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="characterComics">
        {data.comics.map((element, index) => {
          return <CharacterComics key={index} comicsInfo={element} />;
        })}
      </div>
    </div>
  );
};

export default Character;
