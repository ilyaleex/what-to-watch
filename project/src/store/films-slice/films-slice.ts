import {FilmsSlice} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {ALL_GENRES, NameSpace} from '../../const';
import {fetchFilmsAction} from '../../services/api-action';

const initialState: FilmsSlice = {
  genre: ALL_GENRES,
  filmsList: [],
  isDataLoaded: false,
};

export const filmsSlice = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload ?? ALL_GENRES;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.filmsList = action.payload;
        state.isDataLoaded = false;
      });
  }
});

export const {changeGenre} = filmsSlice.actions;
