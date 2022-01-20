import PokemonContainer from "./containers/PokemonContainer";
import FavouritesContainer from "./containers/FavouritesContainer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON } from "./graphql/get-pokemons";
import "./App.scss";


function App() {
  const { data: { allPokemon = [] } = {} } = useQuery(GET_POKEMON);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/pokedex/"
          element={<PokemonContainer allPokemon={allPokemon} />}
        />
        <Route path="/favourites/" element={<FavouritesContainer />} />
      </Routes>
    </>
  );
}

export default App;
