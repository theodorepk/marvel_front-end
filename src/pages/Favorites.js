// import axios from "axios";
// import { useEffect, useState } from "react";

const Favorites = ({ favorites }) => {
  console.log(favorites);
  //   const [data, setData] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {

  //         favorites.characters.map((element)=> {

  //         })
  //       try {
  //         const response1 = await favorites.characters.map((element) => {
  //           axios.get(
  //             `https://tpk-marvel-backend.herokuapp.com/character/${favorites.characters}`
  //           );
  //         });

  //         setData(response1.data);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.log(error.response);
  //       }
  //     };
  //     fetchData();
  //   }, [favorites]);

  return (
    //   isLoading ? (
    //     <div className="container loader">
    //       <div className="lds-dual-ring"></div>{" "}
    //       {/*Loader from https://loading.io/css/*/}
    //     </div>
    //   ) : (
    <div className="container">
      {
        // console.log(data)
      }
    </div>
  );
  //   );
};

export default Favorites;
