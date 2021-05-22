import React from 'react';
import { pokemonColor } from './pokemonColor';
import PokemonImages from './PokemonImages';
import PokemonTypes from './PokemonTypes';

const PokemonProfile = ({ pokemon }) => {
  return (
    <div className='relative grid py-4 place-items-center'>
      <img
        className='transform translate-y-8 w-52 h-52 drop-shadow-lg'
        src={pokemon?.image?.other?.dream_world?.front_default}
        alt={pokemon?.name}
      />

      <div
        className={`${pokemonColor(
          pokemon?.color
        )} rounded-lg grid place-items-center w-screen/1.5 pt-10 pb-5`}
      >
        <h1 className='text-3xl font-bold text-center text-black capitalize text-opacity-70'>
          {pokemon?.name}
        </h1>

        <div className='flex flex-col items-center mt-2'>
          {/* Pokemon Types  */}
          <PokemonTypes types={pokemon?.types} />

          {/* Pokemon Evo Images  */}
          <PokemonImages
            front_default={pokemon?.image.front_default}
            front_shiny={pokemon?.image.front_shiny}
            back_default={pokemon?.image.back_default}
            back_shiny={pokemon?.image.back_shiny}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
