import { NavLink } from 'react-router-dom';

import PokemonLogo from 'assets/images/pokemon_logo.png';

const Header = () => {
  return (
    <header className='grid space-y-4 place-items-center'>
      <NavLink
        to='/'
        className='text-4xl font-bold tracking-widest text-center text-yellow-custom drop-shadow-xl'
      >
        <img className='h-20' src={PokemonLogo} alt='pokemon_logo' />
      </NavLink>
    </header>
  );
};

export default Header;
