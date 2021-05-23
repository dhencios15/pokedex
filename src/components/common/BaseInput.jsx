import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

const style = {
  container: `relative mb-4`,
  default: `text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white-400 text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border border-transparent`,
  disabled: `cursor-not-allowed`,
  dot: `text-red-500 pl-0.5`,
  error: `ring-red-500 ring-1`,
  errorMessage: `text-sm text-red-500 mt-2`,
};

const BaseInput = React.forwardRef(
  (
    { disabled, dot, error, icon, label, name, type = 'text', ...rest },
    ref
  ) => {
    let component = (
      <div className='relative'>
        <div className='absolute top-0 left-0 flex w-10 h-full border border-transparent'>
          <div className='z-10 flex items-center justify-center w-full h-full text-lg text-gray-400 rounded-tl rounded-bl'>
            {icon}
          </div>
        </div>
        <input
          title='baseInput'
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${icon ? 'pl-12' : ''}  
            ${error ? style.error : 'border-gray-300'} 
            ${disabled ? style.disabled : ''} `}
          disabled={disabled}
          id={name}
          name={name}
          type={type}
          ref={ref}
          {...rest}
          required
        />
        {error && (
          <>
            <ExclamationCircleIcon className='w-6 h-6 text-red-600' />
          </>
        )}
      </div>
    );

    return (
      <div className={`${style.container} ${disabled ? 'opacity-50' : ''}`}>
        <label htmlFor={name} className='text-gray-400'>
          {label}
          {dot && <span className={style.dot}>*</span>}
        </label>
        {component}
        {error && <p className={style.errorMessage}>{error}</p>}
      </div>
    );
  }
);

export default BaseInput;
