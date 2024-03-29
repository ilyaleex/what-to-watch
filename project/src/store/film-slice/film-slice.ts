import {FilmSlice} from '../../types/state';
import {Film} from '../../types/film';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {addToFavorite, fetchFilmAction, fetchSimilarFilmsAction} from '../../services/api-action';

const initialState: FilmSlice = {
  film: {} as Film,
  similarFilms: [],
  isDataLoaded: false,
  isError: false,
};

export const filmSlice = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoaded = true;
        state.isError = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
        state.isError = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isDataLoaded = false;
        state.isError = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        if (state.film.id === action.payload.id) {
          state.film = action.payload;
        }
      });
  }
});

