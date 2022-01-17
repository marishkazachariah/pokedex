import gql from "graphql-tag";

export const GET_POKEMON = gql`
    query allPokemon {
        allPokemon {
            id
            name 
            types {
                id
                name
            }
            sprites {
                front_default
            }
        }
    }
`