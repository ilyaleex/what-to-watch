import {FilmSlice} from '../../types/state';
import {Film} from '../../types/film';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchFilmAction, fetchSimilarFilmsAction} from '../../services/api-action';

const initialState: FilmSlice = {
  film: {} as Film,
  similarFilms: [],
};

export const filmSlice = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      });
  }
});

