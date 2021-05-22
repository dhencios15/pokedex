import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';

import 'assets/styles/tailwind.css';
import { store } from 'store/store';

import App from './App';
import ThemedSuspense from 'components/ThemeSuspense';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.Suspense fallback={<ThemedSuspense />}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.Suspense>,
  document.getElementById('root')
);
