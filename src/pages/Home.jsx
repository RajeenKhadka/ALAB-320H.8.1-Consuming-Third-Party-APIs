import { useState, useEffect } from "react";
import ListDisplay from "../components/ListDisplay";

function Home() {
  const [starships, setStarships] = useState({});
  const [starship, setStarship] = useState({});

  let url = "https://swapi.py4e.com/api/starships/";

  // step 1 - get the list of Pokemon from the api
  const getStarships = async (url) => {
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setStarships(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getStarships(url);
  }, []);

  return (
    <>
      <ListDisplay shipList={starships} getStarships={getStarships} />
    </>
  );
}

export default Home;
