import Loader from 'react-loader-spinner';

function ThemedSuspense() {
  return (
    <div className='flex items-center justify-center w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900'>
      <Loader type='Puff' color='#00BFFF' height={40} width={40} />
    </div>
  );
}

export default ThemedSuspense;
