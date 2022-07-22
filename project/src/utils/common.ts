import {films} from '../mocks/films';
import {Film} from '../types/film';

export const getFilm = (id: string) => films.find((item) => item.id === Number(id)) as Film;
