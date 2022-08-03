import {Film} from '../types/film';
import {films} from '../mocks/films';
import {AuthorizationStatus} from '../const';

const MINUTES_IN_HOUR = 60;

export const humanizeRuntime = (runtime: number) => {
  const hours = ~~(runtime / MINUTES_IN_HOUR);
  const minutes = runtime % MINUTES_IN_HOUR;

  return `${hours}h ${minutes}m`;
};

export const getFilm = (id: string | undefined) => films.find((item) => item.id === Number(id)) as Film;

export const getGenres = (filmsList: Film[]): string[] => [...new Set(filmsList.map((film) => film.genre))];

export const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
