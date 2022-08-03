import {createAction} from '@reduxjs/toolkit';
import {ALL_GENRES} from './reducer';
import {Film} from '../types/film';
import {AppRoute, AuthorizationStatus} from '../const';
import {Comment} from '../types/comment';

export const changeGenre = createAction(
  'films/changeGenre',
  (name = ALL_GENRES) => ({payload: name}));

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadComments = createAction<Comment[]>('data/loadComments');

export const loadPromo = createAction<Film>('data/loadPromo');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setError = createAction<string | null>('app/setError');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
