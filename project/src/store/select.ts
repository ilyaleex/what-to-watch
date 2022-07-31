import {State} from '../types/state';
import {ALL_GENRES} from './reducer';
import {Film} from '../types/film';
import {getGenres} from '../utils/common';

export const selectFilms = (state: State) => state.filmsList;

export const selectFilterFilms = (state: State) =>
  state.genre !== ALL_GENRES
    ? state.filmsList.filter((item: Film) => item.genre.toLowerCase() === state.genre)
    : state.filmsList;

export const selectFilmGenres = (state: State) => getGenres(state.filmsList);

