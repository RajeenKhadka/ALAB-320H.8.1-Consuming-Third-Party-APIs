import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

function Ships() {
  const [starship, setStarship] = useState(null);
  const params = useParams();

  const shipName = params.name;
  console.log(shipName);

  let url = `https://swapi.py4e.com/api/starships/`;

  const getOneShip = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      data.results.forEach((ship) => {
        if (shipName === ship.name) {
          setStarship(ship);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(starship);

  useEffect(() => {
    getOneShip(url);
  }, [url]);

  const excludedKeys = ["pilots", "films", "url"]; // Keys you want to exclude

  const loaded = () => {
    return (
      <div>
        <h2>Name: {shipName}</h2>
        <ul>
          {/* <li>Model: {starship.model}</li>
          <li>Manufacturer: {starship.manufacturer}</li>
          <li>Cargo Capacity: {starship.cargo_capacity}</li>
          <li>Passengers: {starship.passengers}</li>
          <li>Max Atmosphering Speed: {starship.max_atmosphering_speed}</li>
          <li>Cost In Credits: {starship.cost_in_credits}</li> */}
          {Object.entries(starship)
            .filter(([key]) => !excludedKeys.includes(key)) //Exclude specific keys
            .map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <h1>Learn more about: {shipName} </h1>
      {starship ? loaded() : loading()}
    </div>
  );
}

export default Ships;
