import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {authSlice} from './auth-slice/auth-slice';
import {promoSlice} from './promo-slice/promo-slice';
import {filmsSlice} from './films-slice/films-slice';
import {commentsSlice} from './comments-slice/comments-slice';
import {filmSlice} from './film-slice/film-slice';
import {favoriteSlice} from './favorite-slice/favorite-slice';

export const rootReducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Promo]: promoSlice.reducer,
  [NameSpace.Films]: filmsSlice.reducer,
  [NameSpace.Film]: filmSlice.reducer,
  [NameSpace.Favorite]: favoriteSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
});

