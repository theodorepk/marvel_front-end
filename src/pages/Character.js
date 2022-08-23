import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterComics from "../components/CharacterComics";

//
const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState(``); //Dynamic title when user choose a comics
  const [description, setDescription] = useState(``); //Dynamic description when user choose a comics

  const [highLight, setHighLight] = useState(); //Use to define what comics is highlighted

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tpk-marvel-backend.herokuapp.com/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);

        const newTab = []; //will replace highlight
        const highLighting = (par) => {
          for (let i = 0; i < par; i++) {
            if (i === 0) {
              //the first comics will be highlight
              newTab.push(true);
            } else {
              newTab.push(false);
            }
          }
        };
        highLighting(response.data.comics.length);
        setHighLight(newTab); //Array with the first element "true", all the other are "false"
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="container loader">
      <div className="lds-dual-ring"></div>
      {/*Loader from https://loading.io/css/*/}
    </div>
  ) : (
    <div className="characterPage container">
      <div className="characterPresentation">
        <h2>{data.name}</h2>
        <div>
          <img
            className="profilePicture"
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt="super-héros"
          />
          {data.description && (
            <div className="characterInfo">
              {data.description && <p>{data.description}</p>}
            </div>
          )}
        </div>
      </div>
      {data.comics.length ? (
        <div className="comicsPart">
          <h2>Comics</h2>
          <div className="characterComics">
            {data.comics.map((element, index) => {
              return (
                <CharacterComics
                  key={index}
                  index={index}
                  comicsInfo={element}
                  setTitle={setTitle} //send to the component, states will changes with an Onclick on the component
                  setDescription={setDescription} // onClick cannot be setup here
                  setHighLight={setHighLight} //hightLight will change with onClick event
                  highLight={highLight}
                />
              );
            })}
          </div>
          <div className="comicsHighlight">
            <div>
              {/*the  default informations are from the first comics books of the database*/}
              <h3>{title ? title : data.comics[0].title}</h3>
              <p>{description ? description : data.comics[0].description}</p>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Character;
