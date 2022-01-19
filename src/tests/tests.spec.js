import { byName, byType } from "../utils/sort";

describe("Sort by Name", () => {
  test("Should order the pokemon by its name in alphabetical order.", () => {
    const result = byName([
      {
        id: 2,
        name: "ivysaur",
        types: [
          {
            id: 12,
            name: "Grass",
          },
          {
            id: 4,
            name: "Poison",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
      },
      {
        id: 1,
        name: "bulbasaur",
        types: [
          {
            id: 12,
            name: "Grass",
          },
          {
            id: 4,
            name: "Poison",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      },
    ]);
    expect(result).toStrictEqual([
      {
        id: 1,
        name: "bulbasaur",
        types: [
          {
            id: 12,
            name: "Grass",
          },
          {
            id: 4,
            name: "Poison",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      },
      {
        id: 2,
        name: "ivysaur",
        types: [
          {
            id: 12,
            name: "Grass",
          },
          {
            id: 4,
            name: "Poison",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
      },
    ]);
  });

  test("should throw an error if there are no pokemon in the argument", () => {
    expect(() => byName()).toThrow();
  });
});

describe("Sort by Type", () => {
  test("Should order the pokemon by its type in alphabetical order.", () => {
    const result = byType([
      {
        id: 16,
        name: "pidgey",
        types: [
          {
            id: 1,
            name: "Normal",
          },
          {
            id: 3,
            name: "Flying",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        },
      },
      {
        id: 10,
        name: "caterpie",
        types: [
          {
            id: 7,
            name: "Bug",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        },
      },
    ]);
    expect(result).toStrictEqual([
      {
        id: 10,
        name: "caterpie",
        types: [
          {
            id: 7,
            name: "Bug",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        },
      },
      {
        id: 16,
        name: "pidgey",
        types: [
          {
            id: 1,
            name: "Normal",
          },
          {
            id: 3,
            name: "Flying",
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        },
      },
    ]);
  });

  test("should throw an error if there are no pokemon in the argument", () => {
    expect(() => byType()).toThrow();
  });
});
