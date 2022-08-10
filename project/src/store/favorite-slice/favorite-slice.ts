import {createSlice} from '@reduxjs/toolkit';
import {fetchFavorites} from '../../services/api-action';
import {FavoriteState} from '../../types/state';
import {NameSpace} from '../../const';

const initialState: FavoriteState = {
  favorites: [],
  isDataLoaded: false,
};

export const favoriteSlice = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isDataLoaded = false;
        state.favorites = action.payload;
      });
  },
});
