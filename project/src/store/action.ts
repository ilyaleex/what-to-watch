import {createAction} from '@reduxjs/toolkit';
import {ALL_GENRES} from './reducer';
import {films} from '../mocks/films';

export const changeGenre = createAction(
  'films/changeGenre',
  (name = ALL_GENRES) => ({payload: name}));
export const getFilmsList = createAction(
  'films/getFilmsList',
  () => ({payload: films}));
