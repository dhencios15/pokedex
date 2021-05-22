import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUrl: 'https://pokeapi.co/api/v2/pokemon?limit=12',
  nextPage: null,
  localPokemon: [],
  pokemon: {},
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLocalPokemons: (state, { payload }) => {
      state.localPokemon.push(payload);
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
  },
});

// ACTIONS
export const {
  setUrl,
  setNextPage,
  setLocalPokemons,
  setLocalPokemon,
  updateLocalPokemon,
} = pokemonSlice.actions;

// SELECTORS
export const selectCurrentUrl = (state) => state.pokemon.currentUrl;
export const selectLocalPokemon = (state) => state.pokemon.localPokemon;
export const selectPokemon = (state) => state.pokemon.pokemon;

export default pokemonSlice.reducer;
