import {createAsyncThunk} from '@reduxjs/toolkit';
import {redirectToRoute} from '../store/action';
import {dropToken, saveToken} from './token';
import {APIRoute, AppRoute} from '../const';
import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch} from '../types/state';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Film} from '../types/film';
import {Comment, NewComment} from '../types/comment';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, string, {
  extra: AxiosInstance
}>(
  'film/fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string, {
  extra: AxiosInstance
}>(
  'film/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comment[], string, {
  extra: AxiosInstance
}>(
  'film/fetchFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<Film, undefined, {
  extra: AxiosInstance
}>(
  'promo/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'auth/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data.avatarUrl;
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch,
  extra: AxiosInstance
}>(
  'auth/login',
  async ({login: email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data.avatarUrl;
    } catch (err) {
      const error = err as AxiosError<{error: string}>;
      return rejectWithValue(error.response?.data.error);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const sendCommentAction = createAsyncThunk<Comment[], NewComment, {
  dispatch: AppDispatch,
  extra: AxiosInstance
}>(
  'film/sendComment',
  async ({filmId, text, rating}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<Comment[]>(`${APIRoute.Comments}/${filmId}`, {text, rating});
      dispatch(redirectToRoute(AppRoute.FilmComments));
      return data;
    } catch (err) {
      const error = err as AxiosError<{error: string}>;
      return rejectWithValue(error);
    }
  }
);

export const fetchFavorites = createAsyncThunk<Film[], undefined, {
  extra: AxiosInstance,
}>(
  'favorite/fetchFavorites',
  async (_args, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  }
);

export const addToFavorite = createAsyncThunk<Film, {id: number, status: number}, {
  extra: AxiosInstance
}>(
  'favorite/addToFavorite',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
);
