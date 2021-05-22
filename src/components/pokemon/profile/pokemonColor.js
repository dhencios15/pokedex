export function pokemonColor(color) {
  switch (color) {
    case 'black':
      return 'bg-black-400';
    case 'blue':
      return 'bg-blue-400';
    case 'brown':
      return 'bg-brown-400';
    case 'gray':
      return 'bg-gray-400';
    case 'green':
      return 'bg-green-400';
    case 'pink':
      return 'bg-pink-400';
    case 'purple':
      return 'bg-purple-400';
    case 'white':
      return 'bg-white-400';
    case 'yellow':
      return 'bg-yellow-400';
    case 'red':
      return 'bg-red-400';
    default:
      return 'bg-slate-light';
  }
}
