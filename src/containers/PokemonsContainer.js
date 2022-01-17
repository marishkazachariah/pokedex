import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../graphql/get-pokemons';

export default function PokemonsContainer() {
    const { data: { allPokemon = [] } = {} } = useQuery(GET_POKEMON)
    return (
        <div className="list-pokemon">
            {allPokemon && allPokemon.map(pokemon => JSON.stringify(pokemon))}
        </div>
    )
}
