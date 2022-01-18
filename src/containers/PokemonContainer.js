import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../graphql/get-pokemons';
import PokemonCard from '../components/PokemonCard';
import { Row, Divider, Button } from "antd";
import Searchbar from '../components/Searchbar';
import { useState } from "react";

export default function PokemonsContainer() {
    const { data: { allPokemon = [] } = {} } = useQuery(GET_POKEMON)
    const [pokemon, setPokemon] = useState(allPokemon);

    function sortByName() {
      allPokemon.sort((a, b) => a.name.localeCompare(b.name));
      setPokemon([...pokemon]);
    }

    
    function sortByType() {
        // do a drop down menu instead? 
    }

    return (
        <div className="list-pokemon" style={{ justifyContent: "center" }}>   
            <Divider><h1>Pokédex: List of Pokémon</h1></Divider>
            <Divider>
                <Button onClick={sortByName}>Sort by Name</Button>
                <Button onClick={sortByType}>Sort by Type</Button>
            </Divider>
            <Searchbar />
            <Row style={{ width: "100%", justifyContent: "center" }}>
                {allPokemon && allPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
            </Row>
        </div>
    )
}
