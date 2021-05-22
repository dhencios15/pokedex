import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUrl: 'https://pokeapi.co/api/v2/pokemon?limit=12',
  nextPage: null,
  localPokemon: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLocalPokemon: (state, { payload }) => {
      state.localPokemon.unshift(payload);
    },
    setUrl: (state, { payload }) => {
      state.currentUrl = payload;
    },
    setNextPage: (state, { payload }) => {
      state.nextPage = payload;
    },
  },
});

// ACTIONS
export const { setUrl, setNextPage, setLocalPokemon } = pokemonSlice.actions;

// SELECTORS
export const selectCurrentUrl = (state) => state.pokemon.currentUrl;
export const selectLocalPokemon = (state) => state.pokemon.localPokemon;

export default pokemonSlice.reducer;
