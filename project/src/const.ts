export enum AppRoute {
  Main = '/',
  GenreName = '/genre/:genre',
  Genre = '/genre',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = '/films/:id',
  FilmId = ':id/*',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  FilmComments = '/films/:id/reviews',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Auth = 'Auth',
  Promo = 'PROMO',
  Film = 'FILM',
  Films = 'FILMS',
  Favorite = 'FAVORITE',
  Comments = 'COMMENTS',
}

export enum CommentLength {
  Min = 50,
  Max = 400,
}

export const ALL_GENRES = 'All genres';

export const STARS_AMOUNT = 10;

export const DEFAULT_RATING = 0;

export const FILMS_COUNT_PER_STEP = 8;

export const BASE_URL = 'https://10.react.pages.academy/wtw';

export const REQUEST_TIMEOUT = 5000;
