import React from 'react';
import { useParams } from 'react-router';
import Loader from 'react-loader-spinner';

import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { usePokemon } from 'hooks/usePokemon';

import Layout from 'components/Layout';
import BackButton from 'components/common/BackButton';
import { PokemonProfile } from 'components/pokemon';

const Pokemon = () => {
  const { pokemon } = useParams();
  useDocumentTitle(
    `Pokemon | ${pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}`
  );

  const pokemonQuery = usePokemon(pokemon);

  return (
    <Layout>
      <section className='p-8 py-4 m-4 border rounded-lg shadow-lg bg-navy-lighter border-navy-light bg-opacity-5'>
        <BackButton />
        {pokemonQuery.isLoading ? (
          <div className='flex items-center justify-center w-full h-60'>
            <Loader type='Puff' color='#00BFFF' height={40} width={40} />
          </div>
        ) : pokemonQuery.data === 'Not Found' ? (
          <div className='flex flex-col items-center justify-center my-10'>
            <h1 className='text-2xl font-bold text-center text-white-400'>
              <span className='text-3xl text-hot-pink'>Opps!</span> Unable to
              find that pokemon
            </h1>
          </div>
        ) : (
          <PokemonProfile pokemon={pokemonQuery.data} />
        )}
      </section>
    </Layout>
  );
};

export default Pokemon;
