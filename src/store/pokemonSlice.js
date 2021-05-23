import { createSlice } from '@reduxjs/toolkit';
import { filterPokemon } from 'helper/filterPokemon';

const initialState = {
  currentUrl: 'https://pokeapi.co/api/v2/pokemon?limit=50',
  nextPage: null,
  localPokemon: [],
  pokemon: {},
  filterType: 'all',
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    mergeApiPokemon: (state, { payload }) => {
      const seen = new Set();
      // update state pokemon
      const updatePokemon = [...state.localPokemon, payload];
      // since we're persisting data, we need to removeDuplicate pokemon
      const removeDuplicate = updatePokemon.filter((el) => {
        const duplicate = seen.has(el.id);
        seen.add(el.id);
        return !duplicate;
      });

      state.localPokemon = removeDuplicate;
    },
    setLocalPokemons: (state, { payload }) => {
      state.localPokemon.unshift(payload);
    },
    setLocalPokemon: (state, { payload }) => {
      state.pokemon = payload;
    },
    setUrl: (state, { payload }) => {
      state.currentUrl = payload;
    },
    setNextPage: (state, { payload }) => {
      state.nextPage = payload;
    },
    updateLocalPokemon: (state, { payload }) => {
      const oldPokemons = state.localPokemon;
      const updatedPokemon = oldPokemons.map((pokemon) => {
        if (pokemon.id === payload.id) {
          return payload;
        }
        return pokemon;
      });

      state.localPokemon = updatedPokemon;
      state.pokemon = payload;
    },
    deleteLocalPokemon: (state, { payload }) => {
      const oldPokemons = state.localPokemon;
      const updatedPokemon = oldPokemons.filter(
        (pokemon) => pokemon.id !== payload
      );

      state.localPokemon = updatedPokemon;
    },
    setFilterType: (state, { payload }) => {
      state.filterType = payload;
    },
  },
});

// ACTIONS
export const {
  setUrl,
  setNextPage,
  setLocalPokemons,
  setLocalPokemon,
  updateLocalPokemon,
  deleteLocalPokemon,
  mergeApiPokemon,
  setFilterType,
} = pokemonSlice.actions;

// SELECTORS
export const selectCurrentUrl = (state) => state.pokemon.currentUrl;
export const selectLocalPokemon = (state) => {
  const pokemons = state.pokemon.localPokemon;
  const selectedType = state.pokemon.filterType;
  return filterPokemon(pokemons, selectedType);
};
export const selectPokemon = (state) => state.pokemon.pokemon;
export const selectNextPage = (state) => state.pokemon.nextPage;
export const selectFilterType = (state) => state.pokemon.filterType;

export default pokemonSlice.reducer;
