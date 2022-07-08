import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Data = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

root.render(
  <React.StrictMode>
    <App name={Data.NAME} genre={Data.GENRE} releaseDate={Data.RELEASE_DATE}/>
  </React.StrictMode>,
);
