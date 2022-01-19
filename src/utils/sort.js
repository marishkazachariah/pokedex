export function byName(allPokemon) {
  if (allPokemon === null) {
    throw new Error("There are no pokemon!");
  } else {
    return [...allPokemon].sort((a, b) => a.name.localeCompare(b.name));
  }
}

export function byType(allPokemon) {
  if (allPokemon === null) {
    throw new Error("There are no pokemon!");
  } else {
    return [...allPokemon].sort((a, b) =>
      a.types[0].name.localeCompare(b.types[0].name)
    );
  }
}
