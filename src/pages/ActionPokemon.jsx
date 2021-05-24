import React from 'react';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useTypes } from 'hooks/useTypes';
import {
  selectPokemon,
  setLocalPokemons,
  updateLocalPokemon,
} from 'store/pokemonSlice';

import Layout from 'components/Layout';
import {
  BackButton,
  BaseButton,
  BaseInput,
  BaseCheckBox,
} from 'components/common';

const ActionPokemon = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const history = useHistory();
  const { action } = useParams();
  const { state } = useLocation();

  const typesQuery = useTypes();
  const pokemon = useSelector(selectPokemon);

  const pokemonNameRef = React.useRef(null);
  const pokemonImageRef = React.useRef(null);
  const [types, setTypes] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  // Basic Toaster [Message on Create/Update Success]
  React.useEffect(() => {
    const timeout = setTimeout(() => setSuccess(false), 1500);
    return () => clearTimeout(timeout);
  }, [success]);

  React.useEffect(() => {
    if (state?.update) {
      pokemonNameRef.current.value = pokemon?.name;
      pokemonImageRef.current.value =
        pokemon?.image?.other?.dream_world?.front_default || pokemon?.image;
      setTypes(pokemon?.types);
    }

    return () => delete state?.update;
  }, [state, pokemon]);

  function onUpdateNonLocal(val) {
    queryClient.setQueryData(['pokemon', pokemon.name], () => val);
    console.log(val);
  }

  function onCreatePokemon(e) {
    e.preventDefault();

    const values = {
      id: pokemon.id || uuidv4(),
      name: pokemonNameRef?.current?.value,
      image:
        pokemonImageRef?.current?.value ||
        'https://i.pinimg.com/originals/d7/6e/fb/d76efbd954a5520031824a17a724f939.png',
      types,
    };

    if (state?.update) {
      state?.isLocal
        ? dispatch(updateLocalPokemon({ ...pokemon, ...values }))
        : onUpdateNonLocal(values);

      history.goBack();
    } else {
      dispatch(setLocalPokemons(values));
      setTypes([]);
      pokemonNameRef.current.value = '';
      pokemonImageRef.current.value = '';
    }

    setSuccess(true);
  }

  return (
    <Layout>
      <section className='p-8 pt-4 pb-16 m-4 border rounded-lg shadow-lg bg-navy-lighter border-navy-light bg-opacity-5'>
        <BackButton />
        <div className='mx-auto w-72'>
          <form onSubmit={onCreatePokemon} className='flex flex-col'>
            <h1 className='mb-6 text-xl text-center text-white-400'>
              {action.toUpperCase()} POKEMON
            </h1>
            {success && (
              <p className='text-sm text-center text-green-400'>
                Operation Success
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
                {action.charAt(0).toUpperCase() + action.slice(1)} Pokemon
              </BaseButton>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ActionPokemon;
