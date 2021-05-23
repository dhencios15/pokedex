import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usePokemons } from 'hooks/usePokemons';
import {
  selectCurrentUrl,
  selectLocalPokemon,
  setLocalPokemon,
} from 'store/pokemonSlice';

import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import { PokemonCard, PokemonSkeleton } from 'components/pokemon';
import DeleteModal from 'components/DeleteModal';
import useModal from 'hooks/useModal';

const Home = () => {
  const dispatch = useDispatch();
  const { openModal, closeModal, isOpen } = useModal();

  const pokemons = useSelector(selectLocalPokemon);
  const currentUrl = useSelector(selectCurrentUrl);
  const pokemonsQuery = usePokemons(currentUrl);

  const [selectedPokemon, setSelectedPokemon] = React.useState(null);

  function onOpenModal(pokemon) {
    setSelectedPokemon(pokemon);
    openModal();
  }

  function renderPokemonList() {
    if (!pokemonsQuery.isLoading && pokemonsQuery.status === 'success') {
      return pokemonsQuery.data.results.map((pokemon) => (
        <PokemonCard
          openModal={onOpenModal}
          key={pokemon.name}
          pokemonName={pokemon.name}
          isLocal={false}
        />
      ));
    }
  }

  function renderLocalPokemonList() {
    return pokemons.map((pokemon) => (
      <PokemonCard
        openModal={onOpenModal}
        key={pokemon.id}
        isLocal={true}
        pokemon={pokemon}
      />
    ));
  }

  React.useEffect(() => dispatch(setLocalPokemon({})), [dispatch]);

  return (
    <Layout>
      <section className='relative grid grid-cols-1 gap-6 p-6 pb-4 m-4 mt-20 border rounded-lg shadow-lg sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:p-8 bg-navy-lighter border-navy-light bg-opacity-5'>
        <Navbar />
        {renderLocalPokemonList()}
        {renderPokemonList()}
        {pokemonsQuery.isLoading &&
          [...Array(4)].map((_, i) => <PokemonSkeleton key={i} />)}

        <DeleteModal
          pokemon={selectedPokemon?.pokemon}
          isOpen={isOpen}
          closeModal={closeModal}
          isLocal={selectedPokemon?.isLocal}
        />
      </section>
    </Layout>
  );
};

export default Home;
