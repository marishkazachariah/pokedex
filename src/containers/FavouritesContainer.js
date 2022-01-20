import { Row } from "antd";
import PokemonCard from "../components/PokemonCard";

export default function Favourites() {
  const getData = localStorage.getItem("pokedex-favourites");
  const parsePokemon = JSON.parse(getData);
  const favePokemon = parsePokemon.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );

  return (
    <div className="FaveContainer">
      <h1>Favourite Pokemon</h1>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {favePokemon &&
          favePokemon.map((myData) => (
            <PokemonCard key={myData.id} pokemon={myData} />
          ))}
      </Row>
    </div>
  );
}
