import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { mergeApiPokemon, setNextPage } from 'store/pokemonSlice';
import { fetchOnePokemon } from './usePokemon';

export function usePokemons(url) {
  const dispatch = useDispatch();
  return useQuery(
    ['pokemons', url],
    () =>
      axios
        .get(url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => err.response.data),
    {
      enabled: !!url,
      onSuccess: (data) => {
        const { next, results } = data;
        dispatch(setNextPage(next));
        results.forEach(async (pokemon) => {
          const res = await fetchOnePokemon(pokemon.name);
          dispatch(mergeApiPokemon(res));
        });
      },
    }
  );
}
