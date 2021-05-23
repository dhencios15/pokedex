import axios from 'axios';
import { useQuery } from 'react-query';

export async function getPokemonColor(url) {
  const res = await axios.get(url);
  return res.data.color.name;
}

export async function fetchOnePokemon(name) {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(async (res) => {
      const sanitizePokemon = {
        id: res.data?.id,
        name: res.data?.name,
        species: res.data?.species,
        image: res.data?.sprites?.other.dream_world.front_default,
        otherImages: {
          front_default: res.data?.sprites?.front_default,
          front_shiny: res.data?.sprites?.front_shiny,
          back_default: res.data?.sprites?.back_default,
          back_shiny: res.data?.sprites?.back_shiny,
        },
        types: res.data?.types.map(({ type }) => type.name),
      };
      const color = await getPokemonColor(sanitizePokemon.species.url);

      return { ...sanitizePokemon, color };
    })
    .catch((err) => err.response.data);
}

export function usePokemon({ pokemon, isLocal = false }) {
  return useQuery(
    ['pokemon', pokemon],
    async () => await fetchOnePokemon(pokemon),
    {
      enabled: !isLocal,
    }
  );
}
