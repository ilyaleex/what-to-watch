import {createAction} from '@reduxjs/toolkit';
import {ALL_GENRES} from './reducer';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../const';

export const changeGenre = createAction(
  'films/changeGenre',
  (name = ALL_GENRES) => ({payload: name}));

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadPromo = createAction<Film>('data/loadPromo');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
