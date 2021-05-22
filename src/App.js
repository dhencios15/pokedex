import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import RoutesContainer from 'routes/RoutesContainer';

const fetchDevTools = process.env.NODE_ENV === 'development' && (
  <ReactQueryDevtools initialIsOpen={false} />
);

function App() {
  return (
    <div className='min-h-screen bg-navy-base'>
      <RoutesContainer />
      {fetchDevTools}
    </div>
  );
}

export default App;
