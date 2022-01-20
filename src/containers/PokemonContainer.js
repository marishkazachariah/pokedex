import { useState } from "react";
import { Row, Checkbox, Divider } from "antd";
import PokemonCard from "../components/PokemonCard";
import Searchbar from "../components/Searchbar";
import { byName, byType } from "../utils/sort";

export default function PokemonContainer( {allPokemon} ) {
  const [searchName, setSearchName] = useState("");
  const [type, setType] = useState("");
  const [sortByName, setSortByName] = useState(false);
  const [sortByType, setSortByType] = useState(false);

  const handleSortByName = () => {
    setSortByName(!sortByName);
  };

  const handleSortByType = () => {
    setSortByType(!sortByType);
  };

  const getPokemonTypes = allPokemon
    .map((pokemon) => {
      return pokemon.types.map((type) => {
        return type.name;
      });
    })
    .flat();

  const removeDuplicateTypes = [...new Set(getPokemonTypes)].sort();

  const handleTypeChange = (event) => {
    event.preventDefault();
    setType(event.target.value);
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setSearchName(event.target.value);
  };

  const filteredPokemon = allPokemon.filter((pokemon) => {
    const types = pokemon.types.map((type) => {
      return type.name;
    });
    return (
      (!searchName
        ? true
        : `${pokemon.name}`.toLowerCase().includes(searchName.toLowerCase())) &&
      (!type || type === "All" ? true : types.includes(type))
    );
  });

  const sortedPokemon = sortByName
    ? byName(filteredPokemon)
    : sortByType
    ? byType(filteredPokemon)
    : filteredPokemon;

  return (
    <div className="PokemonContainer" style={{ justifyContent: "center" }}>
      <Divider>
        <h1>Pokédex: List of Pokémon</h1>
      </Divider>
      <Divider>
        <div>
          <Checkbox
            span="10"
            value="sortByName"
            checked={sortByName}
            onChange={handleSortByName}
          >
            <p>Sort By Name</p>
          </Checkbox>
          <Checkbox
            value="sortByType"
            checked={sortByType}
            onChange={handleSortByType}
          >
            <p>Sort By Type</p>
          </Checkbox>
        </div>
        </Divider>
        <div className="FilterFields">
        <label>Filter By Type</label>
        <select
          name="type"
          id="type"
          checked={type}
          onChange={handleTypeChange}
        >
          <option value="All">All</option>
          {removeDuplicateTypes.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      <Searchbar handleSearch={handleNameChange} />
      </div>
      <div className="ListOfPokemonCards">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {sortedPokemon &&
          sortedPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </Row>
      </div>
    </div>
  );
}
