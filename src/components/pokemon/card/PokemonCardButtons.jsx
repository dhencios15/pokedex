import React from 'react';
import { useHistory } from 'react-router';
import { InformationCircleIcon, XCircleIcon } from '@heroicons/react/outline';

const PokemonCardButtons = ({ name }) => {
  const history = useHistory();

  return (
    <div className='absolute top-0 right-0 z-30 items-center hidden p-1 -mt-3 space-x-2 transform rounded-lg group-hover:flex bg-navy-lighter'>
      <button
        onClick={() => history.push(name)}
        className='rounded-full focus:outline-none'
      >
        <InformationCircleIcon className='w-6 h-6 text-slate-lighter' />
      </button>
      <button className='rounded-full focus:outline-none'>
        <XCircleIcon className='w-6 h-6 text-hot-pink' />
      </button>
    </div>
  );
};

export default PokemonCardButtons;
