export function byName(allPokemon) {
  return [...allPokemon].sort((a, b) => a.name.localeCompare(b.name));
}

export function byType(allPokemon) {
  return [...allPokemon].sort((a, b) =>
    a.types[0].name.localeCompare(b.types[0].name)
  );
}
