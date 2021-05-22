import axios from 'axios';
import { useQuery } from 'react-query';

export function useTypes() {
  return useQuery('types', () =>
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => {
        const results = res.data.results.map((type) => type.name);

        return results;
      })
      .catch((err) => err.response.data)
  );
}
