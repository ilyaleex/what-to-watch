import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getFilm = (state: State) => state[NameSpace.Film].film;

export const getSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;

export const getIsLoadedFilm = (state: State) => state[NameSpace.Film].isDataLoaded;

export const getErrorLoadFilm = (state: State) => state[NameSpace.Film].isError;
