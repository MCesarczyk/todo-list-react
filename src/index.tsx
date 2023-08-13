import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'App';
import { store } from 'store';
import { theme } from 'theme';
import reportWebVitals from 'reportWebVitals';
import { GlobalProvider } from '~/GlobalProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalProvider store={store} theme={theme}>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);

reportWebVitals();
