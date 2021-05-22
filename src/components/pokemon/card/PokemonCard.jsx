import { usePokemon } from 'hooks/usePokemon';
import React from 'react';
import Loader from 'react-loader-spinner';
import PokemonCardButtons from './PokemonCardButtons';
import PokemonTypes from './PokemonTypes';

const PokemonCard = React.forwardRef(({ pokemonName }, ref) => {
  const pokemonQuery = usePokemon(pokemonName);

  function renderPokemon() {
    if (!pokemonQuery.isLoading) {
      const pokemon = pokemonQuery.data;
      return (
        <React.Fragment>
          <img
            className='w-32 h-32'
            src={pokemon.image.other.dream_world.front_default}
            alt={pokemon.name}
          />

          <div className='my-2'>
            <h1 className='text-2xl font-bold text-black capitalize text-opacity-60'>
              {pokemon?.name}
            </h1>

            {/* Pokemon types  */}
            <PokemonTypes types={pokemon.types} />
            {/* Action Buttons (show on hover) */}
            <PokemonCardButtons name={pokemon.name} />
          </div>
        </React.Fragment>
      );
    }
  }

  return (
    <div
      ref={ref}
      className='relative z-30 flex flex-col items-center px-4 py-2 duration-500 transform rounded-lg group drop-shadow-lg bg-slate-base hover:scale-105'
    >
      {pokemonQuery.isLoading ? (
        <div className='flex items-center justify-center h-60 w-80'>
          <Loader type='Puff' color='#00BFFF' height={40} width={40} />
        </div>
      ) : (
        renderPokemon()
      )}
    </div>
  );
});

export default PokemonCard;
