import PokemonContainer from "./containers/PokemonContainer";
import { Routes, Route } from "react-router-dom";
import Favourites from "./containers/FavouritesContainer";
import Navbar from "./components/Navbar";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON } from "./graphql/get-pokemons";

function App() {
  const { data: { allPokemon = [] } = {} } = useQuery(GET_POKEMON);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/pokedex"
          element={<PokemonContainer allPokemon={allPokemon} />}
        />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
