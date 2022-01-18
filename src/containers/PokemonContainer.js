import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON } from "../graphql/get-pokemons";
import PokemonCard from "../components/PokemonCard";
import { Row, Divider, Button } from "antd";
import Searchbar from "../components/Searchbar";
import { useState } from "react";

export default function PokemonsContainer() {
  const { data: { allPokemon = [] } = {} } = useQuery(GET_POKEMON);
  const [pokemon, setPokemon] = useState(allPokemon);
  const [searchName, setSearchName] = useState('');
  const [type, setType] = useState("");

  function sortByName() {
    allPokemon.sort((a, b) => a.name.localeCompare(b.name));
    setPokemon([...pokemon]);
  }

  function sortByType() {}

  const getPokemonTypes = allPokemon.map((pokemon) => {
    let pokeTypes = pokemon.types;
    pokeTypes.map((type) => {
      pokeTypes = type.name;
      return [...new Set(pokeTypes)];
    });
    // pokeTypes.sort((a, b) => a.name.localeCompare(b.name));
    return pokeTypes;
  });

  const removeDuplicateTypes = [...new Set(getPokemonTypes.sort())];

  const handleTypeChange = (event) => {
    event.preventDefault();
    setType(event.target.value);
  };

  const handleNameChange = event => {
    event.preventDefault();
    setSearchName(event.target.value)
  }


  const filteredPokemon = allPokemon.filter(pokemon => {
    const types = pokemon.types.map((type) => { return type.name }) 
    return (!searchName ? true: `${pokemon.name}`.toLowerCase().includes(searchName) )
      && ((!type || type === "All") ? true : types.includes(type))
  })

  return (
    <div className="list-pokemon" style={{ justifyContent: "center" }}>
      <Divider>
        <h1>Pokédex: List of Pokémon</h1>
      </Divider>
      <Divider>
        <Button onClick={sortByName}>Sort by Name</Button>
        <Button onClick={sortByType}>Sort by Type</Button>
        <label>Type</label>
        <select
          name="type"
          id="type"
          checked={type}
          onChange={handleTypeChange}
        >
          <option value="All">All</option>
          {removeDuplicateTypes.map((type) => {
            return <option value={type}>{type}</option>;
          })}
        </select>
      </Divider>
      <Searchbar />
      <Row style={{ width: "100%", justifyContent: "center" }}>
          {filteredPokemon &&
          filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </Row>
    </div>
  );
}
