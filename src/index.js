import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'; 

const muiCache = createCache({
  key: 'mui',
  prepend: true
});

const root = document.getElementById('root');
const rootInstance = createRoot(root);
const rootElement = (
  <React.StrictMode>
    <CacheProvider value={muiCache}>
      <App />
    </CacheProvider>
  </React.StrictMode>
);

rootInstance.render(rootElement);

reportWebVitals();

