import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsList} from './action';
import {Film} from '../types/film';

export const ALL_GENRES = 'All genres';

type FilmsListType = {
  genre: string,
  filmsList: Film[],
};

const initialState: FilmsListType = {
  genre: ALL_GENRES,
  filmsList: [],
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsList, (state, action) => {
      state.filmsList = action.payload;
    });
});
