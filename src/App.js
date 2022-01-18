import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonContainer from "./containers/PokemonContainer";
import { Routes, Route } from "react-router-dom";
import Favourites from "./containers/FavouritesContainer";
import Navbar from "./components/Navbar";

function App() {
  const client = new ApolloClient({
    uri: "https://dex-server.herokuapp.com/",
  });

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/pokedex" element={<PokemonContainer />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
