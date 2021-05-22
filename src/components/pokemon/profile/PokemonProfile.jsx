import { PencilAltIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

import { pokemonColor } from './pokemonColor';
import PokemonImages from './PokemonImages';
import PokemonTypes from './PokemonTypes';

const PokemonProfile = ({ pokemon, isLocal }) => (
  <div className='relative grid py-4 place-items-center'>
    <img
      className='z-50 transform translate-y-8 select-none w-52 h-52 drop-shadow-lg'
      src={pokemon?.image?.other?.dream_world?.front_default || pokemon.image}
      alt={pokemon?.name}
    />

    <div
      className={`${pokemonColor(
        pokemon?.color
      )} rounded-lg grid place-items-center w-screen/1.5 pt-10 pb-5 relative`}
    >
      <h1 className='text-3xl font-bold text-center text-black capitalize text-opacity-70'>
        {pokemon?.name}
      </h1>

      <div className='flex flex-col items-center mt-2'>
        {/* Pokemon Types  */}
        <PokemonTypes types={pokemon?.types} />

        {/* Pokemon Evo Images  */}
        <PokemonImages
          front_default={pokemon?.image.front_default || pokemon.image}
          front_shiny={pokemon?.image.front_shiny || pokemon.image}
          back_default={pokemon?.image.back_default || pokemon.image}
          back_shiny={pokemon?.image.back_shiny || pokemon.image}
        />
      </div>

      {isLocal && (
        <Link
          to={{
            pathname: '/action/update',
            state: { update: true, isLocal },
          }}
          className='absolute top-0 right-0 p-1 m-3 focus:outline-none'
        >
          <PencilAltIcon className='text-blue-600 w-7 h-7' />
        </Link>
      )}
    </div>
  </div>
);

export default PokemonProfile;
