import {createSlice} from '@reduxjs/toolkit';
import {fetchFavorites} from '../../services/api-action';
import {FavoriteState} from '../../types/state';
import {NameSpace} from '../../const';

const initialState: FavoriteState = {
  favorites: [],
  isDataLoaded: false,
  isError: false,
};

export const favoriteSlice = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isDataLoaded = true;
        state.isError = false;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isDataLoaded = false;
        state.favorites = action.payload;
        state.isError = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isDataLoaded = false;
        state.isError = true;
      });
  },
});
