import { ArrowLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import { useHistory } from 'react-router';

const BackButton = () => {
  const history = useHistory();
  return (
    <button
      className='focus:outline-none group'
      onClick={() => history.goBack()}
    >
      <ArrowLeftIcon className='w-6 h-6 text-slate-lighter group-hover:text-slate-base' />
    </button>
  );
};

export default BackButton;
