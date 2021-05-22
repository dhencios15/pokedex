import React from 'react';

const Home = React.lazy(() => import('pages/Home'));
const Pokemon = React.lazy(() => import('pages/Pokemon'));
const CreatePokemon = React.lazy(() => import('pages/CreatePokemon'));

export const ROUTES = [
  {
    name: 'HOME',
    path: '/',
    component: Home,
  },
  {
    name: 'POKEMON',
    path: '/:pokemon',
    component: Pokemon,
  },
  {
    name: 'ACTION',
    path: '/action/create-pokemon',
    component: CreatePokemon,
  },
];
