import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getFilm = (state: State) => state[NameSpace.Film].film;

export const getSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;
