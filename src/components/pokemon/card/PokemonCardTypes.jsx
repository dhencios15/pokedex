const PokemonCardTypes = ({ types }) => (
  <div className='flex items-center justify-center mt-2 space-x-2'>
    {types?.map(({ type }, i) => (
      <small
        key={i}
        className='px-2 bg-black rounded-lg select-none bg-opacity-5'
      >
        {type.name}
      </small>
    ))}
  </div>
);

export default PokemonCardTypes;
