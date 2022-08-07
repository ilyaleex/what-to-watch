import {store} from '../store';
import {Comment} from './comment';
import {AuthorizationStatus} from '../const';
import {Film} from './film';

export type PromoSlice = {
  promo: Film
  isDataLoaded: boolean
}

export type FilmsSlice = {
  genre: string
  filmsList: Film[]
  isDataLoaded: boolean
}

export type FilmSlice = {
  film: Film
  similarFilms: Film[]
}

export type CommentsSlice = {
  comments: Comment[]
  isSending: boolean
}

export type AuthSlice = {
  authorizationStatus: AuthorizationStatus
  avatar: string
  error: string
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
