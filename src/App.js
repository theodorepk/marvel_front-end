import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/comics`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  // const test = data.results;
  // console.log(test);
  // test.map((element) => {

  //   return element.title;
  // });

  return isLoading ? (
    <span>Nous feuilletons les oeuvres</span>
  ) : (
    <div className="App">
      hey
      {data.results.map((element, index) => {
        return <span key={index}>{element.title}</span>;
      })}
    </div>
  );
}

export default App;
