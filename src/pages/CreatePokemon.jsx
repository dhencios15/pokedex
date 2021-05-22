import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { useTypes } from 'hooks/useTypes';
import { setLocalPokemon } from 'store/pokemonSlice';

import Layout from 'components/Layout';
import {
  BackButton,
  BaseButton,
  BaseInput,
  BaseCheckBox,
} from 'components/common';

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const typesQuery = useTypes();

  const pokemonNameRef = React.useRef(null);
  const pokemonImageRef = React.useRef(null);
  const [types, setTypes] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  function onCreatePokemon(e) {
    e.preventDefault();

    const values = {
      id: uuidv4(),
      name: pokemonNameRef?.current?.value,
      image:
        pokemonImageRef?.current?.value ||
        'https://i.pinimg.com/originals/d7/6e/fb/d76efbd954a5520031824a17a724f939.png',
      types,
    };

    dispatch(setLocalPokemon(values));
    setSuccess(true);
    pokemonNameRef.current.value = '';
    pokemonImageRef.current.value = '';
    setTypes([]);
  }

  React.useEffect(() => setTimeout(() => setSuccess(false), 1500), [success]);

  return (
    <Layout>
      <section className='p-8 pt-4 pb-16 m-4 border rounded-lg shadow-lg bg-navy-lighter border-navy-light bg-opacity-5'>
        <BackButton />
        <div className='mx-auto w-72'>
          <form onSubmit={onCreatePokemon} className='flex flex-col'>
            <h1 className='mb-6 text-xl text-center text-white-400'>
              Create Pokemon
            </h1>
            {success && (
              <p className='text-sm text-center text-green-400'>
                Pokemon Added
              </p>
            )}
            <BaseInput ref={pokemonNameRef} label='Name' />
            <BaseInput ref={pokemonImageRef} label='Image: (URL)' />
            {!typesQuery.isLoading && (
              <BaseCheckBox
                types={types}
                setTypes={setTypes}
                options={typesQuery.data}
              />
            )}
            <div className='grid w-full mt-6 place-items-center'>
              <BaseButton type='submit' color='primary'>
                ADD POKEMON
              </BaseButton>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CreatePokemon;
