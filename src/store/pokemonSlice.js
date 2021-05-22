import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUrl: 'https://pokeapi.co/api/v2/pokemon?limit=10',
  nextPage: null,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setUrl: (state, { payload }) => {
      state.currentUrl = payload;
    },
    setNextPage: (state, { payload }) => {
      state.nextPage = payload;
    },
  },
});

// ACTIONS
export const { setUrl, setNextPage } = pokemonSlice.actions;

// SELECTORS
export const selectCurrentUrl = (state) => state.pokemon.currentUrl;

export default pokemonSlice.reducer;
