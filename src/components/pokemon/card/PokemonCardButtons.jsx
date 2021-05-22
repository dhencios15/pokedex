import React from 'react';
import { Link } from 'react-router-dom';
import { InformationCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { setLocalPokemon } from 'store/pokemonSlice';

const PokemonCardButtons = ({ name, isLocal = false, pokemon }) => {
  const dispatch = useDispatch();

  function onGotoProfile() {
    dispatch(setLocalPokemon(pokemon));
  }

  return (
    <div className='absolute top-0 right-0 z-30 items-center hidden p-1 -mt-3 space-x-2 transform rounded-lg group-hover:flex bg-navy-lighter'>
      <Link
        to={{
          pathname: `/${name}`,
          state: { isLocal },
        }}
        onClick={onGotoProfile}
        className='rounded-full focus:outline-none'
      >
        <InformationCircleIcon className='w-6 h-6 text-slate-lighter' />
      </Link>
      <button className='rounded-full focus:outline-none'>
        <XCircleIcon className='w-6 h-6 text-hot-pink' />
      </button>
    </div>
  );
};

export default PokemonCardButtons;
