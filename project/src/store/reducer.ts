import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadComments, loadFilms, requireAuthorization, setDataLoadedStatus} from './action';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../const';
import {Comment} from '../types/comment';

export const ALL_GENRES = 'All genres';

type InitialState = {
  genre: string
  filmsList: Film[]
  comments: Comment[]
  promo: Film
  authorizationStatus: AuthorizationStatus
  isDataLoaded: boolean
  error: string | null
};

const initialState: InitialState = {
  genre: ALL_GENRES,
  filmsList: [],
  comments: [],
  promo: {} as Film,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
