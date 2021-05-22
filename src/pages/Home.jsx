import React from 'react';
import { useSelector } from 'react-redux';

import { usePokemons } from 'hooks/usePokemons';
import { selectCurrentUrl } from 'store/pokemonSlice';

import Layout from 'components/Layout';
import { PokemonCard, PokemonSkeleton } from 'components/pokemon';

const Home = () => {
  const currentUrl = useSelector(selectCurrentUrl);
  const pokemonsQuery = usePokemons(currentUrl);

  function renderPokemonList() {
    if (!pokemonsQuery.isLoading && pokemonsQuery.status === 'success') {
      return pokemonsQuery.data.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
      ));
    }
  }

  return (
    <Layout>
      <section className='relative grid grid-cols-1 gap-6 p-6 pb-4 m-4 mt-20 border rounded-lg shadow-lg sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:p-8 bg-navy-lighter border-navy-light bg-opacity-5'>
        {renderPokemonList()}
        {pokemonsQuery.isLoading &&
          [...Array(4)].map((_, i) => <PokemonSkeleton key={i} />)}
      </section>
    </Layout>
  );
};

export default Home;
