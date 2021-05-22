import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { setNextPage } from 'store/pokemonSlice';

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
      onSuccess: (data) => dispatch(setNextPage(data.next)),
    }
  );
}
