import React from 'react';
import { useHistory } from 'react-router';

import { BaseButton } from './common';

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className='absolute inset-x-0 top-0 flex items-center w-full -mt-14'>
      <BaseButton
        onClick={() => history.push('/action/create-pokemon')}
        color='primary'
      >
        Create Pokemon
      </BaseButton>

      {/* <div className='flex items-center ml-auto space-x-4'>
        <div className='relative mt-1'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Search Pokemon...'
            className='px-4 py-1 ml-auto placeholder-gray-500 rounded-lg bg-white-400 focus:outline-none'
          />

          {value && (
            <ul className='absolute inset-x-0 bottom-0 overflow-hidden transform rounded-lg translate-y-9 bg-white-400'>
              {pokemonInfo.isLoading ? (
                <li className='px-2 py-1'>Catching Pokemon...</li>
              ) : pokemonInfo.data === 'Not Found' ? (
                <li className='px-2 py-1'>No pokemon found</li>
              ) : (
                <li
                  onClick={() => history.push(pokemonInfo.data.name)}
                  className='px-2 py-1 cursor-pointer hover:bg-gray-400 hover:text-gray-600'
                >
                  {pokemonInfo.data.name}
                </li>
              )}
            </ul>
          )}
        </div>
        <Select />
      </div> */}
    </nav>
  );
};

export default Navbar;
