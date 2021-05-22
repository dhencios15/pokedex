const PokemonCardTypes = ({ types }) => (
  <div className='grid grid-cols-3 gap-2 mt-2'>
    {types?.map((type, i) => (
      <small
        key={i}
        className='px-2 bg-black rounded-lg select-none bg-opacity-5'
      >
        {type}
      </small>
    ))}
  </div>
);

export default PokemonCardTypes;
