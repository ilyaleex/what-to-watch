import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films, filmHeader, film} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilm={filmHeader} filmHeader={filmHeader} films={films} film={film}/>
  </React.StrictMode>,
);
