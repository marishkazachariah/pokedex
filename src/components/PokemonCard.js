import { Card, Col, Button, Tag, Divider } from "antd";
import React, { useState, useEffect } from "react";

export default function PokemonCard({ pokemon }) {
  const [favourites, setFavourites] = useState([]);
  // const [headerColor, setHeaderColor] = useState("");
  
  useEffect(() => {
    const pokeFavourites = JSON.parse(
      localStorage.getItem("pokedex-favourites")
    );

    if (pokeFavourites) {
      setFavourites(pokeFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("pokedex-favourites", JSON.stringify(items));
  };

  //   const removeFavouritePokemon = (pokemon) => {
  //     const newFavouriteList = favourites.filter(
  //       (favourite) => favourite.id !== pokemon.id
  //     );
  //     setFavourites(newFavouriteList);
  //     saveToLocalStorage(newFavouriteList);
  //   };

  const addFavouritePokemon = (pokemon) => {
    const newFavouriteList = [...favourites, pokemon];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  // I had an idea to change the colors of the header depending on the pokemon type.
  // I decided to show it here, but I had a problem with loading times. I would
  // try to fix this using async/await with more time.
  // const finalHeaderColor = (pokemonType) => {
  //   switch (pokemonType) {
  //     case "Bug":
  //       setHeaderColor("#B4E99A");
  //       break;
  //     case "Dragon":
  //       setHeaderColor("#FF8383");
  //       break;
  //     case "Fairy":
  //       setHeaderColor("#FFDAFE");
  //       break;
  //     case "Fire":
  //       setHeaderColor("#FF9B53");
  //       break;
  //     case "Ghost":
  //       setHeaderColor("#D4C1DF");
  //       break;
  //     case "Ground":
  //       setHeaderColor("#DED5C1");
  //       break;
  //     case "Normal":
  //       setHeaderColor("#A2A2A2");
  //       break;
  //     case "Psychic":
  //       setHeaderColor("#FF7CCF");
  //       break;
  //     case "Steel":
  //       setHeaderColor("#DDDDDD");
  //       break;
  //     case "Dark":
  //       setHeaderColor("#98A5B1");
  //       break;
  //     case "Electric":
  //       setHeaderColor("#EBD846");
  //       break;
  //     case "Fighting":
  //       setHeaderColor("#D39260");
  //       break;
  //     case "Flying":
  //       setHeaderColor("#C4E6E4");
  //       break;
  //     case "Grass":
  //       setHeaderColor("#E0EEC4");
  //       break;
  //     case "Ice":
  //       setHeaderColor("#ABFCFF");
  //       break;
  //     case "Poison":
  //       setHeaderColor("#C97FDB");
  //       break;
  //     case "Rock":
  //       setHeaderColor("#D0C086");
  //       break;
  //     case "Water":
  //       setHeaderColor("#65B0FF");
  //       break;
  //     default:
  //       console.log(`Sorry, we are out of ${pokemonType}.`);
  //   }
  // }

  return (
    <>
      <div className="PokemonCard">
        <Col>
          <Card
            title={pokemon.name}
            style={{
              width: 230,
              height: 380,
              margin: 10,
              textTransform: "capitalize",
              textAlign: "center",
              borderRadius: "20px",
              overflow: "hidden",
            }}
            headStyle={{
              backgroundColor: "#BDECFF", // finalHeaderColor(pokemon.types[0].name)
              border: 0,
            }}
            bodyStyle={{ backgroundColor: "#69c0ff", border: 0 }}
          >
            <div className="CardBgImg">
              <img
                src={pokemon.sprites.front_default}
                height={100}
                alt={pokemon.name}
              />
            </div>
            <p>#{pokemon.id}</p>
            <p>Types</p>
            <div>
              {pokemon.types.map((type) => {
                return <Tag key={`${type.name}`}>{type.name}</Tag>;
              })}
            </div>
            <Button
              shape="round"
              style={{ backgroundColor: "#fffbe6" }}
              onClick={() => {
                return addFavouritePokemon(pokemon);
              }}
            >
              Add to Favourites
            </Button>
          </Card>
        </Col>
      </div>
    </>
  );
}
