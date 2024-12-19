import { Link } from "react-router";

function ListDisplay({ shipList }) {
  return (
    <div className="ship-items">
      {/* <p>
        If you click on the name, you will see the json that describes that
        Starship
      </p> */}
      <ul>
        {shipList.results &&
          shipList.results.map((starship) => {
            return (
              <li
                style={{ backgroundColor: "hsl(350, 0%, 20%", margin: "10px" }}
              >
                <Link
                  to={`/starship/${starship.name}`}
                  target="_blank"
                  style={{ padding: "5px" }}
                >
                  {starship.name}
                </Link>
              </li>
            );
          })}
      </ul>
      {/* {shipList.previous ? (
        <button onClick={() => getStarships(shipList.previous)}>back</button>
      ) : (
        <></>
      )}{" "}
      {shipList.next ? (
        <button onClick={() => getStarships(shipList.next)}>next</button>
      ) : (
        <></>
      )} */}
    </div>
  );
}

export default ListDisplay;
