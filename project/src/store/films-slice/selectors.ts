import {State} from '../../types/state';
import {Film} from '../../types/film';
import {ALL_GENRES, NameSpace} from '../../const';
import {createSelector} from 'reselect';

const getActiveGenre = (state: State) => state[NameSpace.Films].genre;

export const getFilms = (state: State) => state[NameSpace.Films].filmsList;

export const getLoadedFilmsDataStatus = (state: State) => state[NameSpace.Films].isDataLoaded;

export const selectFilterFilms = createSelector(
  [getFilms, getActiveGenre],
  (films, genre) =>
    genre !== ALL_GENRES
      ? films.filter((item: Film) => item.genre.toLowerCase() === genre)
      : films
);

export const selectGenres = createSelector(
  getFilms,
  (films) => [...new Set(films.map((film) => film.genre))],
);

export const selectFavoritesCount = createSelector(
  getFilms,
  (films) => films.filter((item) => item.isFavorite).length,
);
