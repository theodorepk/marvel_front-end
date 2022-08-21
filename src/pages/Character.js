import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterComics from "../components/CharacterComics";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState(``); //Dynamic title when user choose a comics
  const [description, setDescription] = useState(``); //Dynamic description when user choose a comics

  const [highLight, setHighLight] = useState();

  //   const highlighting = () => {
  //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);

        const newTab = [];

        const test = (par) => {
          for (let i = 0; i < par; i++) {
            newTab.push(false);
          }
        };

        test(response.data.comics.length);
        console.log(newTab);
        setHighLight(newTab);
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
          return (
            <CharacterComics
              key={index}
              key2={index}
              comicsInfo={element}
              setTitle={setTitle} //send to the component, states will changes with an Onclick on the component
              setDescription={setDescription} // onClick cannot be setup here
              className={highLight[index] && `test`}
              setHighLight={setHighLight}
              highLight={highLight}
            />
          );
        })}
        {/* {data.comics.map((element) => {
          return highlighting;
        })} */}
      </div>
      <div className="comicsHiglight">
        <div>
          <h3>{title ? title : data.comics[0].title}</h3>{" "}
          {/*the  default informations are from the first comics books of the database*/}
          <p>{description ? description : data.comics[0].description}</p>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Character;
