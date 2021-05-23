export const filterPokemon = (pokemons, type) => {
  if (type !== 'all') {
    return pokemons.filter((pokemon) => pokemon.types.includes(type));
  }

  return pokemons;
};
